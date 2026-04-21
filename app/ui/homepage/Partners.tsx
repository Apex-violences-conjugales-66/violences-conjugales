"use client";

import { Partner } from "@/app/lib/definitions";
import Divider from "@/app/ui/Divider";
import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";
import Image from "next/image";

export default function Partners({ partners }: { partners: Partner[] }) {
  const institutionels = partners.filter(
    (partner) => partner.type === "institutionnel",
  );
  const associatifs = partners.filter(
    (partner) => partner.type === "associatif",
  );
  return (
    <SectionComponent>
      <div className="container flex flex-col">
        <Title className="self-center">Nos Partenaires</Title>
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-6 md:space-y-10 lg:flex lg:space-y-0 lg:gap-x-4">
            <div className="flex flex-col items-center gap-4 lg:w-1/2">
              <h2 className="underline underline-offset-4 decoration-1 mb-6">
                Institutionnels et financiers
              </h2>
              <Divider horizontal visibleLg className="mb-6" />
              <div className="w-full flex flex-wrap gap-1 justify-center">
                {institutionels.map((institutionel) => (
                  <div key={institutionel.id} className="relative w-24 h-16">
                    <Image
                      alt={institutionel.name}
                      src={institutionel.imageUrl}
                      fill
                      className="object-contain border border-gray-50 rounded-sm"
                    />
                  </div>
                ))}
              </div>
              <p className="font-extralight text-center">
                Toutes nos actions s&rsquo;inscrivent dans les différents plans
                interministériels de lutte contre les violences faites aux
                femmes
              </p>
            </div>
            <Divider />
            <div className="flex flex-col items-center gap-4 lg:w-1/2">
              <h2 className="underline underline-offset-4 decoration-1 mb-6">
                Associatifs
              </h2>
              <Divider horizontal visibleLg className="mb-6" />
              <div className="w-full flex flex-wrap gap-1 justify-center">
                {associatifs.map((associatif) => (
                  <div key={associatif.id} className="w-24 h-16 relative">
                    <Image
                      alt={associatif.name}
                      src={associatif.imageUrl}
                      fill
                      className="object-contain border border-gray-50 rounded-sm"
                    />
                  </div>
                ))}
              </div>
              <p className="font-extralight text-center">
                Les associations partenaires sont les alliées indispensables de
                nos actions sur le terrain
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="underline underline-offset-4 decoration-1 mb-6">
              Professionnels
            </h2>
            <Divider horizontal visibleLg className="mb-6" />
            <div className="w-full flex flex-col lg:flex-row gap-x-4">
              <div className="lg:w-1/2 flex flex-col gap-y-4">
                <div>
                  <h4>SANTE</h4>
                  <p>Les psychologues de différents services et en cabinet</p>
                  <p>Le Centre Hospitalier de Perpignan</p>
                  <p>Le CAC 48</p>
                  <p>Les médecins généralistes et spécialisés</p>
                  <p>Les sage-femmes</p>
                  <p>
                    Les Points Accueil Ecoute Jeune: Parenthèse et de Maux en
                    Mots
                  </p>
                  <p>
                    ANPAA 66 (Association Nationale de Prévention en Alcoologie
                    et Addictologie)
                  </p>
                  <p>AIDES 66</p>
                  <p>Equipe Mobile Psychiatrie Précarité</p>
                  <p>Les Groupe Entraide Mutuelle</p>
                  <p>Les CMP</p>
                </div>
                <Divider horizontal />
                <div>
                  <h4>SOCIAL</h4>
                  <p>Enfance Catalane</p>
                  <p>UDAF</p>
                  <p>Caisse d&rsquo;Allocations Familiales</p>
                  <p>Maisons Sociales de Proximité</p>
                </div>
              </div>
              <Divider visibleLg />
              <Divider horizontal hiddenLg className="my-4" />
              <div className="lg:w-1/2 grow flex flex-col gap-y-4">
                <div>
                  <h4>DROIT - JUSTICE</h4>
                  <p>
                    Les assistantes sociales de la gendarmerie et du
                    commissariat central
                  </p>
                  <p>Les avocats </p>
                  <p>La Maison de la justice</p>
                  <p>La Maison d&rsquo;Accès aux Droits</p>
                  <p>France victimes 66</p>
                  <p>
                    Le Centre d&rsquo;Information des Droits de la Femme et de
                    la Famille
                  </p>
                </div>
                <Divider horizontal />
                <div>
                  <h4>LOGEMENT - HEBERGEMENT</h4>
                  <p>
                    Les Centres d&rsquo;Hébergement, de réinsertion sociale et
                    les services d&rsquo;accueil d&rsquo;urgence
                  </p>
                  <p>Habitat humanisme</p>
                  <p>L&rsquo;Agence Immobilière à Vocation Sociale</p>
                  <p>L&rsquo;Office 66 HLM</p>
                </div>
                <Divider horizontal />
                <div>
                  <h4>AIDE AUX MIGRANTS</h4>
                  <p>L&rsquo;ASTI</p>
                  <p>La Cimade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
