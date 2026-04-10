import Link from "next/link";
import Image from "next/image";

export default function ApexLogo() {
  return (
    <Link href="/" className="h-12">
      <Image alt="Logo Apex" src="/vector/logo.svg" fill />
    </Link>
  );
}
