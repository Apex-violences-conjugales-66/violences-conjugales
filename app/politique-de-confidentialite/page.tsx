import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
import { PHONE_NUMBER } from "@/app/lib/constants";

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main>
      <Navbar />
      <div className="container pt-[var(--navbar-height)] lg:pt-[var(--navbar-height-lg)] mt-4 md:mt-14 pb-16">
        <div className="max-w-3xl mx-auto py-12 flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              1. Responsable du traitement
            </h2>
            <p>
              L&rsquo;association <strong>APEX</strong>, dont le siège est situé
              Maison pour les familles, 3 rue Déodat de Séverac, 66000
              Perpignan, est responsable du traitement des données personnelles
              collectées sur ce site.
            </p>
            <p>
              <strong>Contact :</strong>{" "}
              <a
                href="mailto:apex-violencesconjugales@hotmail.com"
                className="text-orange-600 hover:underline"
              >
                apex-violencesconjugales@hotmail.com
              </a>{" "}
              — {PHONE_NUMBER}
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              2. Données collectées
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle de navigation. Aucun
              cookie de traçage ou outil d&rsquo;analyse tiers n&rsquo;est
              utilisé.
            </p>
            <p>
              Les seules données traitées sont celles transmises volontairement
              lors d&rsquo;un contact par email ou par téléphone (nom, prénom,
              coordonnées). Ces données sont utilisées uniquement pour répondre
              à votre demande.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              3. Finalité du traitement
            </h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Répondre aux demandes d&rsquo;information</li>
              <li>Assurer le suivi des personnes accompagnées</li>
              <li>
                Envoyer des informations relatives aux activités d&rsquo;APEX si
                vous y avez consenti
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              4. Durée de conservation
            </h2>
            <p>
              Les données sont conservées le temps nécessaire à la gestion de
              votre demande, et au maximum 3 ans après le dernier contact,
              conformément aux recommandations de la CNIL.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              5. Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Droit d&rsquo;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&rsquo;effacement (droit à l&rsquo;oubli)</li>
              <li>Droit d&rsquo;opposition au traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a
                href="mailto:apex-violencesconjugales@hotmail.com"
                className="text-orange-600 hover:underline"
              >
                apex-violencesconjugales@hotmail.com
              </a>
            </p>
            <p>
              En cas de réclamation, vous pouvez également contacter la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2">
              6. Sécurité
            </h2>
            <p>
              L&rsquo;association APEX met en œuvre les mesures techniques et
              organisationnelles appropriées pour protéger vos données contre
              tout accès non autorisé, perte ou divulgation.
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
