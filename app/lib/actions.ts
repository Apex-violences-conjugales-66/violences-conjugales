"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Mot de passe ou email incorrect.";
        default:
          return "Quelque chose s'est mal passé. Veuillez réessayer.";
      }
    }
    throw error;
  }
}

// Members

export async function createMember(formData: FormData) {
  const { name, title, type } = Object.fromEntries(formData.entries()) as {
    name: string;
    title: string;
    type: string;
  };

  try {
    await sql`
      INSERT INTO members (name, title, type)
      VALUES (${name}, ${title}, ${type})
    `;
  } catch (error) {
    console.error("Error creating member:", error);
    throw error;
  }
  console.log("Member created successfully");
  redirect("/admin");
}

export async function updateMember(id: string, formData: FormData) {
  const { name, title, type } = Object.fromEntries(formData.entries()) as {
    name: string;
    title: string;
    type: string;
  };

  try {
    await sql`
      UPDATE members
      SET name = ${name}, title = ${title}, type = ${type}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
  console.log("Member updated successfully");
  revalidatePath("/admin");
  redirect("/admin");
}

// Partners

export async function createPartner(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const image = formData.get("image") as File;

  const { url } = await put(`partners/${image.name}`, image, {
    access: "public",
  });

  try {
    await sql`
      INSERT INTO partners (name, type, image_url)
      VALUES (${name}, ${type}, ${url})
    `;
  } catch (error) {
    await del(url);
    console.error("Error creating partner:", error);
    throw error;
  }
  redirect("/admin");
}

export async function updatePartner(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const image = formData.get("image") as File | null;

  let imageUrl: string | undefined;

  if (image && image.size > 0) {
    const { url } = await put(`partners/${image.name}`, image, {
      access: "public",
    });
    imageUrl = url;
  }

  try {
    if (imageUrl) {
      await sql`
        UPDATE partners
        SET name = ${name}, type = ${type}, image_url = ${imageUrl}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE partners
        SET name = ${name}, type = ${type}
        WHERE id = ${id}
      `;
    }
  } catch (error) {
    if (imageUrl) await del(imageUrl);
    console.error("Error updating partner:", error);
    throw error;
  }
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteEntry(table: string, id: string | number) {
  try {
    await sql`DELETE FROM ${sql(table)} WHERE id = ${id}`;
  } catch (error) {
    console.error(`Error deleting entry from ${table}:`, error);
    throw error;
  }
  revalidatePath("/admin");
  redirect("/admin");
}
