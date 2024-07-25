import PageTemplate from "@/components/PageTemplate";
import { FunctionComponent } from "react";

interface ProjetAssociatifProps {}

const ProjetAssociatif: FunctionComponent<ProjetAssociatifProps> = () => {
  const name = "projet-associatif";
  return <PageTemplate name={name} />;
};

export default ProjetAssociatif;
