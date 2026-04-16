import { Member } from "@/app/lib/definitions";
import Title from "@/app/ui/Title";

export default function Team({ members }: { members: Member[] }) {
  const conseil = members.filter((m) => m.type === "bureau");
  const administrateurs = members.filter((m) => m.type === "administration");
  const personnel = members.filter((m) => m.type === "equipe");
  return (
    <div className="Team">
      <div
        id="team"
        className="mt-1 bg-gradient-to-r from-orange from-50% via-yellow to-yellow scroll-mt-48"
      >
        <div className="container flex justify-center">
          <div className="flex flex-col gap-y-10 items-center w-full bg-white px-2 xl:px-20 py-14 gap-x-2">
            <Title>Notre Equipe</Title>
            <div className="flex flex-col text-center xl:text-left xl:flex-row md:justify-between gap-6 xl:gap-2 w-full [&>div>h4]:mb-1">
              <div className="flex flex-col flex-1">
                <ul className="list-none">
                  {conseil.map((personne, index) => (
                    <li key={index}>
                      {personne.name} <span className="ml-2" />
                      <em className="font-bold">{personne.title}</em>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col flex-1">
                <ul className="list-none">
                  {administrateurs.map((personne, index) => (
                    <li key={index}>
                      {personne.name} <span className="ml-2" />
                      <em className="font-bold">{personne.title}</em>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col flex-1">
                <ul className="list-none">
                  {personnel.map((personne, index) => (
                    <li key={index}>
                      {personne.name}
                      <span className="ml-2" />
                      <em className="font-bold">{personne.title}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
