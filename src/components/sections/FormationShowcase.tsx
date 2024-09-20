import Image from "next/image";
import { FunctionComponent } from "react";
import { Button } from "../ui/Button";
import Title from "../ui/Title";

interface FormationShowcaseProps {}

const FormationShowcase: FunctionComponent<FormationShowcaseProps> = () => {
  return (
    <div className="container flex flex-col gap-y-10 pt-14 ">
      <Title className="relative left-10">L'Organisme de Formation</Title>
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-14">
          <p>
            Notre organisme de formation, certifié QUALIOPI depuis août 2021,
            s'engage à offrir des formations de haute qualité, reconnues et
            adaptées aux besoins des professionnels. <br />
            <br />
            La certification QUALIOPI atteste de la rigueur de nos processus et
            nous permet d'accéder à des financements publics ou mutualisés,
            garantissant ainsi des prestations conformes aux attentes des
            entreprises et des participants.
          </p>
          <div className="relative min-h-[100px] min-w-[250px] border border-blue">
            <Image
              alt="logo qualiopi"
              src="/formation/logo-qualiopi.png"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-x-14">
          <div className="flex flex-col gap-y-6">
            <p>
              Nous proposons un catalogue de formations, notamment sur les
              violences conjugales, destiné aux professionnels du secteur
              social, judiciaire, médical et paramédical. <br />
              <br />
              Pour en savoir plus sur nos offres et modalités d'inscription,
              visitez la page dédiée.
            </p>
            <Button href="/formation" variant="orange" className="self-center">
              En savoir plus
            </Button>
          </div>
          <div className="relative min-h-[260px] min-w-[540px] shadow-md rounded-2xl">
            <Image
              className="rounded-2xl"
              alt="groupe de formation"
              src="/formation/formation-groupe-photo.webp"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationShowcase;
