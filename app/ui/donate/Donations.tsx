import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Donations() {
  return (
    <SectionComponent isFirst isLast withSideBorders bgColor="blue">
      <div className="container w-full py-14 flex flex-col items-center">
        <Title bgColor="blue">Faire un don</Title>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h3 className="mb-2">Pourquoi donner ?</h3>
            <p>
              Apex est une association à but non lucratif qui vit grâce à la
              générosité de ses donateurs. Votre soutien nous permet de
              continuer à offrir nos services d&apos;accompagnement, de
              sensibilisation et de formation pour lutter contre les violences
              conjugales. Chaque don, petit ou grand, fait une différence
              significative dans la vie des personnes que nous aidons. En
              donnant, vous contribuez à créer un avenir plus sûr et plus juste
              pour les victimes de violences conjugales. Merci de votre
              générosité et de votre engagement envers notre cause.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Comment donner ?</h3>
            <div className="flex flex-col -mt-2 gap-1">
              <div className="flex gap-2 items-center">
                <Image
                  src="/vector/cb.svg"
                  width={48}
                  height={48}
                  alt="Carte Bancaire"
                  className="w-6"
                />
                <h3>Virement bancaire</h3>
              </div>
              <p className="font-bold">Coordonnées bancaires</p>
              <ul className="list-none">
                <li>
                  <strong>IBAN:</strong> FR76 1660 7000 0048 2210 7008 893
                </li>
                <li>
                  <strong>BIC:</strong> BNPAFRPPXXX
                </li>
                <li>
                  <strong>Titulaire:</strong> Apex
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 justify-start">
                <Image
                  alt="Carte Bleue"
                  src="/vector/cartebleue.svg"
                  width={35}
                  height={24}
                  className="w-10 rounded-md"
                />
                <Image
                  alt="visa"
                  src="/vector/visa.svg"
                  width={35}
                  height={24}
                  className="w-10 bg-white rounded-md border border-gray-400 px-1"
                />
                <Image
                  alt="Mastercard"
                  src="/vector/mastercard.svg"
                  width={35}
                  height={24}
                  className="w-10 bg-white rounded-md border border-gray-400 px-1"
                />
                <Image
                  alt="Paypal"
                  src="/vector/paypal.svg"
                  width={35}
                  height={24}
                  className="w-20 bg-white rounded-md border border-gray-400 p-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <Image
                  src="/vector/cheque.svg"
                  width={48}
                  height={48}
                  alt="Cheque"
                  className="w-6"
                />
                <h3>Par cheque</h3>
              </div>
              <p>
                Envoyé à l&apos;ordre d&apos;
                <span className="font-medium">Apex</span> à l&apos;adresse
                suivante :
              </p>
              <p className="font-medium">
                Maison pour les familles
                <br /> 3 rue Déodat de Séverac
                <br />
                66000 PERPIGNAN
                <br />
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/vector/online.svg"
                width={48}
                height={48}
                alt="Online"
                className="w-6"
              />
              <h3>Via Helloasso</h3>
              <ArrowRight />
              <a
                href="https://www.helloasso.com/associations/apex/formulaires/1/widget"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/vector/helloasso.svg"
                  width={200}
                  height={43}
                  alt="Helloasso"
                  className="w-[160px]"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:items-center">
            <h3>Don déductible des impôts</h3>
            <p className="text-sm md:text-center md:w-2/3">
              APEX est une association d&apos;intérêt général, les dons
              bénéficient de la réduction sur le revenu (art.200 du CGI) et de
              la réduction d&apos;impôts sur les sociétés (art. 238 du CGI)
            </p>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
