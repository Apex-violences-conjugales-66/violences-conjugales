import { FunctionComponent } from "react";
import Separator from "../ui/Separator";
import Title from "../ui/Title";

export type Membre = {
  nom: string;
  role: string;
};

interface TeamProps {
  personnel: Membre[];
  conseil: Membre[];
  administrateurs: Membre[];
}

const Team: FunctionComponent<TeamProps> = ({
  personnel,
  conseil,
  administrateurs,
}) => {
  return (
    <div className="Team">
      <Separator variant />
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
                      {personne.nom} <span className="ml-2" />
                      <em className="font-bold">{personne.role}</em>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col flex-1">
                <ul className="list-none">
                  {administrateurs.map((personne, index) => (
                    <li key={index}>
                      {personne.nom} <span className="ml-2" />
                      <em className="font-bold">{personne.role}</em>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col flex-1">
                <ul className="list-none">
                  {personnel.map((personne, index) => (
                    <li key={index}>
                      {personne.nom}
                      <span className="ml-2" />
                      <em className="font-bold">{personne.role}</em>
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
};

export default Team;
