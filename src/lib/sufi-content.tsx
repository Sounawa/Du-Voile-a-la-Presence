// ═══════════════════════════════════════════════════════════════════════
// SUFI CONTENT DATA — Du Voile à la Présence
// Toute la substance textuelle du traité
// ═══════════════════════════════════════════════════════════════════════

export interface SufiQuote {
  text: string;
  author: string;
  source?: string;
}

export interface SufiSection {
  id: string;
  title: string;
  subtitle?: string;
  bismillah?: string;
  content: React.ReactNode;
}

import React from "react";

// ═══════════════════════════════════════════════════════════════════════
// NAVIGATION STRUCTURE
// ═══════════════════════════════════════════════════════════════════════

export const navItems = [
  { id: "preface", label: "Préface" },
  { id: "partie-1", label: "I. Le cœur et ses voiles" },
  { id: "partie-2", label: "II. Jamâl et Jalâl" },
  { id: "partie-3", label: "III. L'alchimie nocturne" },
  { id: "partie-4", label: "IV. La transmutation" },
  { id: "partie-5", label: "V. Le cœur brisé, sanctuaire" },
  { id: "partie-6", label: "VI. La guérison et l'Unité" },
  { id: "conclusion", label: "Conclusion" },
  { id: "anthologie", label: "Anthologie" },
];

// ═══════════════════════════════════════════════════════════════════════
// HERO EXERGUE
// ═══════════════════════════════════════════════════════════════════════

export const heroExergue: SufiQuote = {
  text: "La blessure est la porte par laquelle la Lumière entre dans le cœur.",
  author: "Jalâl al-Dîn Rûmî",
  source: "Masnavî, Livre II",
};

export const heroSubtitle =
  "Traité soufi de l'épreuve et de la blessure";

export const heroDescription =
  "Une méditation inspirée par la tradition soufie — offrant un nouveau regard sur les épreuves, les blessures, et le voyage du cœur du voile jusqu'à la Présence divine.";

// ═══════════════════════════════════════════════════════════════════════
// FOOTER HADITH ROTATION
// ═══════════════════════════════════════════════════════════════════════

export const footerQuotes: SufiQuote[] = [
  {
    text: "Certes, avec la difficulté vient la facilité.",
    author: "Coran, 94:6 (Ash-Sharh)",
  },
  {
    text: "Mon cœur est capable de toute forme — il est pâturage pour les gazelles et couvent pour les moines.",
    author: "Ibn 'Arabî",
    source: "Tarjumân al-Ashwâq",
  },
  {
    text: "Ne te plains pas du malheur — regarde combien d'amis la nuit a rassemblés.",
    author: "Farîd al-Dîn 'Attâr",
    source: "Le Cantique des oiseaux",
  },
  {
    text: "L'amour est venu et il a laissé des couleurs comme le taches du paon.",
    author: "Jalâl al-Dîn Rûmî",
    source: "Dîwân-e Shams-e Tabrîzî",
  },
  {
    text: "Celui qui se connaît lui-même connaît son Seigneur.",
    author: "Hadith prophétique",
  },
];

// ═══════════════════════════════════════════════════════════════════════
// CONTENT SECTIONS — Chaque section est un React.ReactNode
// ═══════════════════════════════════════════════════════════════════════

export function PrefaceContent() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Il y a, dans la tradition spirituelle de l'Islam, un courant qui ne cesse de murmurer la même vérité depuis plus de mille ans : <em>la blessure est un seuil</em>, non une impasse. Non pas que la souffrance soit souhaitable — mais ce que le cœur éprouve comme fracture porte en lui la promesse d'une ouverture que le confort ne permet jamais.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Ce petit traité ne se présente pas comme un ouvrage académique, ni comme un guide thérapeutique. Il se veut plutôt un <strong>espace de partage</strong>, une main tendue vers ceux qui traversent l'épreuve — qu'elle soit du corps, du cœur ou de l'âme — et qui cherchent, dans ce passage, un sens qui dépasse le simple récit de leur douleur.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        L'approche qui suit s'inspire librement des maîtres du soufisme : de Jalâl al-Dîn Rûmî et son Masnavî monumental, de Muhyî al-Dîn Ibn 'Arabî et sa métaphysique de l'unicité, de Mansûr al-Hallâj dont le martyre est devenu le symbole de l'amour qui consume, de Farîd al-Dîn 'Attâr et sa allégorie du voyage spirituel, d'Abû Hâmid al-Ghazâlî qui enseigna que le cœur est un miroir, et de tant d'autres qui ont frayé le sentier de la réalisation divine.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Le cœur a deux mouvements : l'un tourne vers le monde, l'autre tourne vers le Roi des rois. Lequel des deux l'emportera ? Celui vers lequel tu tournes, tu deviens.
        </p>
        <cite className="attribution">Jalâl al-Dîn Rûmî — Masnavî, Livre I</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Le concept central de ce traité est celui du <strong>Tawhîd</strong>, l'unicité absolue de Dieu. Non pas une abstraction doctrinale, mais une réalité vécue : tout ce qui existe procède de l'Unique, et toute séparation n'est qu'apparence. L'épreuve, la blessure, la perte — tout cela est un voile qui se lève, révélant que la Présence divine était toujours là, sous la douleur comme sous la joie.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Ce traité ne propose pas de « guérir » au sens où l'entend la psychologie moderne. Il ne s'agit pas de « réparer » le moi blessé, mais de contempler, avec les yeux du cœur, comment la blessure elle-même peut devenir l'instrument de la <strong>transmutation</strong> — ce processus alchimique par lequel le plomb de l'égoïté se transforme en l'or de la Présence.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Que le lecteur reçoive ces mots comme on reçoit la pluie après la sécheresse : non comme une vérité imposée, mais comme une offre. L'eau ne force pas la terre — elle l'imbibe doucement, et la vie surgit d'elle-même.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ce qui te blesse, tu crois que c'est contre toi. Mais regarde encore — c'est peut-être l'Unique qui frappe à ta porte d'une main que tu ne reconnais pas encore.
        </p>
        <cite className="attribution">Inspiré de l'enseignement de Shams al-Dîn de Tabrîz</cite>
      </blockquote>
    </>
  );
}

export function Partie1Content() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Le miroir et ses taches
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Le cœur — <em>al-qalb</em> — est, dans la tradition soufie, bien plus qu'un organe physique ou un centre émotionnel. Al-Ghazâlî, dans son chef-d'œuvre <em>Ihyâ' 'Ulûm al-Dîn</em> (La Revivification des sciences de la religion), le décrit comme un <strong>miroir</strong> fait pour refléter la lumière divine. Par sa nature originelle — sa <em>fitra</em> —, le cœur est transparent, limpide, capable de recevoir la manifestation de Dieu comme un lac immobile reçoit le reflet du ciel.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Le cœur est le champ du Roi. Nettoie ce champ de toute herbe folle, et le Roi y apparaîtra.
        </p>
        <cite className="attribution">Abû Hâmid al-Ghazâlî — Ihyâ' 'Ulûm al-Dîn</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Mais ce miroir peut se couvrir de voiles — de <em>qubūl</em> — qui obscurcissent sa capacité à refléter la lumière. Ces voiles ne sont pas des péchés au sens moralisateur du terme ; ce sont des <em>attachements</em>, des <em>habitudes de perception</em> qui font que le cœur prend les créatures pour le Créateur, les formes pour l'Essence, les pensées pour la Réalité.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Les voiles de l'attachement
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Les soufis identifient plusieurs voiles principaux qui couvrent le cœur :
      </p>

      <ul className="list-none space-y-4 mb-6 ml-4">
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0">✦</span>
          <span className="text-lg leading-relaxed"><strong>Le voile de l'ego</strong> — quand le <em>nafs</em> (le moi inférieur) se croit séparé et autonome, il construit un monde centré sur « moi, mes désirs, mes peurs ». Ce voile est le plus épais, car il est le fondement de tous les autres.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0">✦</span>
          <span className="text-lg leading-relaxed"><strong>Le voile de la peur</strong> — la peur de la perte, du rejet, de l'abandon. La peur nous fait agripper ce qui est périssable et nous empêche de nous abandonner à l'Impermanent qui ne périt pas.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0">✦</span>
          <span className="text-lg leading-relaxed"><strong>Le voile du désir</strong> — le désir de possession, de contrôle, de reconnaissance. Quand le cœur veut « avoir » plutôt que « être », il se ferme à l'infini.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0">✦</span>
          <span className="text-lg leading-relaxed"><strong>Le voile de la certitude trompeuse</strong> — croire que l'on sait, que l'on comprend, que l'on a atteint. C'est le voile le plus subtil, car il porte les habits de la lumière.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0">✦</span>
          <span className="text-lg leading-relaxed"><strong>Le voile de la blessure non transformée</strong> — la douleur cristallisée en ressentiment, en accusation, en narration de victime. La blessure qui ne devient pas porte devient prison.</span>
        </li>
      </ul>

      <blockquote className="sufi-quote mb-6">
        <p>
          Il y a dans le chemin de Dieu un voile épais comme le ciel : c'est ton « je ». Lève ce « je » de ton chemin, et tu verras le visage du Bien-Aimé.
        </p>
        <cite className="attribution">Farîd al-Dîn 'Attâr — Le Cantique des oiseaux</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        L'essentiel de l'enseignement soufi sur les voiles est ceci : <strong>le voile n'est pas un mur</strong>. Il est une épaisseur, un voile au sens propre — quelque chose de translucide qui peut être levé, retiré. Et c'est précisément ici que l'épreuve intervient : car Dieu, dans Sa sagesse, envoie parfois la tempête pour disperser la poussière qui couvrait le miroir.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        La blessure, alors, n'est pas ce qui détruit le cœur — elle est ce qui, paradoxalement, peut <em>dévoiler</em> le cœur en brisant les couches de protection que l'ego avait édifiées autour de lui. Comme on casse une croûte pour laisser s'écouler le pus, comme on brise une coquille pour libérer l'oiseau, l'épreuve casse les carapaces et révèle ce qui était caché : la capacité du cœur à contenir l'Océan.
      </p>
    </>
  );
}

export function Partie2Content() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Deux visages d'un seul Visage
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Dans la théologie soufie, Dieu se manifeste à travers deux attributs complémentaires : <strong>al-Jamâl</strong>, la Beauté, et <strong>al-Jalâl</strong>, la Majesté. Jamâl est le visage de l'amour, de la tendresse, de la grâce, de l'intimité divine. Jalâl est le visage de la puissance, de la rigueur, de l'épreuve, du dépouillement. Jamâl attire ; Jalâl brise. Jamâl embrasse ; Jalâl dépouille. Et les deux ne sont pas en contradiction — ils sont les deux mains du même Bien-Aimé.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          L'eau divine a deux qualités : elle noie celui qui s'y noie, et elle abreuve celui qui la boit. De même, la Majesté détruit et la Beauté vivifie — et les deux émanent du même Océan.
        </p>
        <cite className="attribution">Jalâl al-Dîn Rûmî — Masnavî, Livre III</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Jamâl : la grâce qui attire
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Quand l'âme goûte à la beauté divine — dans la prière, dans la contemplation, dans un instant de présence où le monde s'apaise — elle est attirée comme le fer vers l'aimant. C'est le <em>jadhb</em>, l'attraction spirituelle. Le cœur expérimente une douceur qu'il n'avait jamais connue, une paix qui transcende toute compréhension. Les soufis disent que ce goût de Jamâl est la preuve — le <em>dhawq</em> — que la Réalité divine n'est pas une idée mais une expérience vivante.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Ibn 'Arabî, dans ses <em>Fusûs al-Hikam</em> (Les Chatons de la sagesse), enseigne que chaque créature est un « miroir » dans lequel se reflète un nom divin particulier. Le mystique est celui dont le cœur a été poli au point de pouvoir refléter <strong>tous</strong> les noms — la Beauté comme la Majesté — sans se briser d'aucun.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Jalâl : la rigueur qui dépouille
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Mais que se passe-t-il quand Dieu se manifeste par la Majesté ? Quand l'épreuve survient — la perte d'un être aimé, la maladie, l'injustice, l'échec, le doute qui ronge — le cœur est frappé. Et dans cette frappe, quelque chose se brise. Mais ce qui se brise, disent les maîtres, ce ne sont pas les vrais fondements — ce sont les faux. Les idoles que le cœur avait érigées : la confiance en soi, l'attachement aux créatures, la croyance que le bonheur vient de ce monde.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ce que tu appelles désastre, Dieu l'appelle préparation. Ce que tu appelles fin, Il l'appelle commencement. Ce qui te fait pleurer, Il l'utilise pour laver tes yeux afin que tu voies enfin.
        </p>
        <cite className="attribution">Jalâl al-Dîn Rûmî — Masnavî, Livre IV</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        C'est ici que le regard soufi transforme fondamentalement notre rapport à l'épreuve. L'épreuve n'est pas une punition — elle est une <strong>pédagogie</strong>. Dieu ne frappe pas par colère ; Il décape par amour. La Majesté divine n'est pas la contrainte — elle est le fer qui chauffe pour enlever la rouille. Celui qui comprend cela ne dit plus « Pourquoi moi ? » mais « Qu'est-ce que l'Unique cherche à me révéler à travers cela ? »
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        La danse des deux attributs
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Le voyage du cœur ne va jamais dans une seule direction. Il y a des périodes de Jamâl — la douceur, la présence, la faveur divine — et des périodes de Jalâl — l'aridité, l'épreuve, le sentiment d'abandon. Les soufis appellent ces phases <em>ahwâl</em> (états spirituels). Ils sont comme les marées de l'océan divin : ils montent, ils descendent, et à chaque fois ils laissent sur le rivage du cœur quelque chose de nouveau.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Al-Ghazâlî enseigne que le croyant mature est celui qui reconnaît la main de Dieu aussi bien dans la <em>ni'ma</em> (la faveur) que dans la <em>mihn</em> (l'épreuve). Il ne remercie pas seulement dans l'aisance — il remercie aussi dans la difficulté, car il sait que les deux viennent du même Bien-Aimé. Et c'est cette gratitude dans l'épreuve — <em>al-shukr 'alâ al-balâ</em> — qui est le signe du cœur qui a commencé à voir au-delà des voiles.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ô toi qui te plains de l'épreuve, sache que les prophètes ont été éprouvés avant toi. Si tu n'avais pas marché dans la vallée de la douleur, tu n'aurais jamais connu la hauteur de la Présence.
        </p>
        <cite className="attribution">Shiblî — Maître soufi du IIIe siècle de l'Hégire</cite>
      </blockquote>
    </>
  );
}

export function Partie3Content() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        La nuit du nafs
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Il est un moment dans le voyage du cœur que tous les maîtres ont traversé et que tous décrivent avec une constance troublante : la <strong>nuit obscure</strong>. Les soufis l'appellent <em>sahr</em> (la veille), <em>qabd</em> (la contraction) ou encore <em>fana' al-sifr</em> (l'effacement du zéro). C'est le moment où Dieu retire Sa douceur apparente et où le cœur se retrouve seul avec lui-même — ses peurs, ses doutes, ses blessures les plus profondes.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Le <em>nafs</em> — ce moi inférieur qui se croit centre du monde — entre alors dans ce que les soufis nomment <em>al-nafs al-lawwâma</em>, « l'âme qui se réprimande ». C'est le stade où le nafs ne se contente plus de suivre ses désirs aveuglément — il commence à voir ses propres failles, ses propres contradictions. Et cette vue est douloureuse. Car voir son propre ego, sans fard, sans excuse, c'est regarder en face un miroir qui montre des traits qu'on préférerait ne pas reconnaître.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          L'épreuve du chercheur n'est pas dans le monde — elle est dans lui-même. Son pire ennemi n'est pas le diable, c'est son propre « je » qui refuse de mourir.
        </p>
        <cite className="attribution">Abû Hâmid al-Ghazâlî — Ihyâ' 'Ulûm al-Dîn</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Quand la blessure emprisonne
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        La phase nocturne est aussi le moment où la blessure, non encore transformée, devient <em>prison</em>. Car le nafs blessé a une tendance naturelle : il <strong>raconte</strong>. Il se raconte comme victime, comme abandonné, comme maudit. Il construit une narration autour de la douleur — « c'est à cause de lui », « c'est à cause de cela », « je ne mérite que cela » — et cette narration devient une cellule de plus en plus étroite.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Ibn 'Arabî, dans sa sagesse infinie, parle du <em>takwîn</em> — la façon dont nos perceptions créent des mondes. Quand le cœur blessé regarde le monde à travers le filtre du ressentiment, il voit un monde hostile, dur, injuste. Et ce monde qu'il voit <em>est</em> sa création — non pas la Réalité, mais la réalité qu'il a édifiée avec les briques de sa douleur non transformée.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Tu es ta propre prison. Les barreaux sont tes pensées. Le geôlier est ton « je ». Et la clé est suspendue à ton cou, mais tu refuses de la voir car tu as trop peur de la liberté.
        </p>
        <cite className="attribution">Inspiré de l'enseignement de Jalâl al-Dîn Rûmî</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Le creuset de la transformation
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Pourtant — et c'est le retournement que propose la sagesse soufie — cette nuit n'est pas un <em>échec</em> du chemin. Elle en est une <em>étape</em> nécessaire. Rûmî compare le cœur dans la nuit à l'or dans le creuset : il faut que le feu soit assez ardent pour consumer toutes les impuretés. Et ce feu, aussi douloureux soit-il, ne cherche pas à détruire l'or — il cherche à le <strong>purifier</strong>.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        'Attâr, dans le <em>Mantiqu al-Tayr</em> (Le Cantique des oiseaux), raconte que les oiseaux entreprennent un long et périlleux voyage vers le Simorgh — l'oiseau roi, symbole de Dieu. Ils traversent sept vallées successives : la vallée de la Recherche, celle de l'Amour, de la Connaissance, du Détachement, de l'Unicité, de l'Étonnement, et enfin de la Pauvreté et du Néant. Chaque vallée est une épreuve qui dépouille les oiseaux d'une illusion supplémentaire. Et quand ils arrivent enfin devant le Simorgh, ils découvrent qu'ils sont devenus le Simourg lui-même — car le voyage les a transformés.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          La chenille pense que c'est la fin. Mais l'univers sait que c'est un papillon. Ne pleure pas ta chrysalide — remercie pour les ailes qui s'y préparent.
        </p>
        <cite className="attribution">Inspiré de l'enseignement de Farîd al-Dîn 'Attâr</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        La nuit du nafs, quand elle est traversée avec patience et sincérité, devient le <strong>creuset alchimique</strong> où s'opère la transmutation. Car ce n'est pas dans la lumière que le vrai changement se produit — c'est dans l'obscurité, quand tout semble perdu, que le cœur apprend à se tourner vers Celui qui est la Lumière même des cieux et de la terre.
      </p>
    </>
  );
}

export function Partie4Content() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        L'alchimie du cœur
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Dans la tradition soufie, la transformation n'est pas une amélioration graduelle du moi. C'est un <strong>renversement</strong> de perspective. Al-Ghazâlî, dans son traité des « Quarante principes de la religion », décrit ce processus comme le passage de la <em>sahw</em> (l'ivresse de l'attachement au monde) à la <em>sahw</em> (l'éveil à la Réalité divine). Le même mot — <em>sahw</em> — désigne l'ivresse de l'illusion et l'éveil de la vérité. Car l'alchimie soufie ne transforme pas le plomb en or : elle révèle que le plomb n'a jamais été que de l'or qui s'ignorait.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        La blessure comme révélateur
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Chaque blessure porte en elle une <strong>question</strong> — et c'est cette question qui, si on la pose sincèrement, devient la porte. « Pourquoi cette douleur ? » n'est pas la bonne question. La bonne question est : « Que me révèle cette douleur que je ne voulais pas voir ? »
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Rûmî raconte l'histoire d'un homme qui, frappé par la vie, se rend chez un sage en disant : « J'ai tout perdu. » Le sage répond : « Non — tu as tout gagné. Ce que tu avais perdu n'était pas à toi. Ce qui te reste est ce qui ne peut être perdu. » Cette parabole contient le cœur de la transmutation : l'épreuve ne prend pas — elle <em>dévoile</em>. Elle enlève ce qui n'était pas authentiquement tien pour te laisser face à ce qui l'est.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ce n'est pas en fuyant la douleur que tu la transmutes — c'est en te tenant debout au milieu d'elle, les yeux ouverts, et en demandant : « Ô mon Dieu, montre-moi Ta main dans cette blessure. »
        </p>
        <cite className="attribution">Inspiration libre de l'enseignement de Bayazîd Bistâmî</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Les étapes de la transmutation
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        La tradition décrit plusieurs étapes dans ce processus de transformation :
      </p>

      <ul className="list-none space-y-4 mb-6 ml-4">
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0 text-sm font-bold">01</span>
          <span className="text-lg leading-relaxed"><strong>L'effraction</strong> — La blessure survient. Le monde tel qu'on le connaissait s'effondre. C'est le moment du choc, de la désorientation, parfois du désespoir. Le cœur est fracassé. Rûmî dit : « L'entrée est la rupture. »</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0 text-sm font-bold">02</span>
          <span className="text-lg leading-relaxed"><strong>La confrontation</strong> — Le nafs se débat. Il cherche des coupables, des explications, des échappatoires. Il refuse d'accepter. C'est la phase de rébellion — nécessaire, car c'est dans cette rébellion que le cœur commence à toucher ses propres limites.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0 text-sm font-bold">03</span>
          <span className="text-lg leading-relaxed"><strong>l'abandon</strong> — Quand le nafs est épuisé de lutter, quand il n'a plus d'énergie pour nier, blâmer ou fuir, survient un moment de grâce : le <em>taslîm</em>, la reddition. Ce n'est pas de la résignation — c'est un acte de confiance radicale : « Ô Dieu, je ne comprends pas, mais je m'abandonne à Toi. »</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gold mt-1 flex-shrink-0 text-sm font-bold">04</span>
          <span className="text-lg leading-relaxed"><strong>Le dévoilement</strong> — Et dans cet abandon, quelque chose se lève. Un voile tombe. Le cœur perçoit, même fugitivement, que la Présence divine était là — dans la blessure elle-même. Non pas « malgré » la douleur, mais <em>à travers</em> elle.</span>
        </li>
      </ul>

      <blockquote className="sufi-quote mb-6">
        <p>
          J'ai cherché Dieu dans les mosquées — je ne L'ai pas trouvé. J'ai cherché Dieu dans les livres — je ne L'ai pas trouvé. J'ai cherché Dieu sur les montagnes — je ne L'ai pas trouvé. Puis je L'ai cherché dans mon cœur brisé — et c'est là que je L'ai trouvé.
        </p>
        <cite className="attribution">Inspiré du témoignage de Rabî'a al-'Adawiyya</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        La transmutation n'efface pas la blessure — elle change son <em>sens</em>. La cicatrice reste, mais elle n'est plus une marque de destruction : elle devient un <strong>sceau</strong>, la signature de l'expérience par laquelle le cœur a été brisé et, dans ce brisement, a été ouvert à une dimension qu'il ne connaissait pas. Comme le dit Ibn 'Arabî : « La connaissance de Dieu ne vient pas par l'intellect — elle vient par l'épreuve de l'âme. »
      </p>
    </>
  );
}

export function Partie5Content() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Le mystère du cœur brisé
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Il est un enseignement dans la tradition soufi qui peut paraître déconcertant au premier abord, mais qui, quand on le médite, ouvre des portes immenses : <strong>le cœur brisé est le véritable sanctuaire de l'Amour divin</strong>. Non pas le cœur intact — celui qui n'a jamais souffert — mais précisément le cœur qui a été fracassé, celui qui a perdu ses illusions, ses certitudes, ses attachements, celui qui a été réduit à sa nudité la plus absolue.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ne cherche pas l'eau dans le rocher — cherche-la dans la fissure. Car c'est par la fissure que la source jaillit.
        </p>
        <cite className="attribution">Jalâl al-Dîn Rûmî — Masnavî, Livre I</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        L'enseignement de Rûmî : la fissure comme grâce
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Rûmî, dans un passage devenu célèbre, utilise une image saisissante : celle de la maison étanche et de la maison brisée. La maison étanche ne laisse rien entrer — ni la lumière, ni l'air, ni la pluie du ciel. Elle est protégée, mais elle est aussi <em>étouffante</em>. La maison dont le toit est fendu laisse entrer la pluie — certes — mais elle laisse aussi entrer le soleil, les étoiles, et le souffle du vent. Et Rûmî conclut : « Laisse-toi briser. Le tout-puissant entrera par la brèche. »
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Ce que Rûmî enseigne ici n'est pas un appel au masochisme ni à la passivité devant la souffrance. C'est un <strong>changement radical de perspective</strong>. La blessure n'est pas le problème — c'est la solution que nous ne voulions pas. Elle est l'ouverture que notre sécurité, notre confort, nos défenses, nous avaient interdite.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Hallâj : le martyre de l'amour
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Il est impossible de parler du cœur brisé dans la tradition soufie sans évoquer <strong>Mansûr al-Hallâj</strong> (858-922). Condamné à mort pour avoir proclamé <em>« Anâ al-Haqq »</em> — « Je suis la Vérité » —, Hallâj fut supplicié à Bagdad dans des circonstances atroces. Et pourtant, son enseignement central est précisément ceci : l'amour de Dieu consume tout — le corps, le cœur, l'identité — jusqu'à ce qu'il ne reste que Lui.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Tue-moi, ô mes bien-aimés, car dans ma mort est ma vie. Ma vie est vraie, mais ma mort est plus vraie encore. Car dans ma mort, je cesse d'être « moi » — et je deviens Lui.
        </p>
        <cite className="attribution">Mansûr al-Hallâj — Dîwân</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Hallâj n'a pas cherché la mort — il a cherché l'Amour. Et l'Amour l'a conduit là où aucun intellect n'aurait osé aller : au point où le « je » disparaît dans la mer de l'Unique. Son cri — <em>Anâ al-Haqq</em> — n'était pas de l'orgueil mais de l'extase : le cri de celui qui, ayant perdu tout « moi », ne trouve plus en lui que la Présence divine. Ce n'est pas Hallâj qui parle — c'est Dieu qui parle à travers Hallâj.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Rabî'a : l'amour sans condition
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Rabî'a al-'Adawiyya (717-801), la grande mystique de Bassora, offre un autre visage du cœur brisé. Elle ne parle pas de destruction ni de supplice — elle parle d'un <strong>amour si total</strong> qu'il ne demande rien en retour. Sa prière la plus célèbre commence ainsi : « Ô Dieu, si je T'adore par peur de l'Enfer, brûle-moi dans l'Enfer. Si je T'adore par espoir du Paradis, exclus-moi du Paradis. Mais si je T'adore pour Toi seul — ne me refuse pas Ta Face. »
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          L'amour vrai ne demande pas de sécurité. Il ne demande pas de garanties. Il demande seulement : que je sois Présent — et que Toi, Tu sois Présent — et que la Présence soit assez.
        </p>
        <cite className="attribution">Rabî'a al-'Adawiyya — Inspiré de ses enseignements</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Le cœur brisé, chez Rabî'a, n'est pas le cœur détruit — c'est le cœur qui a cessé de <em>conditionner</em> son amour. Il ne dit plus « je t'aime si... » — il dit simplement « je t'aime ». Et cette simplicité, cette nudité de l'amour, est, selon les maîtres, la condition même de la rencontre avec le Divin.
      </p>
    </>
  );
}

export function Partie6Content() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Fanâ' : l'effacement du moi blessé
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Si la guérison, dans ce traité, n'est pas celle de la psychologie conventionnelle, c'est parce que la perspective soufie propose une définition radicalement différente du « guérir ». Guérir, dans la sagesse du Tawhîd, ce n'est pas restaurer un moi endommagé à son état antérieur. C'est <strong>effacer le moi blessé</strong> lui-même pour laisser place à la Présence divine. Ce processus porte un nom en soufisme : <em>al-fanâ'</em>, l'extinction.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ne cherche pas à réparer le miroir — cherche à enlever la poussière. Car le miroir n'est pas brisé — il est seulement couvert. Et ce qui le couvre n'est pas la poussière du dehors, mais les voiles de ton propre « je ».
        </p>
        <cite className="attribution">Abû Yazîd al-Bistâmî — Inspiré de ses enseignements</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Non la disparition — la transparence
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        <em>Al-fanâ'</em> est souvent mal compris comme annihilation, destruction, néantisation du soi. Les maîtres sont clairs : il ne s'agit pas de cesser d'exister. Le corps reste, les pensées restent, les émotions restent. Ce qui cesse, c'est le <strong>sens du « moi » comme centre séparé</strong>. Le cœur passe d'être un « je » qui souffre à être un <em>miroir</em> qui reflète. Il ne disparaît pas — il devient <strong>transparent</strong>. Et dans cette transparence, c'est la Lumière divine qui brille à travers lui.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Ibn 'Arabî, dans ses <em>Fusûs al-Hikam</em>, utilise l'image de la fenêtre. La fenêtre n'existe pas pour elle-même — elle existe pour laisser passer la lumière. Une fenêtre opaque empêche la lumière de passer. Une fenêtre transparente permet à la lumière de traverser. Et quand la lumière passe, tu ne vois plus la fenêtre — tu vois <em>à travers</em> elle. C'est cela, <em>al-fanâ'</em> : devenir si transparent que le regard de Dieu passe à travers toi sans être retenu par aucun voile.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Le serviteur parfait est celui qui a disparu en Dieu de telle sorte que rien ne reste de lui — et que Dieu apparaît à travers lui comme le soleil à travers le cristal.
        </p>
        <cite className="attribution">Muhyî al-Dîn Ibn 'Arabî — Fusûs al-Hikam</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        Baqâ' : subsister en Dieu
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        <em>Al-fanâ'</em> n'est pas la fin du voyage — il est son milieu. Après l'extinction vient <em>al-baqâ'</em>, la subsistance. Le cœur, ayant perdu son ego, ne devient pas néant — il <strong>subsiste en Dieu</strong>. C'est-à-dire qu'il continue à vivre, à aimer, à agir, mais plus par sa propre volonté que par la volonté divine qui coule à travers lui. Rûmî décrit cette état comme celui de la flûte de roseau : elle n'est pas vide — elle est <em>vidée</em>, et c'est cette vidée même qui permet au souffle du musicien de devenir mélodie.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Écoute la flûte, comment elle raconte sa plainte. Elle dit : « On m'a séparée du roseau, et depuis, mon chant a fait pleurer hommes et femmes. Je veux un sein déchiré pour que tu saches ce que c'est que la séparation. »
        </p>
        <cite className="attribution">Jalâl al-Dîn Rûmî — Masnavî, Livre I</cite>
      </blockquote>

      <h3 className="text-xl font-semibold mb-4 text-sufi-teal dark:text-gold-light font-[family-name:var(--font-playfair)]">
        La guérison comme retour au Tawhîd
      </h3>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Au terme de ce voyage, la « guérison » que propose le soufisme n'est pas le retour à un état antérieur — comme si la blessure n'avait jamais existé. Elle est le <strong>retour à l'Unité</strong> : la reconnaissance que le moi blessé n'était qu'une apparence, que la douleur n'était qu'un voile, et que Celui qui était cherché à travers mille détours était toujours là, attendant au centre du cœur.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Le Tawhîd — l'unicité absolue — n'est pas seulement une doctrine théologique. C'est une <strong>expérience</strong> : l'expérience que tout ce qui existe procède de l'Unique, que la séparation entre le créateur et la créature n'est qu'apparence, et que la blessure elle-même, regardée avec les yeux du cœur, est une manifestation de la miséricorde divine. Car si Dieu est <em>al-Wâhid</em>, l'Unique, alors rien n'est vraiment séparé de Lui — pas même la souffrance.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Tu t'es fatigué à chercher la guérison à l'extérieur. Mais la guérison est venue du dedans — non pas parce que tu t'es réparé, mais parce que tu as cessé de croire que tu étais brisé. Le miroir n'est jamais brisé — il est seulement couvert de poussière.
        </p>
        <cite className="attribution">Inspiration libre de la tradition soufie</cite>
      </blockquote>
    </>
  );
}

export function ConclusionContent() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Nous voici parvenus au terme de ce traité — non pas d'un enseignement, mais d'un <strong>partage</strong>. Car aucune parole, si belle soit-elle, ne peut remplacer l'expérience vécue. Ce que ces pages ont tenté de suggérer, c'est un regard : un regard différent sur les blessures, les épreuves, les passages douloureux de l'existence.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Tu es une goutte dans l'Océan — et l'Océan est en toi. Ne pleure pas d'être séparé de l'eau : tu es l'eau elle-même qui pleure d'avoir oublié qu'elle est la mer.
        </p>
        <cite className="attribution">Jalâl al-Dîn Rûmî — Masnavî</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        La fissure n'est pas un défaut — c'est une <strong>porte</strong>. La blessure n'est pas une fin — c'est un <strong>commencement</strong>. Le cœur brisé n'est pas un cœur détruit — c'est un cœur qui, ayant perdu ses murs, peut enfin contenir l'immensité de la Présence.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Mais soyons honnêtes : ce regard ne s'adopte pas par intellectualité. On ne « comprend pas » le Tawhîd — on le <em>vit</em>. Et le vivre, ce n'est pas ajouter une croyance à ses croyances. C'est, au contraire, <strong>déposer</strong> — déposer les armes, déposer les rancunes, déposer le besoin de comprendre, déposer le « moi » qui s'accroche désespérément à son récit de victime.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Les maîtres qui nous ont précédés ne nous demandent pas de les croire. Ils nous demandent de <em>vérifier</em>. Goûte la prière, disent-ils. Goûte le silence du cœur. Goûte l'abandon entre tes mains. Et vois par toi-même si ce que nous disons est vrai ou faux. Car dans la tradition soufie, la connaissance n'est pas transmise — elle est <em>goûtée</em>. On l'appelle <em>dhawq</em> : le goût spirituel.
      </p>

      <blockquote className="sufi-quote mb-6">
        <p>
          Ô voyageur, tu cherches la Source depuis si longtemps. Mais la Source n'est pas devant toi — elle est en toi. L'eau que tu cherches coule depuis toujours dans tes propres veines. Seul ton agitement l'empêche de se voir.
        </p>
        <cite className="attribution">Inspiré de l'enseignement de Muhyî al-Dîn Ibn 'Arabî</cite>
      </blockquote>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Que ce traité soit, pour chacun de ses lecteurs, ce qu'il peut être : une étincelle, un murmure, une main posée sur l'épaule. Non pas une réponse — car les questions essentielles ne se répondent pas, elles se <em>vivent</em>. Non pas une solution — car les blessures ne se « résolvent » pas, elles se transmutent. Mais un <strong>accompagnement</strong> : la certitude, transmise par mille ans de sagesse, que la fissure dans ton cœur n'est pas la fin de la beauté — elle en est la condition.
      </p>

      <p className="text-lg leading-relaxed mb-6" style={{ textIndent: "2rem" }}>
        Que la Paix soit sur celui qui lit ces mots. Qu'il entende, derrière les mots, le murmure du Bien-Aimé qui, depuis toujours, lui dit : <em>« Je suis plus près de toi que ta veine jugulaire. »</em> (Coran, 50:16)
      </p>

      <p className="text-center text-gold mt-8 font-[family-name:var(--font-playfair)] text-2xl">
        ✦ Subhân Allâh wa bi-hamdihi, Subhân Allâh al-'Azîm ✦
      </p>
    </>
  );
}

export function AnthologieContent() {
  const citations: { text: string; author: string; source?: string; comment?: string }[] = [
    {
      text: "Ne crois pas que la tristesse est indicible. Elle est la langue secrète de l'Amour. Chaque larme que tu verses est une prière que ton cœur ne sait pas formuler.",
      author: "Jalâl al-Dîn Rûmî",
      source: "Dîwân-e Shams-e Tabrîzî",
      comment: "Rûmî inverse notre rapport aux larmes : loin d'être signe de faiblesse, elles deviennent le langage le plus authentique du cœur — une prière que la bouche ne sait pas prononcer.",
    },
    {
      text: "Mon cœur est devenu capable de toutes les formes : il est pâturage pour les gazelles et couvent pour les moines, temple pour les idoles et Ka'ba pour le pèlerin. Il est les tables de la Torah et le livre du Coran. Je suis la religion de l'Amour — où que se tourne mon Bien-Aimé, là est ma religion et ma foi.",
      author: "Muhyî al-Dîn Ibn 'Arabî",
      source: "Tarjumân al-Ashwâq (L'Interprète des désirs)",
      comment: "Ce vers est l'un des plus célèbres de la poésie mystique islamique. Ibn 'Arabî y exprime l'universalité du cœur réalisé : dépassant toutes les formes religieuses, il ne reconnaît qu'une seule direction — celle de l'Amour.",
    },
    {
      text: "Tuez-moi, mes bien-aimés, car dans mon meurtre est ma vie. Ma vie est en mourant — et ma mort est ma résurrection véritable.",
      author: "Mansûr al-Hallâj",
      source: "Dîwân",
      comment: "Le paradoxe de Hallâj exprime l'essentiel du fanâ' : mourir au moi pour naître à la Présence. Sa mort physique fut le sceau de sa réalisation spirituelle.",
    },
    {
      text: "Ô Dieu, si je T'adore par peur de l'Enfer, brûle-moi dans l'Enfer. Si je T'adore par espoir du Paradis, exclus-moi du Paradis. Mais si je T'adore pour Toi seul — ne me refuse pas Ta Face éternelle.",
      author: "Rabî'a al-'Adawiyya",
      source: "Tradition orale soufie",
      comment: "Rabî'a, la grande mystique de Bassora, pose ici la condition de l'amour authentique : la pureté de l'intention. L'amour vrai ne négocie pas — il ne demande rien en retour.",
    },
    {
      text: "L'oiseau qui fuit la cage et l'oiseau qui reste en cage sont tous deux prisonniers — l'un par la peur, l'autre par l'attachement. Seul l'oiseau qui vole en chantant est libre, car il ne fuit rien et ne désire rien.",
      author: "Farîd al-Dîn 'Attâr",
      source: "Le Cantique des oiseaux (Mantiqu al-Tayr)",
      comment: "La liberté spirituelle, selon 'Attâr, n'est ni dans la fuite ni dans l'immobilité — elle est dans le chant : l'acte de louer sans chercher à fuir ni à retenir.",
    },
    {
      text: "Celui qui ne se connaît pas lui-même ne connaît pas son Seigneur. Car la connaissance de soi est la porte de la connaissance de Dieu.",
      author: "Hadith prophétique (attribué)",
      comment: "Ce hadith fondamental pose que l'introspection n'est pas narcissisme — c'est un chemin vers le divin. Se connaître, c'est reconnaître en soi la trace de l'Unique.",
    },
    {
      text: "Le silence est le langage de Dieu ; tout le reste est mauvaise traduction. Quand tu tais ton cœur, Il parle. Quand tu parles ton cœur, Il se tait.",
      author: "Inspiré de l'enseignement de Bayazîd Bistâmî",
      comment: "Le silence, dans la tradition soufie, n'est pas absence — c'est écoute. Taire le brouillard du mental pour entendre la clarté de la Présence.",
    },
    {
      text: "Celui qui se courbe devant l'épreuve est comme l'arbre qui se courbe sous la neige : quand la neige fond, il se redresse plus fort qu'avant. Car l'épreuve n'est pas un poids — c'est un entraînement.",
      author: "Inspiré de l'enseignement d'Abû Sa'îd ibn Abî al-Khayr",
      comment: "La résilience soufie n'est pas de l'endurance stoïcienne — c'est une souplesse consciente. L'arbre ne lutte pas contre la neige ; il l'accepte et la laisse fondre.",
    },
  ];

  return (
    <>
      <p className="text-lg leading-relaxed mb-8" style={{ textIndent: "2rem" }}>
        Cette anthologie rassemble des paroles de maîtres soufis, ancêtres et contemporains, qui ont chacun, à leur manière, exprimé le mystère de la blessure transmutée. Chaque citation est accompagnée d'un bref commentaire pour en éclairer le sens et le situer dans la tradition.
      </p>

      <div className="space-y-8">
        {citations.map((c, i) => (
          <article key={i} className="anthology-card">
            <blockquote className="sufi-quote mb-4 !border-l-0 !p-0 !bg-transparent before:hidden">
              <p className="text-lg leading-relaxed italic">
                « {c.text} »
              </p>
              <cite className="attribution">
                {c.author}{c.source ? ` — ${c.source}` : ''}
              </cite>
            </blockquote>
            {c.comment && (
              <p className="text-sm leading-relaxed text-muted-foreground mt-3 italic">
                {c.comment}
              </p>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
