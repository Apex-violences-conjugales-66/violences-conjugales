import { Member } from "@/app/lib/definitions";
import Divider from "@/app/ui/Divider";
import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";
import Image from "next/image";

export default function Team({ members }: { members: Member[] }) {
  const bureau = members.filter((m) => m.type === "bureau");
  const conseil = members.filter((m) => m.type === "administration");
  const personnel = members.filter((m) => m.type === "equipe");
  return (
    <SectionComponent withSideBorders bgColor="orange">
      <div className="container py-10 flex flex-col">
        <Title bgColor="orange" className="self-center">
          Notre Equipe
        </Title>
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 gap-x-8  px-8">
          <div>
            <div className="flex items-center gap-4 mb-2 md:mb-6">
              <h2>Le Bureau</h2>
              <Image
                alt="team"
                src="/vector/bureau.svg"
                width={40}
                height={40}
              />
            </div>
            <Divider horizontal className="mb-6" />
            {bureau.map((personne) => (
              <div key={personne.id}>
                <p>{personne.name}</p>
                <p className="font-thin text-sm -mt-1">{personne.title}</p>
              </div>
            ))}

            <div className="mt-8">
              <div className="flex items-center gap-4 mb-2 md:mb-6">
                <h2>Le Conseil</h2>
                <Image
                  alt="conseil"
                  src="/vector/administration.svg"
                  width={40}
                  height={40}
                />
              </div>
              <Divider horizontal className="mb-6" />
              {conseil.map((personne) => (
                <div key={personne.id}>
                  <p>{personne.name}</p>
                  <p className="font-thin text-sm -mt-1">{personne.title}</p>
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <div className="mt-4 md:mt-0">
            <div className="flex items-center gap-4 mb-2 md:mb-6">
              <h2>L&apos;equipe</h2>
              <Image alt="team" src="/vector/team.svg" width={40} height={40} />
            </div>
            <Divider horizontal className="mb-6" />
            {personnel.map((personne) => (
              <div key={personne.id}>
                <p>{personne.name}</p>
                <p className="font-thin text-sm -mt-1">{personne.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
