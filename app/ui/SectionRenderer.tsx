import Actions from "@/app/ui/homepage/Actions";
import Introduction from "@/app/ui/homepage/Introduction";
import Partners from "@/app/ui/homepage/Partners";
import Team from "@/app/ui/homepage/Team";
import FormationSection from "@/app/ui/formation/FormationSection";
import Projet from "@/app/ui/projet-associatif/Projet";
import FormationShowcase from "@/app/ui/homepage/FormationShowcase";
import DocumentsSection from "@/app/ui/ressources/DocumentsSection";
import Mediagraphie from "@/app/ui/ressources/Mediagraphie";
import Memoires from "@/app/ui/ressources/Memoires";
import { Section } from "@/app/lib/definitions.sections";
import HomeHeader from "@/app/ui/homepage/HomeHeader";
import Donations from "@/app/ui/donate/Donations";

export default function SectionRenderer({ section }: { section: Section }) {
  switch (section.name) {
    case "homeheader":
      return <HomeHeader />;
    case "introduction":
      return <Introduction />;
    case "donations":
      return <Donations />;
    case "actions":
      return <Actions />;
    case "partners":
      return <Partners partners={section.partners} />;
    case "team":
      return <Team members={section.members} />;
    case "projet":
      return <Projet members={section.members} />;
    case "formationShowcase":
      return <FormationShowcase />;
    case "formationSection":
      return (
        <FormationSection
          catalogue={section.catalogue}
          bulletin={section.bulletin}
          certificat={section.certificat}
          formations={section.formations}
        />
      );
    case "documentsSection":
      return <DocumentsSection documents={section.documents} />;
    case "mediagraphie":
      return <Mediagraphie movies={section.movies} books={section.books} />;
    case "memoires":
      return <Memoires memoirs={section.memoirs} />;
    default:
      return null;
  }
}
