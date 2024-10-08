"use client";

import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import Separator from "./ui/Separator";
import Link from "next/link";
import { cn } from "../lib/utils";
import FooterModal from "./ui/Modal/FooterModal";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const [footerModalOpen, setFooterModalOpen] = useState(false);
  const [footerModalType, setFooterModalType] = useState("");
  return (
    <div className="Footer">
      <Separator variant />
      <div className="bg-purple py-16 relative">
        <div className="container flex flex-col gap-24 justify-between md:flex-row">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <div className="relative w-16 h-20">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/ruban_violet.svg"}
                  fill
                />
              </div>
              <div className="flex flex-col justify-center ">
                <span className="font-bold text-xl">APEX</span>
                <span className="font-light text-[22px]">04 68 63 50 24</span>
              </div>
            </div>
            <div className="relative">
              <div
                className={cn(
                  "w-60 flex flex-col gap-y-3 text-xl items-center font-bold rounded-sm border-2 py-4",
                  "before:bg-purple before:w-8 before:h-1 before:content-[''] before:absolute before:top-0 before:left-6",
                  "after:bg-purple after:w-8 after:h-1 after:content-[''] after:absolute after:bottom-0 after:right-6"
                )}
              >
                <Link href={"/"} className="hover:opacity-65 transition">
                  Acceuil
                </Link>
                <Link
                  href={"/projet-associatif"}
                  className="hover:opacity-65 transition"
                >
                  Le Projet
                </Link>
                <Link
                  href={"/formation"}
                  className="hover:opacity-65 transition"
                >
                  La Formation
                </Link>
                <Link
                  href={"/ressources"}
                  className="hover:opacity-65 transition"
                >
                  Nos Ressources
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3>Effacer les traces de votre passage</h3>
            <div className="flex items-center gap-x-4">
              <h5>Pour effacer toute trace des sites que vous avez visités</h5>
              <div className="relative min-w-6 h-6">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/arrow-right.svg"}
                  fill
                />
              </div>
              <h4>Effacer l&rsquo;historique</h4>
            </div>
            <div className="flex items-center gap-x-4">
              <h5>
                Pour effacer toute trace des mots introduits dans les moteurs de
                recherche
              </h5>
              <div className="relative min-w-6 h-6">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/arrow-right.svg"}
                  fill
                />
              </div>
              <h4>Annuler la saisie semi-automatique</h4>
            </div>
            <h5>La procédure suivant votre navigateur :</h5>
            <div className="flex flex-wrap gap-x-12 gap-y-4 justify-evenly mt-2">
              <Button
                onClick={() => {
                  setFooterModalOpen(true);
                  setFooterModalType("Google Chrome");
                }}
              >
                Chrome
              </Button>
              <Button
                onClick={() => {
                  setFooterModalOpen(true);
                  setFooterModalType("Safari");
                }}
              >
                Safari
              </Button>
              <Button
                onClick={() => {
                  setFooterModalOpen(true);
                  setFooterModalType("Microsoft Edge");
                }}
              >
                Microsoft Edge
              </Button>
            </div>
          </div>
        </div>
        <p className="text-sm absolute bottom-2 right-10">
          © 2024 &nbsp;&nbsp; APEX | AEPirlot &nbsp;&nbsp; All rights reserved
          &nbsp;&nbsp; Mentions légales.
        </p>
        {footerModalOpen && (
          <FooterModal
            isOpen={footerModalOpen}
            handleClose={() => setFooterModalOpen(!footerModalOpen)}
            browser={footerModalType}
          >
            {footerModalType == "Google Chrome" && (
              <>
                <div>
                  <h3 className="mb-4">Effacer les données de navigation</h3>
                  <ul className="list-decimal [&>li>span]:relative [&>li>span]:left-2">
                    <li>
                      <span>
                        Cliquer sur les trois points verticaux en haut à droite.
                      </span>
                    </li>
                    <li>
                      <span>Sélectionner "Paramètres".</span>
                    </li>
                    <li>
                      <span>Aller dans "Confidentialité et sécurité".</span>
                    </li>
                    <li>
                      <span>
                        Cliquer sur "Effacer les données de navigation".
                      </span>
                    </li>
                    <li>
                      <span>
                        Choisir l'intervalle de temps à effacer (dernière heure,
                        24h, etc.).
                      </span>
                    </li>
                    <li>
                      <span>
                        Cocher les cases des éléments à supprimer (historique,
                        cookies, etc.).
                      </span>
                    </li>
                    <li>
                      <span>Cliquer sur "Effacer les données".</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">Désactiver la saisie automatique</h3>
                  <ul className="list-decimal [&>li>span]:relative [&>li>span]:left-2 [&>ul]:pl-4">
                    <li>
                      <span>
                        Cliquer sur les trois points verticaux en haut à droite.
                      </span>
                    </li>
                    <li>
                      <span>Sélectionner "Paramètres".</span>
                    </li>
                    <li>
                      <span>
                        Dans la section "Remplissage automatique", cliquer sur
                        les catégories concernées :
                      </span>
                    </li>
                    <ul>
                      <li>
                        "Mots de passe" pour gérer les mots de passe
                        enregistrés.
                      </li>
                      <li>"Moyens de paiement" pour les cartes bancaires.</li>
                      <li>
                        "Adresses et plus" pour les adresses et informations
                        personnelles.
                      </li>
                    </ul>
                    <li>
                      <span>
                        Désactiver les options de saisie automatique dans
                        chacune de ces catégories :
                      </span>
                    </li>
                    <ul>
                      <li>
                        Pour les mots de passe, désactiver "Proposer
                        d'enregistrer les mots de passe".
                      </li>
                      <li>
                        Pour les moyens de paiement, désactiver "Enregistrer et
                        remplir les moyens de paiement".
                      </li>
                      <li>
                        Pour les adresses, désactiver "Enregistrer et remplir
                        les adresses".
                      </li>
                    </ul>
                  </ul>
                </div>
              </>
            )}
            {footerModalType == "Safari" && (
              <>
                <div>
                  <h3 className="mb-4">
                    Effacer les données de navigation sur Safari
                  </h3>
                  <ul className="list-decimal [&>li>span]:relative [&>li>span]:left-2">
                    <li>
                      <span>
                        Cliquer sur <strong>"Safari"</strong> dans la barre de
                        menu en haut à gauche.
                      </span>
                    </li>
                    <li>
                      <span>
                        Sélectionner <strong>"Effacer l'historique"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Dans la fenêtre qui s'affiche, choisir l’
                        <strong>intervalle de temps</strong> (dernière heure,
                        aujourd'hui, aujourd'hui et hier, ou tout l'historique).
                      </span>
                    </li>
                    <li>
                      <span>
                        Cliquer sur <strong>"Effacer l'historique"</strong> pour
                        confirmer.
                      </span>
                    </li>
                  </ul>
                  <p>
                    <em>
                      *Cela supprimera l'historique de navigation ainsi que les
                      cookies et autres données de sites web.*
                    </em>
                  </p>
                </div>
                <div>
                  <h3 className="mb-4">
                    Désactiver la saisie automatique dans Safari
                  </h3>
                  <ul className="list-decimal [&>li>span]:relative [&>li>span]:left-2 [&>li>ul]:pl-4">
                    <li>
                      <span>
                        Cliquer sur <strong>"Safari"</strong> dans la barre de
                        menu en haut.
                      </span>
                    </li>
                    <li>
                      <span>
                        Sélectionner <strong>"Préférences"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Aller à l'onglet{" "}
                        <strong>"Remplissage automatique"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Pour désactiver les différentes catégories de saisie
                        automatique :
                      </span>
                      <ul>
                        <li>
                          <span>
                            <strong>
                              Désélectionner "Utiliser les informations de mes
                              contacts"
                            </strong>{" "}
                            pour les adresses et informations personnelles.
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong>
                              Désélectionner "Noms d’utilisateur et mots de
                              passe"
                            </strong>{" "}
                            pour les mots de passe enregistrés.
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong>Désélectionner "Cartes de crédit"</strong>{" "}
                            pour les informations bancaires.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        Pour gérer les données existantes, cliquez sur{" "}
                        <strong>"Modifier"</strong> à côté de chaque catégorie
                        et supprimez les informations enregistrées si
                        nécessaire.
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            )}
            {footerModalType == "Microsoft Edge" && (
              <>
                <div>
                  <h3 className="mb-4">
                    Effacer les données de navigation sur Microsoft Edge
                  </h3>
                  <ul className="list-decimal [&>li>span]:relative [&>li>span]:left-2">
                    <li>
                      <span>
                        Cliquer sur les <strong>trois points</strong> verticaux
                        dans le coin supérieur droit.
                      </span>
                    </li>
                    <li>
                      <span>
                        Sélectionner <strong>"Paramètres"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Dans le menu à gauche, cliquer sur{" "}
                        <strong>
                          "Confidentialité, recherche et services"
                        </strong>
                        .
                      </span>
                    </li>
                    <li>
                      <span>
                        Faire défiler jusqu’à la section{" "}
                        <strong>"Effacer les données de navigation"</strong> et
                        cliquez sur{" "}
                        <strong>"Choisir les éléments à effacer"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Choisir l'intervalle de temps et les types de données à
                        supprimer (historique, cookies, cache, etc.).
                      </span>
                    </li>
                    <li>
                      <span>
                        Cliquer sur <strong>"Effacer maintenant"</strong> pour
                        confirmer.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">
                    Désactiver la saisie automatique dans Microsoft Edge
                  </h3>
                  <ul className="list-decimal [&>li>span]:relative [&>li>span]:left-2 [&>li>ul]:pl-4">
                    <li>
                      <span>
                        Cliquer sur les <strong>trois points</strong> verticaux
                        dans le coin supérieur droit.
                      </span>
                    </li>
                    <li>
                      <span>
                        Sélectionner <strong>"Paramètres"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Dans le menu à gauche, cliquer sur{" "}
                        <strong>"Profils"</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Choisir <strong>"Informations personnelles"</strong> et{" "}
                        <strong>"Mots de passe"</strong> pour gérer la saisie
                        automatique.
                      </span>
                    </li>
                    <li>
                      <span>Pour désactiver la saisie automatique :</span>
                      <ul>
                        <li>
                          <span>
                            des adresses et informations personnelles,
                            désactiver{" "}
                            <strong>
                              "Enregistrer et remplir les adresses"
                            </strong>
                            .
                          </span>
                        </li>
                        <li>
                          <span>
                            des mots de passe, désactiver{" "}
                            <strong>
                              "Proposer d’enregistrer les mots de passe"
                            </strong>
                            .
                          </span>
                        </li>
                        <li>
                          <span>
                            des moyens de paiement, allez dans{" "}
                            <strong>"Informations de paiement"</strong> et
                            désactiver{" "}
                            <strong>
                              "Enregistrer et remplir les informations de
                              paiement"
                            </strong>
                            .
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        Vous pouvez également supprimer les informations
                        enregistrées en cliquant sur <strong>"Modifier"</strong>{" "}
                        ou <strong>"Supprimer"</strong> à côté de chaque donnée
                        existante.
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </FooterModal>
        )}
      </div>
      <div />
    </div>
  );
};

export default Footer;
