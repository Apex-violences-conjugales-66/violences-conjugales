import LogoApex from "@/app/ui/LogoApex";
import Title from "@/app/ui/Title";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <section className="pt-[var(--navbar-height)] flex flex-col lg:pt-[var(--navbar-height-lg)] relative">
      <div className="bg-orange-50 flex-1 flex flex-col gap-12 py-12 lg:flex-row lg:gap-0">
        <Image
          src="/header_art.jpg"
          alt="Header art"
          width={1000}
          height={500}
          className="w-full lg:w-1/2"
        />
        <div className="flex flex-col items-center justify-center gap-2 lg:w-1/2 lg:gap-6">
          {/* <Title
            style="lightOrange"
            className="font-bold tracking-[12px] [&>h1]:pr-3"
          >
            APEX
          </Title> */}
          <LogoApex className="w-32" />
          <p className="font-amatic_sc font-bold text-xl md:text-3xl xl:text-4xl text-center whitespace-pre-line px-5">
            <span className="text-orange-400">
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
    </section>
  );
}
