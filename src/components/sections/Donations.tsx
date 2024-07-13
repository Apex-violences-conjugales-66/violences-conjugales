import { FunctionComponent } from "react";
import DonationCard from "../cards/DonationCard";
import Title from "../Title";

interface DonationsProps {}

const Donations: FunctionComponent<DonationsProps> = () => {
  return (
    <div
      aria-label="Donations"
      className="bg-gradient-to-r from-orange from-50% via-yellow to-yellow mt-1"
    >
      <div className="container bg-white px-1">
        <div className="bg-blue flex flex-col items-center w-full p-24 gap-y-14">
          <Title>Faire un don</Title>
          <div className="w-full flex justify-between">
            <DonationCard
              title="Par Virement Banquaire"
              imageUrl="/vector/mastercard.svg"
            />
            <DonationCard
              title="Via Helloasso"
              imageUrl="/vector/helloasso.svg"
            />
            <DonationCard title="Par Chèque" imageUrl="/cheque.png" />
          </div>
          <p className="italic font-light text-center">
            Un reçu vous sera envoyé afin que vous puissiez obtenir une
            réduction de votre impôt sur le revenu de 66. % de votre don
            <br /> Merci par avance pour votre générosité
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donations;
