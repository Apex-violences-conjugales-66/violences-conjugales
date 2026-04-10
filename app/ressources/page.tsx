import PageTemplate from "@/app/ui/PageTemplate";
import { FunctionComponent } from "react";

interface RessourcesProps {}

const Ressources: FunctionComponent<RessourcesProps> = () => {
  const name = "ressources";
  return <PageTemplate name={name} />;
};

export default Ressources;
