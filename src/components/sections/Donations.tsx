import Image from "next/image";
import { FunctionComponent } from "react";
import DonationCard from "../ui/DonationCard/DonationCard";
import Title from "../Title";

interface DonationsProps {}

const Donations: FunctionComponent<DonationsProps> = () => {
  return (
    <div className="Donations">
      <div className="bg-gradient-to-r from-orange from-50% via-yellow to-yellow mt-1">
        <div className="container flex justify-center">
          <div className="bg-white min-w-1" />
          <div className=" w-full bg-blue flex flex-col items-center p-24 gap-y-14">
            <Title>Faire un don</Title>
            <div className="w-full flex flex-wrap gap-14 justify-center xl:flex-nowrap xl:gap-0 xl:justify-between">
              <DonationCard>
                <p className="text-center">
                  Par Virement <br />
                  Banquaire
                </p>
                <div className="flex mt-6 mb-2">
                  <Image
                    alt="mastercard"
                    src="/vector/mastercard.svg"
                    width={74}
                    height={40}
                  />
                  <Image
                    alt="visa"
                    src="/vector/visa.svg"
                    width={100}
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
              <DonationCard className="gap-y-6">
                <p>Via Helloasso</p>
                <Image
                  alt="helloasso"
                  src="/vector/helloasso.svg"
                  width={208}
                  height={60}
                />
              </DonationCard>
              <DonationCard className="gap-y-6">
                <p>Par Chèque</p>
                <Image alt="cheque" src="/cheque.png" width={104} height={60} />
              </DonationCard>
            </div>
            <p className="italic text-center">
              Un reçu vous sera envoyé afin que vous puissiez obtenir une
              réduction de votre impôt sur le revenu de 66% de votre don
              <br /> Merci par avance pour votre générosité
            </p>
          </div>
          <div className="bg-white min-w-1" />
        </div>
      </div>
    </div>
  );
};

export default Donations;
