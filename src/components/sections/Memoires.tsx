import { FunctionComponent } from "react";
import MemoirCard from "../ui/MemoirCard";
import Title from "../ui/Title";

interface Memoir {
  author: string;
  title: string;
  description: string;
}

interface MemoiresProps {
  memoirs?: Memoir[];
}

const Memoires: FunctionComponent<MemoiresProps> = ({ memoirs }) => {
  return (
    <div className="Memoires">
      <div className="container flex flex-col items-center">
        <Title>Mémoires</Title>
        <p className="text-center">
          APEX n&rsquo;est pas responsable du contenu des mémoires. Les
          auteur.es restent maître.sses de leurs écrits. Vous trouverez
          ci-dessous les titres, les types de mémoire et les auteur.es des
          textes qui peuvent vous intéresser. Leur intégralité est disponible en
          téléchargement.Par ailleurs si vous utilisez une partie des mémoires
          pour vos propres travaux n&rsquo;oubliez pas d&rsquo;en citer les
          auteur.es.Enfin, si des aspects des études restent en suspend, il est
          possible d&rsquo;interroger les auteurs. Contactez nous, APEX fera son
          possible pour leur transmettre les questions.
        </p>
        <div className="columns-3 gap-6 py-6">
          {memoirs &&
            memoirs.map((memoir, index) => (
              <MemoirCard
                className="w-full overflow-hidden mb-6"
                key={index}
                author={memoir.author}
                title={memoir.title}
                description={memoir.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Memoires;
