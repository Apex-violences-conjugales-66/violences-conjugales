import PageTemplate from "@/components/PageTemplate";
import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const name = "home";
  return <PageTemplate name={name} />;
};

export default Home;
