import ContactInfo from "@/app/ui/ContactInfo";
import MemoirCard from "@/app/ui/MemoirCard";
import Title from "@/app/ui/Title";
import { FunctionComponent } from "react";
export interface Memoir {
  author: string;
  title: string;
  description?: string;
  docPath?: string;
}

interface MemoiresProps {
  memoirs: Memoir[];
}

const Memoires: FunctionComponent<MemoiresProps> = ({ memoirs }) => {
  return (
    <div className="Memoires mt-24">
      <div className="container flex flex-col items-center gap-10">
        <Title className="self-center">Mémoires</Title>
        <div className="columns-1 gap-6 md:columns-2 xl:columns-3 [&>div]:overflow-hidden [&>div]:mb-6">
          {memoirs.map((memoir, index) => (
            <MemoirCard
              key={index}
              author={memoir.author}
              title={memoir.title}
              description={memoir.description}
              docPath={memoir.docPath}
            />
          ))}
        </div>
        <p className="font-light flex flex-col text-center">
          APEX n&rsquo;est pas responsable du contenu des mémoires.
          <br />
          Par ailleurs si vous utilisez une partie des mémoires pour vos propres
          travaux n&rsquo;oubliez pas d&rsquo;en citer les auteur.es.
          <br />
          <br /> Si des aspects des études restent en suspend, il est possible
          d&rsquo;interroger les auteurs <br />
          Contactez nous, APEX fera son possible pour leur transmettre les
          questions.
        </p>
        <ContactInfo phone="04 68 63 50 24" />
      </div>
    </div>
  );
};

export default Memoires;
