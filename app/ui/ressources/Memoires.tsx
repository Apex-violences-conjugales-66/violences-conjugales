import { Memoir } from "@/app/lib/definitions";
import ContactInfo from "@/app/ui/ContactInfo";
import Divider from "@/app/ui/Divider";
import Heart from "@/app/ui/icons/Heart";
import MemoirCard from "@/app/ui/MemoirCard";
import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";
import Image from "next/image";

export default function Memoires({ memoirs }: { memoirs: Memoir[] }) {
  return (
    <SectionComponent isLast>
      <div className="container flex flex-col gap-4 ">
        <div className="flex flex-col ">
          <Title className="self-center">Mémoires</Title>
          <div className="flex flex-col">
            <p className="font-light">
              <b>APEX</b> n&rsquo;est pas responsable du contenu des mémoires.
              <br />
              Si vous utilisez une partie des mémoires pour vos propres travaux
              n&rsquo;oubliez pas d&rsquo;en citer les auteur.es
              <Heart className="w-8 inline-block ml-1" />
            </p>
            <div className="flex gap-4 items-center self-end">
              <p>Contactez-nous pour plus d&rsquo;informations</p>
              <ContactInfo phone="04 68 63 50 24" className="shrink-0" />
            </div>
          </div>
        </div>
        <div className="columns-1 md:columns-2 xl:columns-3 space-y-4">
          {memoirs.map((memoir) => (
            <div key={memoir.id} className="overflow-hidden">
              <MemoirCard
                id={memoir.id}
                author={memoir.author}
                title={memoir.title}
                description={memoir.description}
                documentUrl={memoir.documentUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionComponent>
  );
}
