"use client";

import { cn } from "@/app/lib/utils";
import Button from "@/app/ui/Button";
import FooterModal from "@/app/ui/FooterModal";
import Separator from "@/app/ui/Separator";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { RxArrowRight } from "react-icons/rx";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const [footerModalOpen, setFooterModalOpen] = useState(false);
  const [footerModalType, setFooterModalType] = useState("");
  return (
    <div className="Footer">
      <div className="">
        <Image
          alt="illustration"
          src="/separator.png"
          width={3496}
          height={348}
        />
      </div>
      <div className="bg-purple py-16 relative">
        <div className="container flex flex-col gap-10 xl:gap-24 justify-between xl:flex-row">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <div className="relative w-16 h-20">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/ruban_violet.svg"}
                  fill
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl">APEX</span>
                <span className="font-light text-[22px]">04 68 63 50 24</span>
              </div>
            </div>
            <div className="relative self-center md:self-start">
              <div
                className={cn(
                  "w-60 flex flex-col gap-y-3 text-xl items-center font-bold rounded-sm border-2 py-4",
                  "before:bg-purple before:w-8 before:h-1 before:content-[''] before:absolute before:top-0 before:left-6",
                  "after:bg-purple after:w-8 after:h-1 after:content-[''] after:absolute after:bottom-0 after:right-6",
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
            <div className="grid grid-cols-[2fr,24px,1fr] gap-x-4 grid-rows-2 items-center">
              <h5>Pour effacer toute trace des sites que vous avez visités</h5>
              <RxArrowRight size={24} />
              <h4>Effacer l&rsquo;historique</h4>
              <h5>
                Pour effacer toute trace des mots introduits dans les moteurs de
                recherche
              </h5>
              <RxArrowRight size={24} />
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
        <p className="text-sm absolute bottom-2 left-1/2 text-center -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10">
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
                      <span>Sélectionner &quot;Paramètres&quot;.</span>
                    </li>
                    <li>
                      <span>
                        Aller dans &quot;Confidentialité et sécurité&quot;.
                      </span>
                    </li>
                    <li>
                      <span>
                        Cliquer sur &quot;Effacer les données de
                        navigation&quot;.
                      </span>
                    </li>
                    <li>
                      <span>
                        Choisir l&rsquo;intervalle de temps à effacer (dernière
                        heure, 24h, etc.).
                      </span>
                    </li>
                    <li>
                      <span>
                        Cocher les cases des éléments à supprimer (historique,
                        cookies, etc.).
                      </span>
                    </li>
                    <li>
                      <span>Cliquer sur &quot;Effacer les données&quot;.</span>
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
                      <span>Sélectionner &quot;Paramètres&quot;.</span>
                    </li>
                    <li>
                      <span>
                        Dans la section &quot;Remplissage automatique&quot;,
                        cliquer sur les catégories concernées :
                      </span>
                    </li>
                    <ul>
                      <li>
                        &quot;Mots de passe&quot; pour gérer les mots de passe
                        enregistrés.
                      </li>
                      <li>
                        &quot;Moyens de paiement&quot; pour les cartes
                        bancaires.
                      </li>
                      <li>
                        &quot;Adresses et plus&quot; pour les adresses et
                        informations personnelles.
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
                        Pour les mots de passe, désactiver &quot;Proposer
                        d&rsquo;enregistrer les mots de passe&quot;.
                      </li>
                      <li>
                        Pour les moyens de paiement, désactiver
                        &quot;Enregistrer et remplir les moyens de
                        paiement&quot;.
                      </li>
                      <li>
                        Pour les adresses, désactiver &quot;Enregistrer et
                        remplir les adresses&quot;.
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
                        Cliquer sur <strong>&quot;Safari&quot;</strong> dans la
                        barre de menu en haut à gauche.
                      </span>
                    </li>
                    <li>
                      <span>
                        Sélectionner{" "}
                        <strong>&quot;Effacer l&rsquo;historique&quot;</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Dans la fenêtre qui s&rsquo;affiche, choisir l&rsquo;
                        <strong>intervalle de temps</strong> (dernière heure,
                        aujourd&rsquo;hui, aujourd&rsquo;hui et hier, ou tout
                        l&rsquo;historique).
                      </span>
                    </li>
                    <li>
                      <span>
                        Cliquer sur{" "}
                        <strong>&quot;Effacer l&rsquo;historique&quot;</strong>{" "}
                        pour confirmer.
                      </span>
                    </li>
                  </ul>
                  <p>
                    <em>
                      *Cela supprimera l&rsquo;historique de navigation ainsi
                      que les cookies et autres données de sites web.*
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
                        Cliquer sur <strong>&quot;Safari&quot;</strong> dans la
                        barre de menu en haut.
                      </span>
                    </li>
                    <li>
                      <span>
                        Sélectionner <strong>&quot;Préférences&quot;</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Aller à l&rsquo;onglet{" "}
                        <strong>&quot;Remplissage automatique&quot;</strong>.
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
                              Désélectionner &quot;Utiliser les informations de
                              mes contacts&quot;
                            </strong>{" "}
                            pour les adresses et informations personnelles.
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong>
                              Désélectionner &quot;Noms d&rsquo;utilisateur et
                              mots de passe&quot;
                            </strong>{" "}
                            pour les mots de passe enregistrés.
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong>
                              Désélectionner &quot;Cartes de crédit&quot;
                            </strong>{" "}
                            pour les informations bancaires.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        Pour gérer les données existantes, cliquez sur{" "}
                        <strong>&quot;Modifier&quot;</strong> à côté de chaque
                        catégorie et supprimez les informations enregistrées si
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
                        Sélectionner <strong>&quot;Paramètres&quot;</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Dans le menu à gauche, cliquer sur{" "}
                        <strong>
                          &quot;Confidentialité, recherche et services&quot;
                        </strong>
                        .
                      </span>
                    </li>
                    <li>
                      <span>
                        Faire défiler jusqu&rsquo;à la section{" "}
                        <strong>
                          &quot;Effacer les données de navigation&quot;
                        </strong>{" "}
                        et cliquez sur{" "}
                        <strong>
                          &quot;Choisir les éléments à effacer&quot;
                        </strong>
                        .
                      </span>
                    </li>
                    <li>
                      <span>
                        Choisir l&rsquo;intervalle de temps et les types de
                        données à supprimer (historique, cookies, cache, etc.).
                      </span>
                    </li>
                    <li>
                      <span>
                        Cliquer sur{" "}
                        <strong>&quot;Effacer maintenant&quot;</strong> pour
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
                        Sélectionner <strong>&quot;Paramètres&quot;</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Dans le menu à gauche, cliquer sur{" "}
                        <strong>&quot;Profils&quot;</strong>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Choisir{" "}
                        <strong>&quot;Informations personnelles&quot;</strong>{" "}
                        et <strong>&quot;Mots de passe&quot;</strong> pour gérer
                        la saisie automatique.
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
                              &quot;Enregistrer et remplir les adresses&quot;
                            </strong>
                            .
                          </span>
                        </li>
                        <li>
                          <span>
                            des mots de passe, désactiver{" "}
                            <strong>
                              &quot;Proposer d&rsquo;enregistrer les mots de
                              passe&quot;
                            </strong>
                            .
                          </span>
                        </li>
                        <li>
                          <span>
                            des moyens de paiement, allez dans{" "}
                            <strong>
                              &quot;Informations de paiement&quot;
                            </strong>{" "}
                            et désactiver{" "}
                            <strong>
                              &quot;Enregistrer et remplir les informations de
                              paiement&quot;
                            </strong>
                            .
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        Vous pouvez également supprimer les informations
                        enregistrées en cliquant sur{" "}
                        <strong>&quot;Modifier&quot;</strong> ou{" "}
                        <strong>&quot;Supprimer&quot;</strong> à côté de chaque
                        donnée existante.
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
