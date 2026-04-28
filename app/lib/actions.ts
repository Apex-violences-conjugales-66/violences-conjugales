"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put, del } from "@vercel/blob";
import postgres from "postgres";
import { FormEntry } from "@/app/lib/definitions";

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
  revalidatePath("/", "layout");
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
  revalidatePath("/", "layout");
}

// Partners

export async function createPartner(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const image = formData.get("image") as File;

  const { url } = await put(`partners/${image.name}`, image, {
    access: "public",
    addRandomSuffix: true,
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
  revalidatePath("/", "layout");
}

export async function updatePartner(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const image = formData.get("image") as File | null;

  let imageUrl: string | undefined;

  if (image && image.size > 0) {
    const { url } = await put(`partners/${image.name}`, image, {
      access: "public",
      addRandomSuffix: true,
    });
    imageUrl = url;
  }

  let oldImageUrl: string | undefined;
  if (imageUrl) {
    const rows = await sql<
      { imageUrl: string }[]
    >`SELECT image_url AS "imageUrl" FROM partners WHERE id = ${id}`;
    oldImageUrl = rows[0]?.imageUrl;
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

  if (oldImageUrl && oldImageUrl.includes("blob.vercel-storage.com")) {
    await del(oldImageUrl);
  }
  revalidatePath("/", "layout");
}

// Formations

export async function createFormation(formData: FormData) {
  const { name, date, year, status, target, instructor } = Object.fromEntries(
    formData.entries(),
  ) as {
    name: string;
    date: string;
    year: string;
    status: string;
    target: string;
    instructor: string;
  };

  try {
    await sql`
      INSERT INTO formations (name, date, year, status, target, instructor)
      VALUES (${name}, ${date}, ${parseInt(year)}, ${status}, ${target}, ${instructor})
    `;
  } catch (error) {
    console.error("Error creating formation:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateFormation(id: string, formData: FormData) {
  const { name, date, year, status, target, instructor } = Object.fromEntries(
    formData.entries(),
  ) as {
    name: string;
    date: string;
    year: string;
    status: string;
    target: string;
    instructor: string;
  };

  try {
    await sql`
      UPDATE formations
      SET name = ${name}, date = ${date}, year = ${parseInt(year)}, status = ${status}, target = ${target}, instructor = ${instructor}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating formation:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

// Documents

export async function createDocument(formData: FormData) {
  const name = formData.get("name") as string;
  const file = formData.get("document") as File;

  const { url } = await put(`documents/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  try {
    await sql`
      INSERT INTO document_resources (name, document_url)
      VALUES (${name}, ${url})
    `;
  } catch (error) {
    await del(url);
    console.error("Error creating document:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateDocument(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const file = formData.get("document") as File | null;

  let documentUrl: string | undefined;

  if (file && file.size > 0) {
    const { url } = await put(`documents/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    documentUrl = url;
  }

  let oldDocumentUrl: string | undefined;
  if (documentUrl) {
    const rows = await sql<
      { documentUrl: string }[]
    >`SELECT document_url AS "documentUrl" FROM document_resources WHERE id = ${id}`;
    oldDocumentUrl = rows[0]?.documentUrl;
  }

  try {
    if (documentUrl) {
      await sql`
        UPDATE document_resources
        SET name = ${name}, document_url = ${documentUrl}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE document_resources
        SET name = ${name}
        WHERE id = ${id}
      `;
    }
  } catch (error) {
    if (documentUrl) await del(documentUrl);
    console.error("Error updating document:", error);
    throw error;
  }

  if (oldDocumentUrl && oldDocumentUrl.includes("blob.vercel-storage.com")) {
    await del(oldDocumentUrl);
  }
  revalidatePath("/", "layout");
}

// Books

export async function createBook(formData: FormData) {
  const { author, title, description } = Object.fromEntries(
    formData.entries(),
  ) as { author: string; title: string; description: string };

  try {
    await sql`
      INSERT INTO books (author, title, description)
      VALUES (${author}, ${title}, ${description})
    `;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateBook(id: string, formData: FormData) {
  const { author, title, description } = Object.fromEntries(
    formData.entries(),
  ) as { author: string; title: string; description: string };

  try {
    await sql`
      UPDATE books
      SET author = ${author}, title = ${title}, description = ${description}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

// Movies

export async function createMovie(formData: FormData) {
  const { title, description, movieUrl } = Object.fromEntries(
    formData.entries(),
  ) as { title: string; description: string; movieUrl: string };

  try {
    await sql`
      INSERT INTO movies (title, description, movie_url)
      VALUES (${title}, ${description}, ${movieUrl})
    `;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateMovie(id: string, formData: FormData) {
  const { title, description, movieUrl } = Object.fromEntries(
    formData.entries(),
  ) as { title: string; description: string; movieUrl: string };

  try {
    await sql`
      UPDATE movies
      SET title = ${title}, description = ${description}, movie_url = ${movieUrl}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Error updating movie:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

// Memoirs

export async function createMemoir(formData: FormData) {
  const { author, title, description } = Object.fromEntries(
    formData.entries(),
  ) as { author: string; title: string; description: string };
  const file = formData.get("document") as File;

  const { url } = await put(`memoirs/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  try {
    await sql`
      INSERT INTO memoirs (author, title, description, document_url)
      VALUES (${author}, ${title}, ${description}, ${url})
    `;
  } catch (error) {
    await del(url);
    console.error("Error creating memoir:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateMemoir(id: string, formData: FormData) {
  const { author, title, description } = Object.fromEntries(
    formData.entries(),
  ) as { author: string; title: string; description: string };
  const file = formData.get("document") as File | null;

  let documentUrl: string | undefined;

  if (file && file.size > 0) {
    const { url } = await put(`memoirs/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    documentUrl = url;
  }

  let oldDocumentUrl: string | undefined;
  if (documentUrl) {
    const rows = await sql<
      { documentUrl: string }[]
    >`SELECT document_url AS "documentUrl" FROM memoirs WHERE id = ${id}`;
    oldDocumentUrl = rows[0]?.documentUrl;
  }

  try {
    if (documentUrl) {
      await sql`
        UPDATE memoirs
        SET author = ${author}, title = ${title}, description = ${description}, document_url = ${documentUrl}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE memoirs
        SET author = ${author}, title = ${title}, description = ${description}
        WHERE id = ${id}
      `;
    }
  } catch (error) {
    if (documentUrl) await del(documentUrl);
    console.error("Error updating memoir:", error);
    throw error;
  }

  if (oldDocumentUrl && oldDocumentUrl.includes("blob.vercel-storage.com")) {
    await del(oldDocumentUrl);
  }
  revalidatePath("/", "layout");
}

// Catalogues

export async function createCatalogue(formData: FormData) {
  const year = formData.get("year") as string;
  const file = formData.get("file") as File;

  const { url } = await put(`catalogues/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  try {
    await sql`
      INSERT INTO catalogues (year, catalogue_url, uploaded_at)
      VALUES (${parseInt(year)}, ${url}, NOW())
    `;
  } catch (error) {
    await del(url);
    console.error("Error creating catalogue:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateCatalogue(id: string, formData: FormData) {
  const year = formData.get("year") as string;
  const file = formData.get("file") as File | null;

  let catalogueUrl: string | undefined;

  if (file && file.size > 0) {
    const { url } = await put(`catalogues/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    catalogueUrl = url;
  }

  let oldCatalogueUrl: string | undefined;
  if (catalogueUrl) {
    const rows = await sql<
      { catalogueUrl: string }[]
    >`SELECT catalogue_url AS "catalogueUrl" FROM catalogues WHERE id = ${id}`;
    oldCatalogueUrl = rows[0]?.catalogueUrl;
  }

  try {
    if (catalogueUrl) {
      await sql`
        UPDATE catalogues
        SET year = ${parseInt(year)}, catalogue_url = ${catalogueUrl}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE catalogues
        SET year = ${parseInt(year)}
        WHERE id = ${id}
      `;
    }
  } catch (error) {
    if (catalogueUrl) await del(catalogueUrl);
    console.error("Error updating catalogue:", error);
    throw error;
  }

  if (oldCatalogueUrl && oldCatalogueUrl.includes("blob.vercel-storage.com")) {
    await del(oldCatalogueUrl);
  }
  revalidatePath("/", "layout");
}

// Bulletins

export async function createBulletin(formData: FormData) {
  const year = formData.get("year") as string;
  const file = formData.get("file") as File;

  const { url } = await put(`bulletins/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  try {
    await sql`
      INSERT INTO bulletins (year, bulletin_url, uploaded_at)
      VALUES (${parseInt(year)}, ${url}, NOW())
    `;
  } catch (error) {
    await del(url);
    console.error("Error creating bulletin:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateBulletin(id: string, formData: FormData) {
  const year = formData.get("year") as string;
  const file = formData.get("file") as File | null;

  let bulletinUrl: string | undefined;

  if (file && file.size > 0) {
    const { url } = await put(`bulletins/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    bulletinUrl = url;
  }

  let oldBulletinUrl: string | undefined;
  if (bulletinUrl) {
    const rows = await sql<
      { bulletinUrl: string }[]
    >`SELECT bulletin_url AS "bulletinUrl" FROM bulletins WHERE id = ${id}`;
    oldBulletinUrl = rows[0]?.bulletinUrl;
  }

  try {
    if (bulletinUrl) {
      await sql`
        UPDATE bulletins
        SET year = ${parseInt(year)}, bulletin_url = ${bulletinUrl}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE bulletins
        SET year = ${parseInt(year)}
        WHERE id = ${id}
      `;
    }
  } catch (error) {
    if (bulletinUrl) await del(bulletinUrl);
    console.error("Error updating bulletin:", error);
    throw error;
  }

  if (oldBulletinUrl && oldBulletinUrl.includes("blob.vercel-storage.com")) {
    await del(oldBulletinUrl);
  }
  revalidatePath("/", "layout");
}

export async function createCertificat(formData: FormData) {
  const year = formData.get("year") as string;
  const file = formData.get("file") as File;

  const { url } = await put(`certificats/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  try {
    await sql`
      INSERT INTO certificats (year, certificat_url, uploaded_at)
      VALUES (${parseInt(year)}, ${url}, NOW())
    `;
  } catch (error) {
    await del(url);
    console.error("Error creating certificat:", error);
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function updateCertificat(id: string, formData: FormData) {
  const year = formData.get("year") as string;
  const file = formData.get("file") as File | null;

  let certificatUrl: string | undefined;

  if (file && file.size > 0) {
    const { url } = await put(`certificats/${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    certificatUrl = url;
  }

  let oldCertificatUrl: string | undefined;
  if (certificatUrl) {
    const rows = await sql<
      { certificatUrl: string }[]
    >`SELECT certificat_url AS "certificatUrl" FROM certificats WHERE id = ${id}`;
    oldCertificatUrl = rows[0]?.certificatUrl;
  }

  try {
    if (certificatUrl) {
      await sql`
        UPDATE certificats
        SET year = ${parseInt(year)}, certificat_url = ${certificatUrl}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE certificats
        SET year = ${parseInt(year)}
        WHERE id = ${id}
      `;
    }
  } catch (error) {
    if (certificatUrl) await del(certificatUrl);
    console.error("Error updating certificat:", error);
    throw error;
  }

  if (
    oldCertificatUrl &&
    oldCertificatUrl.includes("blob.vercel-storage.com")
  ) {
    await del(oldCertificatUrl);
  }
  revalidatePath("/", "layout");
}

export async function deleteEntry(
  table: FormEntry,
  id: string | number,
  blobUrl?: string,
) {
  try {
    await sql`DELETE FROM ${sql(table)} WHERE id = ${id}`;
    if (blobUrl && blobUrl.includes("blob.vercel-storage.com")) {
      await del(blobUrl);
    }
  } catch (error) {
    console.error(`Error deleting entry from ${table}:`, error);
    throw error;
  }
  revalidatePath("/", "layout");
  redirect("/admin");
}
