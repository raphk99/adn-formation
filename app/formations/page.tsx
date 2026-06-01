import Link from "next/link";

const formations = [
  {
    id: "sst",
    emoji: "🚑",
    titre: "SST — Sauveteur Secouriste du Travail",
    description:
      "La formation SST vous permet d'intervenir efficacement face à une situation d'accident sur votre lieu de travail, d'alerter les secours et de pratiquer les gestes de premiers secours. C'est une formation reconnue nationalement, souvent exigée sur les chantiers BTP.",
    objectifs: [
      "Protéger les victimes et sécuriser la zone",
      "Alerter les secours de manière efficace",
      "Réaliser les gestes de premiers secours adaptés",
      "Utiliser un défibrillateur automatique (DAE)",
    ],
    duree: "14 heures",
    modalite: "Présentiel",
    effectif: "4 à 10 stagiaires",
    sanction: "Certificat SST délivré par l'INRS",
    financement: ["CPF", "France Travail", "OPCO"],
    recyclage: "Recyclage tous les 24 mois",
    public: "Tout public, aucun prérequis",
  },
  {
    id: "prap",
    emoji: "🏋️",
    titre: "PRAP — Prévention des Risques liés à l'Activité Physique",
    description:
      "La formation PRAP permet de comprendre et prévenir les risques liés aux manutentions manuelles et aux postures de travail. Elle est particulièrement adaptée aux travailleurs du BTP, de la logistique et de la manutention qui souffrent de douleurs musculo-squelettiques.",
    objectifs: [
      "Identifier les risques liés à l'activité physique",
      "Analyser sa propre situation de travail",
      "Proposer des améliorations ergonomiques",
      "Adopter les bons gestes et postures au quotidien",
    ],
    duree: "14 heures",
    modalite: "Présentiel ou mixte (présentiel + distanciel)",
    effectif: "4 à 12 stagiaires",
    sanction: "Certificat PRAP délivré par l'INRS",
    financement: ["CPF", "France Travail", "OPCO"],
    recyclage: "Recyclage tous les 24 mois",
    public: "Tout public, aucun prérequis",
  },
  {
    id: "habilitation",
    emoji: "⚡",
    titre: "Habilitation électrique — NF C18-510",
    description:
      "L'habilitation électrique est obligatoire pour tout travailleur amené à effectuer des travaux ou à intervenir à proximité d'installations électriques. Notre formation couvre les différents niveaux : B0/H0 (non-électricien), BS (chargé d'intervention élémentaire), BR, B1, B2 et plus.",
    objectifs: [
      "Comprendre les risques électriques et leurs conséquences",
      "Connaître les règles de prévention et les procédures de consignation",
      "Identifier son niveau d'habilitation et ses limites",
      "Obtenir l'habilitation correspondant à son poste",
    ],
    duree: "7h (B0/H0) à 21h (niveaux supérieurs)",
    modalite: "Présentiel ou distanciel (théorie) + évaluation pratique",
    effectif: "4 à 12 stagiaires",
    sanction: "Attestation de formation — habilitation délivrée par l'employeur",
    financement: ["CPF", "France Travail", "OPCO"],
    recyclage: "Recyclage recommandé tous les 3 ans",
    public: "Tout travailleur exposé aux risques électriques",
  },
  {
    id: "distanciel",
    emoji: "💻",
    titre: "Formations à distance — Prévention & Sécurité",
    description:
      "Notre catalogue de formations 100% en ligne est conçu pour les travailleurs peu qualifiés qui souhaitent se former à leur rythme, sans se déplacer. Les modules couvrent les fondamentaux de la sécurité au travail, les risques BTP, et les obligations légales.",
    objectifs: [
      "Acquérir les bases de la prévention des risques professionnels",
      "Comprendre les risques spécifiques au BTP",
      "Se préparer aux formations présentielle (SST, PRAP, habilitation)",
      "Progresser à son rythme, depuis n'importe où",
    ],
    duree: "Variable selon le module (2h à 7h)",
    modalite: "100% distanciel — accès depuis ordinateur ou téléphone",
    effectif: "Individuel",
    sanction: "Attestation de suivi de formation",
    financement: ["CPF", "France Travail"],
    recyclage: "Mise à jour continue des contenus",
    public: "Débutants, travailleurs peu qualifiés, tout niveau",
  },
];

export default function FormationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">Nos formations</h1>
          <p className="text-blue-100 text-lg">
            Des formations certifiantes, reconnues par l'État, accessibles à
            tous et finançables. Choisissez votre formation et lancez-vous.
          </p>
        </div>
      </section>

      {/* Formations list */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {formations.map((f) => (
            <div
              key={f.id}
              id={f.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="bg-slate-50 border-b border-slate-100 px-8 py-6 flex items-center gap-4">
                <span className="text-4xl">{f.emoji}</span>
                <h2 className="text-2xl font-black text-slate-900">{f.titre}</h2>
              </div>

              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-slate-600 leading-relaxed">{f.description}</p>

                  <div>
                    <h3 className="font-bold text-slate-900 mb-3">
                      Objectifs pédagogiques
                    </h3>
                    <ul className="space-y-2">
                      {f.objectifs.map((o) => (
                        <li key={o} className="flex gap-3 text-sm text-slate-600">
                          <span className="text-[var(--color-success)] font-bold mt-0.5">✓</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-5 space-y-3">
                    <InfoRow label="Durée" value={f.duree} />
                    <InfoRow label="Modalité" value={f.modalite} />
                    <InfoRow label="Effectif" value={f.effectif} />
                    <InfoRow label="Public visé" value={f.public} />
                    <InfoRow label="Renouvellement" value={f.recyclage} />
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">
                      Financement possible
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {f.financement.map((fin) => (
                        <span
                          key={fin}
                          className="bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full"
                        >
                          {fin}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[var(--color-accent)]/10 rounded-xl p-4 border border-[var(--color-accent)]/30">
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">
                      Sanction de formation
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      {f.sanction}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block bg-[var(--color-primary)] text-white font-bold text-sm text-center px-6 py-3 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    S'inscrire à cette formation →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Une question sur nos formations ?
          </h2>
          <p className="text-slate-500 mb-6">
            Notre équipe est disponible pour vous orienter vers la formation
            adaptée à votre situation et vérifier votre éligibilité au
            financement.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
        {label}
      </div>
      <div className="text-sm text-slate-700 font-medium">{value}</div>
    </div>
  );
}
