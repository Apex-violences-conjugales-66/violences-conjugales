import Image from "next/image";
import { FunctionComponent } from "react";
import Title from "../Title";

interface ActionsProps {}

const Actions: FunctionComponent<ActionsProps> = () => {
  return (
    <>
      <div className="relative w-full h-[295px] mt-1 rotate-180">
        <Image
          alt="illustration"
          src={"/vector/separator-pattern1-1920.svg"}
          quality={100}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container flex flex-col items-center mt-24">
        <Title>Nos Actions</Title>
        <div></div>
      </div>
    </>
  );
};

export default Actions;
