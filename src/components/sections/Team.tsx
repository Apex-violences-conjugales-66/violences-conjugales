import Image from "next/image";
import { FunctionComponent } from "react";
import Separator from "../ui/Separator";

interface TeamProps {}

const Team: FunctionComponent<TeamProps> = () => {
  return (
    <div className="Team">
      <Separator variant />
      <div
        id="team"
        className="mt-1 bg-gradient-to-r from-orange from-50% via-yellow to-yellow scroll-mt-48"
      >
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
