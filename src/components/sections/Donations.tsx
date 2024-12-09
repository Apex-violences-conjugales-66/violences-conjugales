import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import DonationCard from "../ui/DonationCard/DonationCard";
import Title from "../ui/Title";

interface DonationsProps {}

const Donations: FunctionComponent<DonationsProps> = () => {
  return (
    <div id="donations" className="Donations scroll-mt-[84px]">
      <div className="bg-gradient-to-r from-orange from-50% via-yellow to-yellow mt-1">
        <div className="container flex justify-center">
          <div className="bg-white min-w-1" />
          <div className=" w-full bg-blue flex flex-col items-center px-2 xl:px-24 py-14 gap-y-8 md:gap-y-14">
            <Title style="blue">Faire un don</Title>
            <div className="w-full gap-y-4 flex flex-col md:flex-row items-center justify-evenly">
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
              <Link href="https://www.helloasso.com/associations/apex/formulaires/1/widget">
                <DonationCard className="gap-y-2">
                  <p>Via Helloasso</p>
                  <Image
                    alt="helloasso"
                    src="/vector/helloasso.svg"
                    width={208}
                    height={60}
                  />
                </DonationCard>
              </Link>
              <DonationCard className="gap-y-2">
                <p>Par Chèque</p>
                <Image alt="cheque" src="/cheque.png" width={104} height={60} />
              </DonationCard>
            </div>
            <p className="italic text-sm text-center">
              Un reçu vous sera envoyé afin que vous puissiez obtenir une
              réduction de votre impôt sur le revenu de 66% de votre don. Merci
              par avance pour votre générosité
            </p>
          </div>
          <div className="bg-white min-w-1" />
        </div>
      </div>
    </div>
  );
};

export default Donations;
