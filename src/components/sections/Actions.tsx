import Image from "next/image";
import { FunctionComponent } from "react";
import Title from "../ui/Title";
import Accordion from "../ui/Accordion/Accordion";
import AccordionItem from "../ui/Accordion/AccordionItem";
import ContactInfo from "../ui/ContactInfo";
import Divider from "../ui/Divider";
import Separator from "../ui/Separator";

interface ActionsProps {}

const Actions: FunctionComponent<ActionsProps> = () => {
  return (
    <div className="Actions ">
      <div className="flex flex-col items-center">
        <Separator rotate />
        <Title id="actions" className="mt-24 scroll-mt-28">
          Nos Actions
        </Title>
        <div className="container flex flex-col items-center mt-24">
          <Accordion>
            <AccordionItem title="L'Escale" color="blue">
              <div className="flex flex-col gap-y-4">
                <p>
                  Un lieu de soutien dédié aux femmes victimes ou ayant été
                  victimes de violences conjugales, avec ou sans enfants.
                </p>
                <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-8">
                  <div className="md:w-1/2">
                    Une équipe de travailleurs sociaux spécialisés vous
                    accueille en journée dans les <b>Maisons Sociales</b> de
                    Proximité de:
                    <ul>
                      <li>Céret</li>
                      <li>Elne</li>
                      <li>Font Romeu</li>
                      <li>Prades</li>
                      <li>Rivesaltes</li>
                      <li>Thuir</li>
                    </ul>
                  </div>
                  <Divider />
                  <div>
                    Avec des <b>permanences</b> relais à:
                    <ul>
                      <li>Saint-Laurent-de-la-Salanque</li>
                      <li>Port-Vendres</li>
                      <li>Saint-Paul-de-Fenouillet</li>
                      <li>Bourg-Madame</li>
                    </ul>
                  </div>
                </div>
                <Divider horizontal />
                <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-8">
                  <div className="md:w-1/2">
                    <b>Services</b> proposés pour les femmes victimes:
                    <ul>
                      <li>Accueil</li>
                      <li>Écoute</li>
                      <li>Orientation</li>
                      <li>Entretiens individuels</li>
                      <li>Accompagnements personnalisés</li>
                      <li>Groupes de parole</li>
                      <li>Ateliers.</li>
                    </ul>
                  </div>
                  <Divider />
                  <div>
                    Pour les <b>enfants exposés</b>:
                    <ul>
                      <li>Premier rendez-vous avec leur mère</li>
                      <li>Entretiens individuels</li>
                      <li>Ateliers d&rsquo;expression artistique</li>
                      <li>Ateliers d&rsquo;expression manuelle</li>
                      <li>Séances de self-défense</li>
                    </ul>
                  </div>
                </div>
                <ContactInfo
                  className="self-center"
                  horaires={`Du Lundi au Jeudi de 9h à 17h\nLe vendredi de 14h à 17h`}
                  phone="04 68 63 50 24"
                  email="apex-violencesconjugales@hotmail.com"
                />
              </div>
            </AccordionItem>
            <AccordionItem title="Ateliers" color="purple">
              <div className="flex flex-col gap-y-4">
                <p>
                  L&rsquo;Escale offre un cadre propice à l&rsquo;expression, à
                  la détente et à l&rsquo;apprentissage, en mettant à
                  disposition divers espaces d&rsquo;expression et en organisant
                  des activités variées:
                </p>
                <div className="flex flex-col gap-y-4">
                  <div>
                    <b>Sophrologie</b>:
                    <ul>
                      <li>
                        Entraînement du corps et de l&rsquo;esprit pour
                        développer la sérénité et le bien-être
                      </li>
                      <li>
                        Pour toute personne cherchant à améliorer son existence
                      </li>
                      <li>
                        Séance hebdomadaire d&rsquo;une heure animée par une
                        sophrologue diplômée
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Self-défense</b>:
                    <ul>
                      <li>
                        Face à la hausse des violences, cet atelier permet
                        d&rsquo;apprendre à réagir en cas d&rsquo;agression
                      </li>
                      <li>
                        Dans l&rsquo;objectif d&rsquo;une réappropriation du
                        corps, d&rsquo;affirmation de soi
                      </li>
                      <li>
                        Séance hebdomadaire d&rsquo;une heure pour les femmes et
                        une autre pour les enfants, animée par un intervenant
                        diplômé
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Ateliers d&rsquo;expression</b> artistiques et manuels
                    pour les enfants:
                    <ul>
                      <li>
                        Peinture, modelage, offrant aux enfants un moyen
                        d&rsquo;exprimer leurs difficultés et émotions liées à
                        la situation familiale
                      </li>
                      <li>Un mercredi après-midi sur deux</li>
                    </ul>
                  </div>
                  <div>
                    <b>Atelier de couture</b> pour les usagères de
                    l&rsquo;Escale:
                    <ul>
                      <li>
                        Apprentissage de la couture, favorisant la créativité et
                        le partage d&rsquo;expérience
                      </li>
                      <li>
                        Un jeudi sur deux, animé par une intervenante sociale
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Repas cuisinés et partagés</b>:
                    <ul>
                      <li>
                        Préparation d&rsquo;un repas ou d&rsquo;un mets festif,
                        suivi d&rsquo;une dégustation conviviale
                      </li>
                      <li>Une fois par trimestre</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title="Les Personnes Auteures De Violences Conjugales - Service CPCA"
              color="yellow"
            >
              <div className="space-y-2">
                <p>
                  Permanences et groupes de paroles hebdomadaires animés par
                  deux intervenant.e.s sociaux d&rsquo;APEX dans un lieu dédié.
                </p>
                <p>Entretiens individuels et accompagnement social.</p>
                <p>Groupe de paroles 21 séances de 1h30 chacune.</p>
                <p>
                  Les participants sont invités à prendre conscience de
                  l&rsquo;étendue de leur violence qu&rsquo;elle soit verbale,
                  psychologique, physique, sexuelle, économique... ainsi que
                  l&rsquo;impact de cette dernière sur leurs proches et sur
                  eux-mêmes.
                </p>
                <p>
                  Cette approche peut leur permettre de passer de la notion de
                  culpabilité à celle de responsabilité.
                </p>
              </div>
              <div className="mt-8 flex gap-4 flex-col md:flex-row md:items-center justify-between">
                <p className="font-light">
                  Service CPCA -{" "}
                  <span className="italic">
                    Centre de Prise en Charge des Auteurs de violences
                    conjugales
                  </span>
                </p>
                <ContactInfo
                  className="self-center flex-shrink-0"
                  phone="06 70 22 90 19"
                />
              </div>
            </AccordionItem>
            <AccordionItem
              title="Les Adolescents Exposés Aux Violences Conjugales"
              color="orange"
            >
              <div className="flex flex-col gap-4">
                Permanences et groupes de paroles bimensuels animés par une
                psychologue et une intervenante sociale d&rsquo;APEX, dans un
                lieu dédié.
                <ContactInfo
                  className="self-center md:self-end"
                  phone="04 68 63 50 24"
                />
              </div>
            </AccordionItem>
            <AccordionItem title="Prévention Chez Les Jeunes" color="pink">
              <div className="flex flex-col space-y-4">
                <p>
                  La violence amoureuse des adolescents ressemble à celle
                  qu&rsquo;on retrouve chez les adultes dans les relations avec
                  un partenaire intime, en ce qu&rsquo;elle présente toutes les
                  nuances possibles, depuis l&rsquo;insulte et les mauvais
                  traitements psychologiques, jusqu&rsquo;à l&rsquo;agression
                  sexuelle et au meurtre.
                </p>
                <p>
                  La prévention de la violence dans les relations amoureuses est
                  au centre de nos préoccupations car 20% des jeunes en sont
                  victimes.
                </p>
                <p>
                  L&rsquo;objectif de cette action est de promouvoir un
                  changement des attitudes et des comportements pour prévenir le
                  recours aux différentes formes de violences utilisées pour
                  dominer et contrôler les partenaires amoureux.
                </p>
                <p className="italic font-light md:self-end">
                  Les professeur.es et responsables de collèges et de lycées
                  intéressé.es peuvent nous contacter
                </p>
                <ContactInfo
                  className="self-center md:self-end"
                  phone="04 68 63 50 24"
                />
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Actions;
