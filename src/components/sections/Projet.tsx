import Link from "next/link";
import { FunctionComponent } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

interface ProjetProps {}

const Projet: FunctionComponent<ProjetProps> = () => {
  return (
    <div className="container my-40 relative">
      <div
        id="sommaire"
        className="mx-16 border border-orange relative scroll-mt-28"
      >
        <span className="text-5xl font-gothic absolute right-16 -top-6 bg-white px-1">
          AU SOMMAIRE
        </span>
        <div className="p-11 space-y-1">
          <Link href="#title-1">
            <h5>I - CREATION ET ADMINISTRATION DE L&rsquo;ASSOCIATION</h5>
          </Link>
          <Link href="#title-2">
            <h5>
              II - APEX : VIOLENCES CONJUGALES DE L&rsquo;INTERVENTION À LA
              FORMATION
            </h5>
          </Link>
          <h6>1. Présentation de l&rsquo;équipe</h6>
          <h6>2. Les valeurs et principes d&rsquo;intervention</h6>
          <h6>3. L'organisation</h6>
          <Link href="#title-3">
            <h5>
              III - ACCOMPAGNEMENT DES PERSONNES EN PRISE AVEC LES VIOLENCES
              CONJUGALES
            </h5>
          </Link>
          <h6>1. L'Escale</h6> <h6>2. Les Jeunes de 12 à 18 ans</h6>
          <h6>3. Les personnes auteures de violences conjugales</h6>
          <Link href="#title-4">
            <h5>IV - FINANCEURS ET PARTENAIRES</h5>
          </Link>
          <Link href="#title-5">
            <h5>V - ANALYSE ET RÉFLEXION</h5>
          </Link>
          <Link href="#title-6">
            <h5>VI - LA FORMATION PROFESSIONNELLE CONTINUE</h5>
          </Link>
          <h6>1. Les principaux objectifs de nos formations</h6>
          <h6>2. Le projet pédagogique</h6>
          <h6>3. Les métiers représentés</h6>
        </div>
      </div>
      <div className="mt-12 space-y-4 [&>ul]:inside [&>ul]:ml-4">
        <div className="flex gap-x-5 items-center">
          <h4 id="title-1" className="scroll-mt-24">
            I - CREATION ET ADMINISTRATION DE L&rsquo;ASSOCIATION
          </h4>
          <Link
            href="#sommaire"
            className="mt-1 border rounded-md px-2 pt-[2px] bg-grey/10 hover:bg-white transition"
          >
            <BsArrowReturnRight size={24} />
          </Link>
        </div>
        <p>
          APEX, Association Pour l&rsquo;enseignement, l&rsquo;éducation, les
          études et l&rsquo;Expérimentation, est une association régie par la
          loi du 1er juillet 1901- décret du 16 août 1901. Elle a été déclarée
          le 27.04.1984 sous le n° W662001601 à Perpignan, parution au Journal
          Officiel N° 119 du 22.05.1984.
          <br />
          Son siège social est établi à la Maison pour les Familles - 3 rue
          Déodat de Séverac 66000 PERPIGNAN L&rsquo;association a pour but « la
          défense des intérêts matériels et moraux des familles conformément aux
          dispositions de l&rsquo;article L211.1 du Code de l&rsquo;Action
          Sociale et des Familles ». Elle a pour objet de favoriser, promouvoir
          et mettre en œuvre toute action éducative et d&rsquo;enseignement,
          études, recherches et expérimentation en matière de développement
          économique et humain et notamment en matière de violences conjugales.
          <br /> L'association est dirigée par un conseil d&rsquo;administration
          qui est composé de 2 à 10 membres élus par l&rsquo;assemblée générale
          parmi les membres de l'association. Les membres du conseil
          d&rsquo;administration sont élus pour 2 ans ; ils sont rééligibles. Le
          conseil d&rsquo;administration se réunit au minimum 2 fois par an. Le
          conseil d&rsquo;administration élit en son sein un bureau qui a pour
          seule fonction la gestion courante de l'association. Il est composé de
          2 à 3 personnes.
          <br /> Devra être présent lors des réunions au minimum un salarié de
          l&rsquo;association.
          <br /> L&rsquo;association se compose de : membres actifs, membres
          adhérents et de bénéficiaires
          <br /> Membre actif : Personne qui paie sa cotisation et qui participe
          bénévolement à la vie de l&rsquo;association
          <br />
          Membre adhérent : Personne qui paie sa cotisation. Elle peut
          bénéficier des activités de l&rsquo;association.
          <br /> Bénéficiaire : Personne qui bénéficie des activités de
          l&rsquo;association.
          <br />
          Le Bureau
        </p>
        <ul>
          <li>Présidente : Imma MATAIX, assistante sociale </li>
          <li>Trésorier : Marc LECLERC, chef d&rsquo;entreprise </li>
          <li>Secrétaire : Marie-Noëlle FRECHINOS, secrétaire comptable</li>
        </ul>
        <p>Le Conseil d&rsquo;Administration</p>
        <ul>
          <li>Christian NEGROLI, retraité</li>
          <li>Denis LAMBERT, comptable</li>
          <li> Françoise COSTE, médecin</li>
          <li>Geneviève MASSINES, éducatrice spécialisée</li>
          <li>Marie Josée MAGUER, sage-femme</li>
          <li>Mathilde PALAU, éducatrice spécialisée</li>
          <li> Muriel GUILLAUMES, formatrice</li>
          <li>Jacques LORIEUX, retraité (membre d&rsquo;honneur)</li>
        </ul>
        <div className="flex gap-x-5 items-center">
          <h4 id="title-2" className="scroll-mt-24">
            II - APEX : Violences conjugales de l&rsquo;intervention à la
            formation
          </h4>
          <Link
            href="#sommaire"
            className="mt-1 border rounded-md px-2 pt-[2px] bg-grey/10 hover:bg-white transition"
          >
            <BsArrowReturnRight size={24} />
          </Link>
        </div>

        <h5>1. Présentation de l&rsquo;équipe</h5>
        <p>
          Les membres, majoritairement travailleurs sociaux, salariés en Contrat
          à Durée Indéterminée à temps partiel, ont suivi plusieurs niveaux de
          formation dispensés par l&rsquo;équipe « d&rsquo;Option : « une
          alternative à la violence conjugale et familiale » (Québec).
          <br /> Christine GUILLAUMES, coordonnatrice, intervient sur
          l&rsquo;Escale, la permanence pour les jeunes exposés aux violences
          conjugales, et les permanences de la MSP de Céret.
          <br /> Isabelle LOEB est chargée de la comptabilité et
          l&rsquo;administration, de la gestion de l&rsquo;organisme de
          formation. Laetitia BRAVO intervenante à l&rsquo;Escale, anime les
          permanences de la MSP de Rivesaltes, d&rsquo;Elne et de Thuir, ainsi
          que les groupes de paroles pour les personnes auteures de violences
          conjugales.
          <br /> Mehdi EL BARKANI est intervenant sur les permanences et groupes
          de paroles pour les personnes auteures de violences conjugales et sur
          l&rsquo;Escale.
          <br /> Stéphanie GODARD, intervenante sur la MSP de Font Romeu.
          <br /> Valérie FONTIMPE intervenante sur l&rsquo;Escale et la MSP de
          Prades coordonne l&rsquo;action Prévention de la récidive et
          l&rsquo;accompagnement des personnes auteures des violences conjugales
          <br /> Yann LAUTROU, intervenant sur l&rsquo;Escale.
          <br /> L&rsquo;équipe peut aussi intervenir sur les actions de
          prévention auprès des jeunes dans les collèges et les lycées.
        </p>
        <h5>2. Les valeurs et principes d&rsquo;intervention</h5>
        <p>
          APEX accueille, écoute, accompagne des personnes en prise ou ayant été
          en prise avec les violences conjugales, prône les valeurs de respect,
          égalité hommes/femmes, non-jugement des personnes accueillies,
          confidentialité des échanges et de l&rsquo;identité des personnes
          accueillies, croyance à la remobilisation des ressources intérieures
          existantes, partenariat.
          <br /> Nos principes d'interventions sont les suivants :<br /> La
          violence, quel qu&rsquo;en soit la forme, ne peut être tolérée et doit
          être punie par la loi. C&rsquo;est un moyen choisi pour dominer une
          autre personne.
          <br /> Les notions de sécurité et de protection sont primordiales au
          sein de l&rsquo;association. Elles permettent aux personnes
          accueillies de trouver un espace qui leur est dédié.
          <br /> L&rsquo;accompagnement se déroule dans le respect de la
          personne, de son rythme, de son autonomie, en prenant en compte ses
          capacités afin qu'elle puisse reprendre le contrôle de sa vie.
          <br />
          L&rsquo;accueil des enfants, victimes collatérales de la violence
          conjugale, est pris en compte. Nous nous assurons qu&rsquo;il se
          déroule dans un cadre sécurisant pour l&rsquo;enfant, en premier lieu
          avec sa mère, puis lorsque l&rsquo;enfant se sent suffisamment sécure,
          seul avec l&rsquo;intervenant.
          <br /> Nous partons du principe que toute personne est responsable des
          actes qu&rsquo;elle pose et des décisions qu&rsquo;elle prend. Aussi,
          nous ne « victimisons » pas les personnes aux prises avec les
          violences conjugales que nous accompagnons, tout comme nous
          travaillons sur la prise de responsabilité et la reconnaissance des
          actes posés des personnes auteures.
          <br /> Afin de poursuivre son travail de réflexion et
          d&rsquo;effectuer au mieux ses missions dans des conditions favorisant
          un accueil de qualité, l&rsquo;équipe se réunit régulièrement et
          participe mensuellement à des séances de supervision, tout comme les
          co-animatrices (APEX et CD66) des groupes de paroles des Maisons
          Sociales de Proximité.
          <br /> Nous avons obtenu l&rsquo;agrément pour le parcours de sortie
          de prostitution.
          <br /> L&rsquo;association APEX dispose aussi d&rsquo;un organisme de
          formations dispensées tout au long de l&rsquo;année à des
          professionnels de divers horizons, souvent en lien avec le travail
          social. Certains membres de l&rsquo;équipe co-animent d&rsquo;ailleurs
          les formations dispensées par Option.
        </p>
        <h5>3. L'organisation</h5>
        <p>
          L&rsquo;équipe accueille les personnes dans des services et espaces
          différenciés :
        </p>
        <ul>
          <li>
            L&rsquo;Escale : Accueil de jour labélisé pour les femmes et les
            enfants exposés aux violences conjugales (Perpignan)
          </li>
          <li>
            Les personnes auteures sont reçues sur rendez-vous à Perpignan dans
            d&rsquo;autres locaux.
          </li>
          <li>
            Permanences et groupes de paroles dans les Maisons Sociales de
            Proximité du Département des PO (Thuir, Céret, Elne, Prades,
            Rivesaltes et Font Romeu)
          </li>
          <li>
            Les permanences pour les jeunes de 12 à 18 ans en partenariat avec
            une psychologue clinicienne se situent dans ses bureaux sur
            Perpignan.
          </li>
        </ul>
        <p>L&rsquo;équipe intervient aussi :</p>
        <ul>
          <li>
            Au centre de détention pour des sessions d&rsquo;information auprès
            de certaines personnes détenues
          </li>
          <li>
            Au centres maternels le Rivage (ACAL) et la Maison de Gaïa (IDEA)
            afin d&rsquo;y animer des groupes d&rsquo;échanges ou des ateliers
            (poterie, danse)
          </li>
        </ul>
        <p>Nos actions périodiques :</p>
        <ul>
          <li>
            Participation aux réunions du Fil à Métisser, à l&rsquo;Observatoire
            Départemental contre les Violences Envers les Femmes, aux réunions
            du Collectif Droits Des Femmes 66.
          </li>
          <li>
            Intervention à la cellule de recueil d&rsquo;informations
            préoccupantes des victimes de violences conjugales
          </li>
        </ul>
        <p>Nos actions ponctuelles :</p>
        <ul>
          <li>
            Prévention de « la violence dans les relations amoureuses chez les
            jeunes » auprès des scolaires (collèges et lycées), journée
            d&rsquo;accueil des étudiants à l&rsquo;UPVD
          </li>
          <li>
            Interventions auprès des centres de formation de travailleurs
            sociaux, les centres sociaux.
          </li>
          <li>
            Nous répondons à toutes les sollicitations de nos partenaires qui
            sont en demande d&rsquo;informations.*
          </li>
        </ul>
        <div className="flex gap-x-5 items-center">
          <h4 id="title-3" className="scroll-mt-24">
            III - Accompagnement des personnes en prise avec les violences
            conjugales
          </h4>
          <Link
            href="#sommaire"
            className="mt-1 border rounded-md px-2 pt-[2px] bg-grey/10 hover:bg-white transition"
          >
            <BsArrowReturnRight size={24} />
          </Link>
        </div>

        <h5>1. L'Escale</h5>
        <p>
          L&rsquo;Escale est un lieu ressource pour les femmes victimes ou ayant
          été victimes de violences conjugales, accompagnées ou non
          d&rsquo;enfants. Les personnes peuvent venir avec ou sans rendez-vous
          sur les heures d&rsquo;ouverture suivantes : lundi de 9h à 17h, mardi
          de 9h à 17h, mercredi de 9h à 17h, jeudi de 9h à 12h et de 14h à 18h
          et Vendredi de 14h à 17h.
          <br /> L&rsquo;accueil se fait dans une maison avec jardin qui offre
          un espace pour des rencontres collectives, ateliers bien être,
          sophrologie, groupe de paroles, un espace pour les femmes avec un coin
          bureau informatique, un espace bibliothèque, une grande cuisine, une
          salle de bain, des bureaux pour les entretiens individuels, une salle
          de jeux pour l&rsquo;accueil des enfants. Un grand garage nous permet
          la mise en place d&rsquo;ateliers. Il peut aussi temporairement, sous
          certaines conditions, servir de dépôt d&rsquo;affaires pour les femmes
          en attente d&rsquo;un hébergement. L'Escale est conçue pour être un
          lieu convivial et chaleureux, où les femmes, accompagnées ou non
          d&rsquo;enfants, viennent autant de fois qu&rsquo;elles le souhaitent,
          au rythme qui leur convient, et restent le temps qu'elles souhaitent,
          pour échanger entre elles (et avec l'intervenant si nécessaire) ou
          tout simplement pour bénéficier d'un moment de calme.
          <br /> Certaines femmes accueillies en urgence, viennent passer la
          journée à l&rsquo;Escale.
          <br /> Les personnes contactent l&rsquo;Escale, soit pour un entretien
          téléphonique, soit pour des informations ou des conseils, soit pour
          prendre rendez-vous. Toutes les personnes qui nous appellent ne sont
          pas forcément victimes de violences conjugales mais se sentent
          concernées par cette problématique.
          <br /> Des professionnels (dans le cadre de la discrétion
          professionnelle et avec l&rsquo;accord des personnes accueillies) nous
          contactent pour orienter des personnes mais aussi pour échanger sur
          des situations familiales. Ce travail de partenariat reste au centre
          de notre fonctionnement et permet de répondre au mieux aux
          préoccupations des personnes qui nous sollicitent.
          <br /> Nous proposons un premier entretien téléphonique qui permet une
          première écoute, une orientation éventuelle vers d&rsquo;autres
          partenaires, et des prises de rendez-vous à l&rsquo;Escale ou sur les
          permanences dans les MSP du département. Certaines femmes ne peuvent
          venir sur la structure soit par crainte que leur compagnon ne le
          sache, soit parce qu&rsquo;elles ne peuvent pas sortir de chez elles,
          soit parce qu&rsquo;elles ne sont pas sur le département. Avec elles,
          nous effectuons des entretiens téléphoniques approfondis et le cas
          échéant des orientations.
          <br /> En ce qui concerne les femmes vivant hors département nous
          recherchons des lieux proches de leur domicile afin qu&rsquo;elles
          puissent prendre contact avec des professionnels ou avec le 3919.
          <br /> Notre soutien s'effectue à partir :
        </p>
        <ul>
          <li> D&rsquo;entretiens individuels. </li>
          <li>
            D&rsquo;accompagnements auprès des médecins, du service des urgences
            de l&rsquo;Hôpital, des commissariats, des gendarmeries, des CHRS et
            structures d&rsquo;urgence, des associations caritatives…
          </li>
          <li>
            D&rsquo;accompagnement dans les démarches administratives et
            juridiques (orientation pour dossier CMU, SIAO, cellule,
            surendettement, aide juridictionnelle, recherche de logement,
          </li>
          <li> Des temps de rencontres mères/ enfants, </li>
          <li>
            D&rsquo;ateliers de sophrologie : Les femmes accueillies peuvent, si
            elles le souhaitent participer aux ateliers de sophrologie animés
            par une sophrologue, tous les mardis de 14h30 à 15h30
          </li>
          <li>
            D&rsquo;ateliers de self défense animé par un professeur de judo
            tous les vendredis de 14h30 à 15h30
          </li>
          <li>
            Comité des usagères : un temps de concertation nommé « réunion des
            Escaliennes ».
          </li>
          <li> De la permanence bimensuelle de France Victimes 66. </li>
          <li> Des groupes de paroles </li>
          <li>
            Des interventions collectives ponctuelles de partenaires extérieurs
            (avocats, CRAM, …).
          </li>
          <li>
            D&rsquo;ateliers créatifs (poterie, peinture) un mercredi sur deux
            l&rsquo;après-midi avec les enfants (de 3 à 10 ans environ)
          </li>
          <li>
            Des ateliers manuels (mosaïques) avec les femmes (souvent les mères
            des enfants qui participent à l&rsquo;atelier travaux manuels)
          </li>
          <li>Des ateliers bien être, beauté image de soi, repas partagés</li>
        </ul>
        <h5>2. LES JEUNES DE 12 A 18 ANS</h5>
        <p>
          Une permanence est assurée un mercredi sur deux de 17h à 19h et le
          groupe est co animé par une psychologue et une travailleuse sociale.
          <br />
          La fonction des animatrices est de permettre la circulation de la
          parole entre eux et d&rsquo;aider à l&rsquo;expression des émotions et
          de les contenir, de les accompagner à agrandir leur champ du possible
          pour éviter que des modes de fonctionnement se répètent de génération
          en génération.
          <br /> Après le groupe, elles échangent et prennent des notes sur ce
          qui vient de se passer.
          <br /> Les orientations des adolescents proviennent soit des parents,
          soit des professionnels.
        </p>
        <h5> 3. LES PERSONNES AUTEURES DE VIOLENCES CONJUGALES</h5>
        <p>
          Nous effectuons des permanences sur un autre lieu pour les personnes
          auteures de violences conjugales. Leur venue est soit spontanée, soit
          imposée par décision de justice. Un protocole avec le Parquet du
          Tribunal de Perpignan a été signé en 2005.
          <br /> Ces personnes prennent contact pour un premier rendez-vous
          individuel afin de définir leur motivation à travailler sur leur
          problématique de violence. Si un désir de changement ne se manifeste
          pas aux cours des entretiens individuels, la personne ne pourra pas
          intégrer le groupe de paroles qui est la finalité de notre
          accompagnement.
          <br /> L&rsquo;accompagnement proposé est un programme de 21 séances
          minimum en groupes de paroles, contre une participation financière et
          une acceptation des règles du groupe. Ce sont des groupes ouverts de 8
          participants maximum, co-animé par un binôme homme/femme. Les groupes
          ont lieu chaque semaine sur une durée de 1h30.
          <br /> Les objectifs de ces groupes sont d&rsquo;éviter la récidive,
          favoriser la réflexion sur les modes de communications violentes et
          sur la justification des passages à l&rsquo;acte, faire prendre
          conscience de la responsabilité de ses agirs violents, remettre en
          question leurs fonctionnements et trouver d&rsquo;autre mode de
          communication, aider à une meilleure gestion de leurs émotions, en
          comprendre l&rsquo;origine, réfléchir à l&rsquo;impact sur les proches
          et l&rsquo;entourage.
        </p>
        <div className="flex gap-x-5 items-center">
          <h4 id="title-4" className="scroll-mt-24">
            IV - FINANCEURS et PARTENAIRES
          </h4>
          <Link
            href="#sommaire"
            className="mt-1 border rounded-md px-2 pt-[2px] bg-grey/10 hover:bg-white transition"
          >
            <BsArrowReturnRight size={24} />
          </Link>
        </div>

        <p>Nos actions sont financées et soutenues par :</p>
        <ul>
          <li>La Caisse d&rsquo;Allocations Familiales </li>
          <li>La Caisse Primaire D&rsquo;Assurance Maladie </li>
          <li>Le Commissariat Général à l&rsquo;Egalité des Territoires </li>
          <li>La Communauté Urbaine Perpignan Méditerranée Métropole </li>
          <li>Le Conseil Départemental 66 </li>
          <li>Le Conseil Régional Occitanie/ Méditerranée Pyrénées</li>
          <li>La Direction Régionale Droit des Femmes et à l&rsquo;Egalité </li>
          <li>La Fondation de France </li>
          <li>Le Fonds D&rsquo;aide à la Vie Associative </li>
          <li>Le Fonds Interministériel de Prévention de la Délinquance </li>
          <li>La justice </li>
          <li>La Mairie de Perpignan </li>
          <li>La Mutualité Sociale Agricole </li>
        </ul>
        <p>
          Nous avons obtenu le label du REAPP et du Contrat de ville.
          <br /> Pour fluidifier nos ressources et simplifier les démarches,
          nous avons signé des Conventions Pluriannuelles d&rsquo;Objectifs avec
          le Commissariat Général à l&rsquo;Egalité des Territoires, la
          Direction Régionale aux Droits des Femmes et à l&rsquo;Egalité et la
          Caisse d&rsquo;Allocations Familiales.
          <br /> A ces financements s&rsquo;ajoutent les cotisations des
          adhérents, les soutiens financiers, ainsi que la participation
          financière des hommes aux groupes de paroles et quelques actions non
          subventionnées et facturées, (voir les actions périodiques et
          ponctuelles).
          <br /> Lors de la journée internationale pour l&rsquo;élimination de
          la violence à l&rsquo;égard des femmes, le Club Soroptimist propose
          une projection avec débat au Cinéma le Castillet. Le bénéfice est
          intégralement reversé à APEX au profit de l&rsquo;Escale. Le Club
          Soroptimist soutient aussi l&rsquo;association via d&rsquo;autres
          évènements. Nous avons également un soutien ponctuel des « Cargolettes
          du désert ». L&rsquo;argent récolté profite directement aux femmes
          (secours d&rsquo;urgence, repas, sortie, carte de bus…etc).
          <br /> Nos actions s'inscrivent dans les différents plans triennaux
          contre les violences conjugales proposés par l&rsquo;Etat dont le
          dernier est 2017-2019.
          <br /> Nous sommes signataires :
        </p>
        <ul>
          <li>
            Du protocole départemental de lutte et de prévention contre les
            violences faites aux femmes
          </li>
          <li>De la charte régionale contre les violences faites aux femmes</li>
          <li>
            Du protocole sur la « Prévention de la récidive et traitement des
            personnes auteures de violences conjugales »
          </li>
          <li>D'une convention avec le SPIP </li>
          <li>D'une convention de partenariat avec le CHRS Mares I Nens </li>
          <li>
            De la Convention locale relative au traitement des mains courantes
            et des procès-verbaux de renseignements judiciaires
          </li>
          <li> De la convention téléphone grand danger </li>
          <li>D&rsquo;une convention avec l&rsquo;Office Départemental HLM </li>
          <li>
            Du protocole cadre pour le recueil, le traitement et
            l&rsquo;évaluation des informations préoccupantes de victimes de
            violences conjugales
          </li>
          <li>
            Du protocole d&rsquo;hébergement des auteurs de violences intra
            familiales
          </li>
          <li>
            D&rsquo;une convention avec l'A.E.P.I. (Association Espace Polygone
            Insertion)
          </li>
        </ul>
        <p>Nos principaux partenaires</p>
        <ul>
          <li>les services de police et de gendarmerie</li>
          <li>
            Les assistantes sociales de la gendarmerie et du commissariat
            central.
          </li>
          <li>
            les travailleurs sociaux des différents services : Caisse
            d&rsquo;Allocations Familiales, Maisons Sociales de Proximité,
            Enfance Catalane, UDAF
          </li>
          <li>
            Les psychologues de différents services, les sages-femmes, les
            médecins, les gynécologues
          </li>
          <li>
            les Centres d&rsquo;Hébergement et de Réinsertion Sociale et les
            services d&rsquo;accueil d&rsquo;urgence.
          </li>
          <li>
            France Victimes 66,le Centre d&rsquo;Information des Droits de la
            Femme et de la Famille, la Maison d&rsquo;Accès aux Droits, la
            Maison de la Justice
          </li>
          <li>Les avocats et les différents services juridiques </li>
          <li>
            Les services hospitaliers et les cliniques, le CAC 48, l&rsquo;EMPP
          </li>
          <li>
            l&rsquo;Agence Immobilière à Vocation Sociale, les bailleurs sociaux
            et autres organismes chargés du logement
          </li>
          <li>
            Les associations : l&rsquo;Association Nationale de Prévention en
            Alcoologie et Addictologie, Parenthèse, l&rsquo;ASTI, la CIMADE, la
            Maison Bleue, Aides 66.
          </li>
        </ul>
        <p>
          Apex adhère à l&rsquo;UDAF, à la Fédération Nationale des Associations
          et des Centres de prise en charge d'Auteurs de Violences Conjugales et
          Familiales, au Collectif Droit Des Femmes 66, au Planning Familial 66
          et 11, au Collectif Femmes Immigrées victimes de violences conjugales,
          et aux associations : MRAP, France Victimes 66, LGBT+66,
          L&rsquo;Amicale du Nid, Parenthèse, le Fil à Métisser, Femmes
          Solidaires 66, IDEM Question de Genre, ACAM-Point Rencontre 66,
          l&rsquo;Enfant Majuscule, le Relais Enfants Parents - Pyrénées
          Catalane, , Il faudra leur dire, ASSOSPHERE et ADESOL.
        </p>
        <div className="flex gap-x-5 items-center">
          <h4 id="title-5" className="scroll-mt-24">
            V - ANALYSE ET RÉFLEXION
          </h4>
          <Link
            href="#sommaire"
            className="mt-1 border rounded-md px-2 pt-[2px] bg-grey/10 hover:bg-white transition"
          >
            <BsArrowReturnRight size={24} />
          </Link>
        </div>

        <p>Points forts :</p>
        <ul>
          <li>
            La fréquentation de l&rsquo;Escale est en augmentation d&rsquo;année
            en année tout comme les appels téléphoniques et les prises de
            rendez-vous.
          </li>
          <li>
            Nous obtenons une reconnaissance de nos partenaires extérieurs qui
            nous sollicitent de plus en plus et nous orientent des usager.è.res
          </li>
          <li>
            Les formations dispensées dans le cadre de la FPC, sont appréciées
            par les participants et reconnues par le réseau des partenaires.
          </li>
          <li>
            Nous avons obtenu l&rsquo;Agrément « parcours de sortie de la
            prostitution ».
          </li>
          <li>
            Nous avons obtenu la reconnaissance des financeurs qui ont signé des
            conventions triennales.
          </li>
          <li>
            Les formations contribuent à la qualité des professionnel.le.s
            intervenants à APEX et de leur savoir-faire et savoir être.
          </li>
          <li>
            Nous avons ouvert un nouveau site internet d&rsquo;APEX, et avons
            créé la page Facebook. Ces ouvertures sur le web et les réseaux
            sociaux facilitent le repérage, les échanges d&rsquo;informations et
            d&rsquo;actualité.
          </li>
        </ul>
        <p>Points à améliorer :</p>
        <ul>
          <li>
            Pallier l&rsquo;insuffisance des subventions pour répondre aux
            besoins de la structure en termes de temps et moyens.
          </li>
          <li>Créer un poste de standard/accueil.</li>
          <li>
            Participer aux permanences de la Maison de justice et du droit,
            maison des adolescents…
          </li>
          <li>
            Présence sur l&rsquo;Unité Medico Judiciaire pour faciliter
            l&rsquo;accompagnement
          </li>
          <li>
            Ouvrir la structure lundi et vendredi matin, pour répondre à la
            demande de RDV
          </li>
          <li>
            Développer le travail auprès des hommes victimes et des femmes
            auteures
          </li>
          <li>
            Continuer de travailler à la communication de la structure,
            réfléchir aux outils de communication
          </li>
          <li>
            Répondre aux sollicitations des partenaires extérieurs sans réduire
            le temps dévolu à l&rsquo;Escale
          </li>
        </ul>
        <p>
          Orientations choisies :<br />
          Diversifier les ressources financières :
        </p>
        <ul>
          <li>
            Recherche de mécénats et création de partenariats avec des
            entreprises locales.
          </li>
          <li>
            Inscription à un moteur de recherche et mise en ligne d&rsquo;un
            projet participatif :
          </li>
          <li> Revoir les affiches, les plaquettes et les diffuser. </li>
          <li>Nous ouvrir à d&rsquo;autres réseaux sociaux que Facebook</li>
        </ul>
        <p>
          Création d&rsquo;un poste d&rsquo;accueillant téléphonique :<br />
          Afin de gérer le flux d&rsquo;appel croissant, et pour éviter que les
          femmes ne se retrouvent trop souvent face à une messagerie, un poste
          d&rsquo;accueillante téléphonique devient indispensable. En effet, il
          est difficile pour des femmes aux prises avec les violences
          conjugales, qui se décident à demander de l&rsquo;aide, de se
          retrouver sans un accueil humain. Nous pensons, que nous perdons une
          partie importante de ces victimes, en référence aux nombreux appels
          sans message. La fermeture de l&rsquo;Escale le lundi matin et
          vendredi matin ne facilitent pas les choses. <br />
          Nous souhaiterions donc améliorer la prise de rendez-vous en créant
          davantage de lien lors de cet échange, rassurer la personne, lui
          préciser que si elle n&rsquo;est pas prête ou ne peut venir, de nous
          prévenir pour que d&rsquo;autres puissent bénéficier de ce créneau,
          préciser les autres permanences possibles sur le département en
          fonction de leur commune de résidence (proximité pour favoriser leur
          venue).
          <br /> Développer d&rsquo;autres projets :
        </p>
        <ul>
          <li>
            Accompagnement social lié au logement et obtention de logement
          </li>
          <li>Développer les actions de prévention auprès des jeunes </li>
          <li>
            Répondre aux demandes des femmes ne maitrisant pas la langue
            française
          </li>
        </ul>
        <div className="flex gap-x-5 items-center">
          <h4 id="title-6" className="scroll-mt-24">
            VI - LA FORMATION PROFESSIONNELLE CONTINUE
          </h4>
          <Link
            href="#sommaire"
            className="mt-1 border rounded-md px-2 pt-[2px] bg-grey/10 hover:bg-white transition"
          >
            <BsArrowReturnRight size={24} />
          </Link>
        </div>

        <p>
          APEX est un organisme de formation enregistré sous le numéro
          91660070966, datadocké, qui dispense chaque année environ 6 formations
          autour des violences conjugales et intra familiales.
          <br /> Les formations sont animées par des travailleurs sociaux et
          thérapeutes d&rsquo;OPTION- « Une alternative à la violence conjugale
          et familiale », organisme de formation agréé au QUEBEC, parfois en
          collaboration avec un intervenant d&rsquo;APEX.
        </p>
        <h5> 1. Les principaux objectifs de nos formations </h5>
        <p>
          Les formations permettent aux stagiaires, professionnels et futurs
          professionnels de :
        </p>
        <ul>
          <li>
            Connaitre les mécanismes des violences conjugales et intrafamiliales
            ainsi que les répercussions sur tous les aspects de la vie des
            personnes victimes et de leurs enfants,
          </li>
          <li>
            Adapter leur accompagnement aux besoins des personnes suivies,
          </li>
          <li>Développer des compétences et connaissances individuelles. </li>
          <li>
            Créer un réseau de professionnels formés à cette problématique.
          </li>
        </ul>

        <h5>2. Le projet pédagogique</h5>
        <p>
          Méthodes et outils utilisés <br /> Concrètes et pratiques, nos
          formations s&rsquo;appuient sur les situations rencontrées et
          expériences vécues par les stagiaires. C&rsquo;est le fil rouge de
          notre approche.
          <br /> Ainsi, les apports théoriques sont illustrés par une mise en
          application : mises en situation, jeux de rôles…
          <br /> Notre volonté étant de faire des participants les véritables
          acteurs de leur formation, nous nous basons également sur leur
          expérience et leur témoignage. Nous favorisons ainsi les échanges et
          les transferts de savoir-faire. Ces échanges et apports théoriques
          permettront à chaque stagiaire de repartir avec les éléments
          constitutifs de « sa boite à outils »<br />
          L&rsquo;organisation de nos formations <br />
          Sessions de formation collective avec un ou deux experts formateurs
          d&rsquo;une durée de 14 à 21H.
          <br /> Ces sessions de formation sont proposées en inter ou en intra,
          parfois délocalisées.
          <br /> Entre les formations, nous nous proposons de rester personne
          ressource afin d&rsquo;assurer une continuité dans
          l&rsquo;accompagnement des stagiaires.
        </p>
        <h5> 3. Les métiers représentés</h5>
        <ul>
          <li>
            Travailleur.euse.s sociaux et sociales : éducateur.rice
            spécialisé.e, CESF, assistant.e de service social, moniteur.rice
            éducateur.rice…
          </li>
          <li>
            Justice : conseiller.ère pénitentiaire d&rsquo;insertion et de
            probation
          </li>
          <li>
            Médical et para médical : infirmièr.e., sage-femme, médecin,
            psychologue, puéricultrice…
          </li>
          <li> Enseignement : professeur.e, CPE</li>
          <li>Administratif : secrétaire, agent d&rsquo;accueil</li>
        </ul>
        <p>
          Les stagiaires viennent essentiellement des PO, mais aussi de toute la
          France. Ils participent à la dynamique du réseau d&rsquo;APEX.
          <br /> La Formation Professionnelle Continue connait un tournant
          stratégique : les réformes engagées en 2019 peuvent remettre en
          question l&rsquo;existence de l&rsquo;organisme de formation. Nous
          sommes aidés dans le cadre d&rsquo;un Dispositif Local
          d&rsquo;Accompagnement pour faire évoluer notre offre de formation
          afin de pouvoir répondre aux critères à venir.
          <br /> L&rsquo;organisme de formation est engagé dans la démarche de
          Référencement National Qualité, en vue d&rsquo;obtenir la
          Certification dans le courant de l&rsquo;année 2020.
        </p>
      </div>
    </div>
  );
};

export default Projet;
