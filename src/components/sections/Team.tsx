import Image from "next/image";
import { FunctionComponent } from "react";
import Separator from "../ui/Separator";
import Title from "../ui/Title";

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
          <div className="flex flex-col gap-y-10 items-center w-full bg-white px-2 xl:px-24 py-14 gap-x-2">
            <Title>Notre Equipe</Title>
            <div className="flex flex-col text-center xl:text-left xl:flex-row md:justify-between gap-6 w-full [&>div>h4]:mb-1">
              <div className="flex flex-col">
                <h4>Le Bureau</h4>
                <p>
                  Imma MATAIX, présidente
                  <br />
                  Marc LECLERC, trésorier
                  <br />
                  Marie-Noëlle FRECHINOS, secrétaire
                </p>
              </div>
              <div className="flex flex-col">
                <h4>Le Conseil d&rsquo;Administration</h4>
                <p>
                  Christian NEGROLI, retraité <br />
                  Denis LAMBERT, comptable <br />
                  Françoise COSTE, médecin <br />
                  Geneviève MASSINES, éducatrice spécialisée <br />
                  Marie Josée MAGUER, sage-femme <br />
                  Mathilde PALAU, éducatrice spécialisée <br />
                  Muriel GUILLAUMES, formatrice <br />
                  Jacques LORIEUX, retraité (membre d&rsquo;honneur)
                </p>
              </div>
              <div className="flex flex-col">
                <h4>L&rsquo;Équipe</h4>
                Christine GUILLAUMES, coordonnatrice <br />
                Isabelle LOEB, comptabilité et administration <br />
                Laetitia BRAVO, intervenante <br />
                Mehdi EL BARKANI, intervenant <br />
                Stéphanie GODARD, intervenante <br />
                Valérie FONTIMPE, intervenante <br />
                Yann LAUTROU, intervenant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
