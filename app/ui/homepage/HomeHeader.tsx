import LogoApex from "@/app/ui/LogoApex";
import SectionComponent from "@/app/ui/SectionComponent";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <SectionComponent isFirst={true} className="relative">
      <div className="bg-orange-50 flex-1 flex flex-col gap-12 py-12 lg:flex-row lg:gap-0">
        <Image
          src="/header_art.jpg"
          alt="Header art"
          width={1000}
          height={500}
          className="w-full lg:w-1/2"
        />
        <div className="flex flex-col items-center justify-center gap-2 lg:w-1/2 lg:gap-6">
          <LogoApex className="w-32" />
          <p className="font-amatic_sc font-bold text-xl md:text-3xl xl:text-4xl text-center whitespace-pre-line px-5">
            <span className="text-orange-600">
              Association d’intérêt général qui oeuvre
            </span>
            <br />
            contre les violences conjugales et intrafamilliales
            <br />
            pour l’égalité Femmes Hommes
            <br />
            et contre toutes les formes de discriminations
          </p>
        </div>
      </div>
      <Image
        src="/papillons-transparent.png"
        alt="Flower"
        width={400}
        height={620}
        className="hidden md:block absolute bottom-0 right-0 w-[80px] h-auto lg:w-auto lg:h-[200px] lg:-bottom-[100px]"
      />
    </SectionComponent>
  );
}
