import HomeHeader from "@/components/HomeHeader";
import Actions from "@/components/sections/Actions";
import Donations from "@/components/sections/Donations";
import Introduction from "@/components/sections/Introduction";
import Partners from "@/components/sections/Partners";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Donations />
      <Introduction />
      <Team />
      <Actions />
      <Partners />
    </>
  );
}
