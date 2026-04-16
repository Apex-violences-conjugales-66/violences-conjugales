import Button from "@/app/ui/Button";
import Quotation from "@/app/ui/Quotation";
import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";
import { ChevronRightIcon } from "lucide-react";
import { FunctionComponent } from "react";

interface IntroductionProps {}

const Introduction: FunctionComponent<IntroductionProps> = () => {
  return (
    <SectionComponent className="container flex flex-col relative gap-8 md:gap-0">
      <Quotation
        author="Ban Ki-moon"
        label="diplomate, ancien secrétaire de l’ONU"
      >
        La violence à l’égard des femmes
        <br />
        n’est jamais acceptable, jamais excusable,
        <br /> jamais tolérable
      </Quotation>
      <div className="w-full flex flex-col md:w-2/3 items-center md:items-start gap-y-10">
        <Title className="left-10 self-start">Présentation</Title>
        <p className="">
          APEX accueille, écoute et accompagne les personnes touchées par les
          violences conjugales, promouvant le respect, l&rsquo;égalité
          hommes/femmes, et la confidentialité.
          <br />
          <br />
          Notre intervention repose sur le respect des victimes, en favorisant
          leur autonomie et leur sécurité.
          <br /> Nous incluons également le soutien aux enfants affectés.
          <br /> Notre approche met l&rsquo;accent sur la responsabilisation des
          individus, sans les victimiser.
          <br />
          <br />
          En plus de nos activités d&rsquo;accompagnement, nous organisons des
          formations professionnelles dans le domaine du travail social.
        </p>
        <Button
          icon={<ChevronRightIcon className="w-6 h-auto md:w-10" />}
          iconPosition="right"
          href="/projet-associatif"
          className="gap-1 pr-2 self-center"
        >
          En savoir plus
        </Button>
      </div>
    </SectionComponent>
  );
};

export default Introduction;
