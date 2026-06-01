import Link from "next/link";

const dispositifs = [
  {
    id: "cpf",
    emoji: "📱",
    nom: "CPF — Compte Personnel de Formation",
    cible: "Salariés et demandeurs d'emploi",
    description:
      "Le Compte Personnel de Formation vous permet d'utiliser vos droits à la formation accumulés tout au long de votre carrière. Chaque salarié cumule 500 € par an (jusqu'à 5 000 €). Via la plateforme Mon Compte Formation, vous pouvez financer vos formations directement.",
    etapes: [
      "Créez votre compte sur moncompteformation.gouv.fr",
      "Recherchez notre formation parmi notre catalogue référencé",
      "Vérifiez votre solde CPF disponible",
      "Inscrivez-vous directement en ligne",
    ],
    lien: "https://www.moncompteformation.gouv.fr",
    labelLien: "Accéder à Mon Compte Formation",
    note: "Nos formations SST et PRAP sont éligibles au CPF.",
  },
  {
    id: "france-travail",
    emoji: "🏛️",
    nom: "France Travail — Aide Individuelle à la Formation (AIF)",
    cible: "Demandeurs d'emploi inscrits",
    description:
      "Si vous êtes inscrit à France Travail (ex Pôle Emploi) et que votre CPF ne couvre pas la totalité du coût, l'AIF peut compléter ou prendre en charge intégralement votre formation. Votre conseiller France Travail est votre interlocuteur principal.",
    etapes: [
      "Parlez de votre projet de formation à votre conseiller France Travail",
      "Obtenez l'accord de prise en charge (AIF)",
      "Inscrivez-vous à la session avec notre équipe",
      "Suivez votre formation — aucun frais à avancer",
    ],
    lien: "https://www.francetravail.fr",
    labelLien: "Site France Travail",
    note: "Dans la plupart des cas, les demandeurs d'emploi n'ont rien à payer.",
  },
  {
    id: "opco",
    emoji: "🏢",
    nom: "OPCO — Opérateur de Compétences",
    cible: "Salariés en entreprise",
    description:
      "Si vous êtes salarié, votre entreprise peut faire financer votre formation par son OPCO (Opérateur de Compétences, ex-OPCA). Selon votre secteur d'activité (construction, travaux publics, etc.), différents OPCO sont disponibles : Constructys pour le BTP, AKTO pour la logistique.",
    etapes: [
      "Identifiez votre OPCO avec votre service RH ou votre employeur",
      "Faites valider votre demande de formation en interne",
      "Nous déposons le dossier de prise en charge pour vous",
      "La formation est financée sans avance de frais pour l'entreprise",
    ],
    lien: "https://www.constructys.fr",
    labelLien: "Constructys — OPCO du BTP",
    note: "Nous accompagnons les entreprises dans les démarches administratives.",
  },
];

export default function FinancementPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">Financer sa formation</h1>
          <p className="text-blue-100 text-lg">
            Nos formations sont éligibles à plusieurs dispositifs de
            financement. Dans la grande majorité des cas, vous n'avez rien à
            payer de votre poche.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <h2 className="font-black text-slate-900 text-xl mb-2">
              Certifié Qualiopi
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Notre certification Qualiopi est le sésame qui nous permet
              d'accéder à tous les financements publics et mutualisés. Elle
              atteste de la qualité de notre processus de formation et est
              vérifiée par un organisme accrédité.
            </p>
          </div>
        </div>
      </section>

      {/* Dispositifs */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-black text-slate-900 text-center mb-8">
            Les dispositifs disponibles
          </h2>

          {dispositifs.map((d) => (
            <div
              key={d.id}
              id={d.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="bg-slate-50 border-b border-slate-100 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{d.emoji}</span>
                  <h3 className="text-xl font-black text-slate-900">{d.nom}</h3>
                </div>
                <span className="text-xs bg-[var(--color-primary)] text-white font-bold px-3 py-1 rounded-full w-fit">
                  {d.cible}
                </span>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {d.description}
                  </p>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-green-800 font-medium">
                    💡 {d.note}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">
                    Comment procéder
                  </h4>
                  <ol className="space-y-3">
                    {d.etapes.map((e, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <span className="bg-[var(--color-primary)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ol>

                  <a
                    href={d.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    {d.labelLien} ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            On vous aide à trouver votre financement
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Notre équipe vous accompagne dans toutes les démarches
            administratives. Contactez-nous pour une étude de votre dossier.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--color-accent)] text-slate-900 font-black px-10 py-4 rounded-xl text-lg hover:bg-[var(--color-accent-dark)] transition-colors inline-block"
          >
            Étudier mon financement
          </Link>
        </div>
      </section>
    </>
  );
}
