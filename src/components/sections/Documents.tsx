import { FunctionComponent } from "react";
import Title from "../ui/Title";

interface DocumentsProps {}

const Documents: FunctionComponent<DocumentsProps> = () => {
  return (
    <div className="Documents">
      <div className="container flex flex-col gap-10">
        <Title>Doc. Institutions</Title>
      </div>
    </div>
  );
};

export default Documents;
