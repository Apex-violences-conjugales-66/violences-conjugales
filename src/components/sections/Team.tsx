import Image from "next/image";
import { FunctionComponent } from "react";

interface TeamProps {}

const Team: FunctionComponent<TeamProps> = () => {
  return (
    <div aria-label="Team">
      <div className="relative w-full h-[295px]">
        <Image
          alt="illustration"
          src={"/vector/separator-pattern1-1920.svg"}
          quality={100}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mt-1 bg-gradient-to-r from-orange from-50% via-yellow to-yellow">
        <div className="container flex justify-center">
          <div className="bg-white min-w-1" />
          <div className="w-full bg-blue h-[600px]">EQUIPE SECTION</div>
          <div className="bg-white min-w-1" />
        </div>
      </div>
    </div>
  );
};

export default Team;
