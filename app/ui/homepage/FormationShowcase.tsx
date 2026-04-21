import Button from "@/app/ui/Button";
import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { FunctionComponent } from "react";

interface FormationShowcaseProps {}

const FormationShowcase: FunctionComponent<FormationShowcaseProps> = () => {
  return (
    <SectionComponent withSideBorders isLast bgColor="orange">
      <div className="container py-14">
        <Title bgColor="orange" className="md:left-10">
          L&rsquo;Organisme de Formation
        </Title>
        <div className="flex flex-col gap-y-6 items-start">
          <div className="text-justify flex flex-col md:flex-row gap-x-14 gap-y-4 items-center">
            <p>
              Notre organisme de formation, certifié QUALIOPI depuis août 2021,
              s&rsquo;engage à offrir des formations de haute qualité, reconnues
              et adaptées aux besoins des professionnels. <br />
              <br />
              La certification QUALIOPI atteste de la rigueur de nos processus
              et nous permet d&rsquo;accéder à des financements publics ou
              mutualisés, garantissant ainsi des prestations conformes aux
              attentes des entreprises et des participants.
            </p>
            <Image
              alt="logo qualiopi"
              src="/formation/logo-qualiopi.png"
              width={633}
              height={338}
              className="rounded-sm object-contain  max-w-80 bg-white"
            />
          </div>
          <Button
            icon={<ChevronRightIcon className="w-6 h-auto md:w-10" />}
            iconPosition="right"
            href="/projet-associatif"
            className="gap-1 pr-2 self-center mt-4 md:mt-10"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </SectionComponent>
  );
};

export default FormationShowcase;
