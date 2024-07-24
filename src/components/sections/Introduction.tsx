import Image from "next/image";
import { FunctionComponent } from "react";
import { Button } from "../ui/Button";
import Title from "../ui/Title";
import Separator from "../ui/Separator";

interface IntroductionProps {}

const Introduction: FunctionComponent<IntroductionProps> = () => {
  return (
    <div className="Introduction">
      <Separator rotate />
      <div className="container flex py-24 relative">
        <div className="flex flex-col w-2/3 gap-y-10">
          <Title>Présentation</Title>
          <div className="space-y-4">
            <p>
              APEX accueille, écoute et accompagne les personnes touchées par
              les violences conjugales, promouvant le respect, l&rsquo;égalité
              hommes/femmes, et la confidentialité.
            </p>
            <p>
              Notre intervention repose sur le respect des victimes, en
              favorisant leur autonomie et leur sécurité. Nous incluons
              également le soutien aux enfants affectés. Notre approche met
              l&rsquo;accent sur la responsabilisation des individus, sans les
              victimiser.
            </p>
            <p>
              En plus de nos activités d&rsquo;accompagnement, nous organisons
              des formations professionnelles dans le domaine du travail social.
            </p>
          </div>
          <Button variant="orange" className="self-end">
            En savoir plus
          </Button>
        </div>
        <Image alt="femme" src="/vector/femme.svg" width={500} height={500} />
      </div>
    </div>
  );
};

export default Introduction;
