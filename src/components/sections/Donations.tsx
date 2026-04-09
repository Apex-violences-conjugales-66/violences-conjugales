"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { Button } from "../ui/Button";
import DonationCard from "../ui/DonationCard/DonationCard";
import DonationModal from "../ui/Modal/DonationModal";
import Title from "../ui/Title";

interface DonationsProps {}

const Donations: FunctionComponent<DonationsProps> = () => {
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationModalType, setDonationModalType] = useState("");
  return (
    <div id="donations" className="Donations scroll-mt-[84px]">
      <div className="bg-gradient-to-r from-orange from-50% via-yellow to-yellow mt-1">
        <div className="container flex justify-center">
          <div className="bg-white min-w-1" />
          <div className=" w-full bg-blue flex flex-col items-center px-2 xl:px-24 py-14 gap-y-8 md:gap-y-14">
            <Title style="blue">Faire un don</Title>
            <div className="w-full gap-y-4 flex flex-col md:flex-row items-center justify-evenly">
              <button
                onClick={() => {
                  setDonationModalOpen(true);
                  setDonationModalType("virement");
                }}
              >
                <DonationCard>
                  <p className="text-center">
                    Par Virement <br />
                    Banquaire
                  </p>
                  <div className="flex mt-2 mb-2">
                    <Image
                      alt="mastercard"
                      src="/vector/mastercard.svg"
                      width={74}
                      height={40}
                    />
                    <Image
                      alt="visa"
                      src="/vector/visa.svg"
                      width={84}
                      height={40}
                    />
                  </div>
                  <Image
                    alt="paypal"
                    src="/vector/paypal.svg"
                    width={140}
                    height={40}
                  />
                </DonationCard>
              </button>
              <a
                href="https://www.helloasso.com/associations/apex/formulaires/1/widget"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DonationCard className="gap-y-2">
                  <p>Via Helloasso</p>
                  <Image
                    alt="helloasso"
                    src="/vector/helloasso.svg"
                    width={208}
                    height={60}
                  />
                </DonationCard>
              </a>
              <button
                onClick={() => {
                  setDonationModalOpen(true);
                  setDonationModalType("cheque");
                }}
              >
                <DonationCard className="gap-y-2">
                  <p>Par Chèque</p>
                  <Image
                    alt="cheque"
                    src="/cheque.png"
                    width={104}
                    height={60}
                  />
                </DonationCard>
              </button>
            </div>
            <p className="italic text-sm text-center">
              Un reçu vous sera envoyé afin que vous puissiez obtenir une
              réduction de votre impôt sur le revenu de 66% de votre don. Merci
              par avance pour votre générosité
            </p>
          </div>
          <div className="bg-white min-w-1" />
        </div>
        {donationModalOpen && (
          <DonationModal
            isOpen={donationModalOpen}
            handleClose={() => setDonationModalOpen(!donationModalOpen)}
          >
            {donationModalType == "virement" && (
              <>
                <h3>
                  Soutenez notre action en effectuant un virement bancaire
                </h3>
                <p>
                  Si vous souhaitez nous soutenir vous pouvez effectuer un
                  virement bancaire en utilisant les coordonnées ci-dessous :
                </p>
                <ul className="list-none">
                  <li>
                    <strong>IBAN</strong> : FR76 1660 7000 0048 2210 7008 893
                  </li>
                  <li>
                    <strong>BIC</strong> : BNPAFRPPXXX
                  </li>
                  <li>
                    <strong>Titulaire du compte</strong> : Apex
                  </li>
                </ul>
                <p>Merci pour votre contribution !</p>
              </>
            )}
            {donationModalType == "cheque" && (
              <>
                <h3>Soutenez notre action en nous envoyant un chèque</h3>
                <p>
                  Vous pouvez nous soutenir par chèque. <br />
                  Pour cela, merci de libeller le chèque à l&rsquo;ordre suivant
                  :
                </p>
                <ul className="list-none">
                  <li>
                    <strong>Ordre</strong> : Apex
                  </li>
                  <li>
                    <strong>Adresse d&rsquo;envoi</strong> :<br />
                    Maison pour les familles, 3 rue Déodat de Séverac
                    <br />
                    66000
                    <br />
                    PERPIGNAN
                  </li>
                </ul>
                <p>Merci pour votre soutien !</p>
              </>
            )}
          </DonationModal>
        )}
      </div>
    </div>
  );
};

export default Donations;
