import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
import { PHONE_NUMBER } from "@/app/lib/constants";

export default function MentionsLegalesPage() {
  return (
    <main>
      <Navbar />
      <div className="container pt-[var(--navbar-height)] lg:pt-[var(--navbar-height-lg)] mt-4 md:mt-14 pb-16">
        <div className="max-w-3xl mx-auto py-12 flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Mentions Légales</h1>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              1. Éditeur du site
            </h2>
            <p>
              <strong>Nom de l&rsquo;association :</strong> APEX
            </p>
            <p>
              <strong>Forme juridique :</strong> Association loi 1901
            </p>
            <p>
              <strong>Siège social :</strong> Maison pour les familles, 3 rue
              Déodat de Séverac, 66000 Perpignan
            </p>
            <p>
              <strong>Téléphone :</strong> {PHONE_NUMBER}
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:apex-violencesconjugales@hotmail.com"
                className="text-orange-600 hover:underline"
              >
                apex-violencesconjugales@hotmail.com
              </a>
            </p>
            <p>
              <strong>Directeur de publication :</strong> [Nom du responsable]
            </p>
            <p>
              <strong>SIRET :</strong> [Numéro SIRET]
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              2. Hébergement
            </h2>
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA
              91723, États-Unis
            </p>
            <p>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&rsquo;ensemble du contenu de ce site (textes, images, logos) est
              la propriété exclusive de l&rsquo;association APEX, sauf mention
              contraire. Toute reproduction, distribution ou utilisation sans
              autorisation écrite préalable est interdite.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              4. Responsabilité
            </h2>
            <p>
              L&rsquo;association APEX s&rsquo;efforce de maintenir les
              informations de ce site à jour et exactes. Toutefois, elle ne
              saurait être tenue responsable des erreurs ou omissions, ni des
              dommages résultant de l&rsquo;utilisation des informations
              publiées.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              5. Liens externes
            </h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers.
              L&rsquo;association APEX n&rsquo;est pas responsable du contenu de
              ces sites et ne saurait être tenue pour responsable des dommages
              pouvant résulter de leur consultation.
            </p>
          </section>

          <p className="text-sm text-slate-400">
            Dernière mise à jour : avril 2025
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
