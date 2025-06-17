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
      <div className="container flex flex-col md:flex-row pt-14 relative">
        <div className="w-full flex flex-col md:w-2/3 items-center md:items-start gap-y-10">
          <Title className="left-10 self-start">Présentation</Title>
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
          <Button
            href="/projet-associatif"
            variant="orange"
            className="self-end"
          >
            En savoir plus
          </Button>
        </div>
        <div className="my-8 md:my-0 relative min-w-[280px] min-h-[280px] xl:min-w-[500px] xl:min-h-[500px]">
          <Image alt="femme" src="/vector/femme.svg" fill />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
