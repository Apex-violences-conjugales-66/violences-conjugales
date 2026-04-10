import PageTemplate from "@/app/ui/PageTemplate";
import { FunctionComponent } from "react";

interface FormationProps {}

const Formation: FunctionComponent<FormationProps> = () => {
  const name = "formation";
  return <PageTemplate name={name} />;
};

export default Formation;
