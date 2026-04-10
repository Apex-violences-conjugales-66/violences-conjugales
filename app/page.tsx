import { FunctionComponent } from "react";
import PageTemplate from "@/app/ui/PageTemplate";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const name = "home";
  return <PageTemplate name={name} />;
};

export default Home;
