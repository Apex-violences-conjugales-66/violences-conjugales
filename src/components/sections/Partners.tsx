"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import Title from "../ui/Title";
import Separator from "../ui/Separator";
import Swiper from "../ui/Swiper/Swiper";
import SwiperCard from "../ui/Swiper/SwiperCard";

import {
  imagePartnersAssoPaths,
  imagePartnersInstiPaths,
} from "../../data/imageData";
import Divider from "../ui/Divider";
import { Squircle } from "corner-smoothing";

interface PartnersProps {}

const Partners: FunctionComponent<PartnersProps> = () => {
  return (
    <div className="Partners">
      <Separator variant />
      <div className="w-full relative py-24 flex">
        <div className="absolute w-[calc(33.3%-4px)] h-[calc(66.6%-4px)] bg-yellow left-0 top-0" />
        <div className="absolute w-2/3 h-1/3 bg-orange right-0 top-0" />
        <div className="absolute w-2/3 h-1/3 bg-orange left-0 bottom-0" />
        <div className="absolute w-[calc(33.3%-4px)] h-[calc(66.6%-4px)] bg-yellow right-0 bottom-0" />
        <div className="container z-10 relative flex flex-col items-center gap-y-10">
          <Title style="orange">Nos Partenaires</Title>
          <Squircle cornerRadius={80}>
            <Swiper>
              <SwiperCard>
                <h3>Institutionnels et financiers</h3>
                <p className="text-center">
                  Toutes nos actions s&rsquo;inscrivent dans les différents
                  plans interministériels de lutte contre les violences faites
                  aux femmes, elles sont financées et soutenues par les acteurs
                  suivants
                </p>
                <div className="w-full flex flex-wrap grow justify-center gap-2  mt-24 xl:mt-12">
                  {imagePartnersInstiPaths.map((path, index) => (
                    <div key={index} className="w-48 h-36 relative">
                      <Image
                        alt={`Image ${index + 1}`}
                        src={path}
                        fill
                        sizes="(max-width: 250px)"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </SwiperCard>
              <SwiperCard>
                <h3>Associatifs</h3>
                <p className="text-center">
                  Les associations partenaires sont les alliées indispensables
                  de nos actions sur le terrain
                </p>
                <div className="w-full flex flex-wrap grow justify-center gap-1">
                  {imagePartnersAssoPaths.map((path, index) => (
                    <div key={index} className="w-48 h-36 relative">
                      <Image
                        alt={`Image ${index + 1}`}
                        src={path}
                        fill
                        sizes="(max-width: 250px)"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </SwiperCard>
              <SwiperCard className="px-12 gap-y-8">
                <h3>Professionnels</h3>
                <div className="w-full flex flex-col justify-evenly grow xl:flex-row gap-x-4">
                  <div className="xl:w-1/2 grow justify-evenly flex flex-col gap-y-4">
                    <div>
                      <h4>SANTE</h4>
                      <ul className="">
                        <li>
                          Les psychologues de différents services et en cabinet
                        </li>
                        <li>Le Centre Hospitalier de Perpignan</li>
                        <li> Le CAC 48</li>
                        <li> Les médecins généralistes et spécialisés </li>
                        <li> Les sage-femmes</li>
                        <li>
                          Les Points Accueil Ecoute Jeune: Parenthèse et de Maux
                          en Mots
                        </li>
                        <li>
                          ANPAA 66 (Association Nationale de Prévention en
                          Alcoologie et Addictologie)
                        </li>
                        <li>AIDES 66</li>
                        <li>Equipe Mobile Psychiatrie Précarité </li>
                        <li>Les Groupe Entraide Mutuelle Les CMP</li>
                      </ul>
                    </div>
                    <Divider horizontal visible />
                    <div>
                      <h4>DROIT - JUSTICE</h4>
                      <ul>
                        <li>
                          Les assistantes sociales de la gendarmerie et du
                          commissariat central
                        </li>
                        <li>Les avocats</li>
                        <li>La Maison de la justice</li>
                        <li>La Maison d&rsquo;Accès aux Droits</li>
                        <li>France victimes 66</li>
                        <li>
                          Le Centre d&rsquo;Information des Droits de la Femme
                          et de la Famille
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Divider className="hidden md:block" />
                  <Divider horizontal visible className="xl:hidden my-4" />
                  <div className="xl:w-1/2 grow justify-evenly flex flex-col gap-y-4">
                    <div>
                      <h4>SOCIAL</h4>
                      Les travailleurs sociaux de:
                      <ul>
                        <li>Enfance Catalane</li>
                        <li>UDAF</li>
                        <li>Caisse d&rsquo;Allocations Familiales</li>
                        <li>Maisons Sociales de Proximité</li>
                      </ul>
                    </div>
                    <Divider horizontal visible />
                    <div>
                      <h4>LOGEMENT - HEBERGEMENT</h4>
                      <li>
                        Les Centres d&rsquo;Hébergement et de Réinsertion
                        Sociale et les services d&rsquo;accueil d&rsquo;urgence
                      </li>
                      <li>Habitat humanisme</li>
                      <li>L&rsquo;Agence Immobilière à Vocation Sociale</li>
                      <li>L&rsquo;Office 66 HLM</li>
                    </div>
                    <Divider horizontal visible />
                    <div>
                      <h4>AIDE AUX MIGRANTS</h4>
                      <ul>
                        <li>L&rsquo;ASTI</li>
                        <li>La Cimade</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperCard>
            </Swiper>
          </Squircle>
        </div>
      </div>
      <Separator rotate />
    </div>
  );
};

export default Partners;
