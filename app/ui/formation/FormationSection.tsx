import { ANNEE_BULLETIN } from "@/app/lib/constants";
import ContactInfo from "@/app/ui/ContactInfo";
import Divider from "@/app/ui/Divider";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "@/app/lib/definitions";
import SectionComponent from "@/app/ui/SectionComponent";

export default async function FormationSection({
  catalogueUrl,
  bulletinUrl,
  formations,
}: {
  catalogueUrl: string;
  bulletinUrl: string;
  formations: Formation[];
}) {
  console.log("🚀 ~ FormationSection ~ catalogueUrl:", catalogueUrl);
  console.log("🚀 ~ FormationSection ~ bulletinUrl:", bulletinUrl);

  return (
    <SectionComponent isFirst={true} withSideBorders={true} bgColor="orange">
      <div className="container py-14">
        <div className="flex flex-col xl:flex-row gap-x-6 justify-between">
          <div className="xl:w-2/3 text-justify">
            <h3 className="mb-2">
              Certification QUALIOPI : Un Gage de Qualité
            </h3>
            <p>
              Depuis août 2021, nous sommes fiers de vous annoncer que notre
              organisme de formation a obtenu la certification QUALIOPI. Cette
              reconnaissance témoigne de notre engagement envers
              l&rsquo;excellence et la qualité dans le domaine de la formation.
            </p>

            <h3 className="mt-6 mb-2">
              Qu&rsquo;est-ce que la certification QUALIOPI ?
            </h3>
            <p>
              QUALIOPI est un label qui garantit la qualité des prestataires
              d&rsquo;actions concourant au développement des compétences. Elle
              s&rsquo;applique aux actions de formation, aux bilans de
              compétences, à la validation des acquis de l&rsquo;expérience, et
              à la formation par apprentissage. Cette certification, délivrée
              par des certificateurs indépendants, assure une qualité reconnue,
              permettant aux organismes de formation de bénéficier de fonds
              publics ou mutualisés. Elle atteste également de la rigueur des
              processus mis en place et offre une visibilité accrue de nos
              formations auprès des entreprises et des usagers.
            </p>
          </div>
          <div className="flex mt-6 h-48 md:h-80 self-center xl:self-auto xl:h-auto flex-col w-1/2 xl:w-1/3 items-center gap-y-2">
            <Link
              href="/formation/qualianor-certification.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full relative border border-blue-dark hover:border-white hover:opacity-75 transition"
            >
              <Image
                alt="logo qualiopi"
                src="/formation/logo-qualiopi.png"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="/formation/qualianor-certification.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Voir notre certificat
            </Link>
          </div>
        </div>
        <div className="text-justify mt-6 ">
          <h3 className="mb-2">Nos Offres de Formation</h3>
          <p>
            Nous continuons d&rsquo;organiser des sessions de formation adaptées
            à vos besoins :
          </p>
          <ul>
            <li>
              <b>En Inter ou Intra structure</b> : pour des formations
              personnalisées en fonction de vos équipes.
            </li>
            <li>
              <b>Délocalisées</b> : pour répondre aux demandes spécifiques en
              intra.
            </li>
          </ul>
          Toutes nos formations sont dispensées par les intervenant.e.s
          d&rsquo;APEX, formé.e.s par notre partenaire québécois,
          l&rsquo;organisme Option - Une alternative à la violence conjugale et
          familiale.
        </div>
        <div className="mt-6">
          <h3 className="mb-2">
            Catalogue de Formation {ANNEE_BULLETIN}-{ANNEE_BULLETIN + 1}
          </h3>
          <div>
            Découvrez notre offre de formation pour la fin de {ANNEE_BULLETIN}{" "}
            et l&rsquo;année {ANNEE_BULLETIN + 1}.
            <br /> Vous trouverez ci-dessous les formations proposées en
            inter-entreprise.
            <br /> <br /> Téléchargez notre{" "}
            <Link
              href={catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:underline"
            >
              catalogue des formations {ANNEE_BULLETIN + 1}
            </Link>
          </div>
          {formations.map((formation, index) => (
            <div key={formation.id}>
              <Divider horizontal visible className="my-4" />
              <div>
                <p>
                  <b>Formation:</b> {formation.name}
                </p>
                <b>Date:</b> {formation.date}
                <br />
                <b>
                  {formation.status === "available"
                    ? "Réservations possibles"
                    : "Plus de réservations possibles"}
                </b>
                <p>
                  <b>Public:</b> {formation.target}
                </p>
                <p>
                  <b>Formateur.trices: </b> {formation.instructor}
                </p>
              </div>
            </div>
          ))}
          <Divider horizontal className="my-4" />
          <div className="flex gap-x-2 items-center mt-6">
            <p>Pour organiser une formation en intra, contactez-nous au </p>
            <ContactInfo phone="06 72 37 57 80" />
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <h3 className="mb-2">Informations et Inscriptions</h3>
          <div className="flex flex-col-reverse xl:flex-row-reverse gap-6">
            <div className="xl:w-1/2 flex flex-col gap-2 text-center items-center">
              Pour toute information ou pour vous inscrire à nos formations,
              veuillez contacter:
              <span className="mt-6">
                <b>Valérie FONTIMPE ou Christine GUILLAUMES</b>
              </span>
              <ContactInfo
                phone="04 68 63 50 24 | 06 72 37 57 80"
                email="apex-formation@hotmail.com"
                address1="3 rue Déodat de Séverac"
                address2="Maison pour les familles"
                address3="66000 - Perpignan"
              />
            </div>
            <div className="xl:w-1/2 space-y-2">
              <b>Coût pédagogique :</b>
              <ul>
                <li>290 € / jour</li>{" "}
                <li> 300 € / jour (selon la formation)</li>
              </ul>
              <p className="mb-6">
                Possibilité de prise en charge par les OPCO.
              </p>
              <p>
                <b>Modalités d&rsquo;accès à nos formations :</b>
              </p>
              <ul>
                <li>
                  Inscription validée après signature de la convention ou du
                  contrat de formation.
                </li>
                <li>
                  {" "}
                  Délais d&rsquo;accès : Jusqu&rsquo;à 48h avant le début de la
                  formation.
                </li>
                <li>
                  Accessible aux personnes en situation de handicap (nous
                  contacter en amont).
                </li>
              </ul>
              <div>
                <b>Prérequis :</b> Aucun prérequis nécessaire. <br />
              </div>
            </div>
          </div>
          <Divider horizontal visible className="mt-6 mb-2 xl:my-2" />
          <div>
            Si vous souhaitez vous inscrire à l&rsquo;une de nos formations,
            merci de télécharger et de remplir intégralement le bulletin
            d&rsquo;inscription ci-dessous, puis de nous le renvoyer par mail ou
            par courrier.
          </div>
          <Link
            href={bulletinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:underline self-center mt-4"
          >
            Bulletin d&rsquo;inscription {ANNEE_BULLETIN}
          </Link>
        </div>
      </div>
    </SectionComponent>
  );
}
