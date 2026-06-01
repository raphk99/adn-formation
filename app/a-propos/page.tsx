import Link from "next/link";

const valeurs = [
  {
    emoji: "🎯",
    titre: "Accessibilité",
    desc: "Nos formations sont conçues pour être accessibles à tous, y compris aux travailleurs peu qualifiés ou en situation de fragilité professionnelle.",
  },
  {
    emoji: "🛡️",
    titre: "Sécurité avant tout",
    desc: "Chaque formation que nous dispensons vise à réduire les accidents du travail et à protéger les travailleurs sur les chantiers.",
  },
  {
    emoji: "🏆",
    titre: "Excellence pédagogique",
    desc: "Notre certification Qualiopi garantit la qualité de nos méthodes et la pertinence de nos contenus pédagogiques.",
  },
  {
    emoji: "🤝",
    titre: "Accompagnement personnalisé",
    desc: "Chaque stagiaire est suivi individuellement. Nous adaptons notre pédagogie à votre niveau et à vos besoins.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">À propos d'ADN Formation</h1>
          <p className="text-blue-100 text-lg">
            Un centre de formation engagé pour la sécurité et l'insertion
            professionnelle dans le monde du BTP.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              Notre mission
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              ADN Formation est né d'un constat simple : le secteur du BTP est
              l'un des plus accidentogènes de France, et les travailleurs les
              moins qualifiés sont les plus exposés. Pourtant, beaucoup n'ont
              pas accès aux formations de sécurité, faute de temps, de moyens
              ou d'information.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Notre centre de formation a été créé pour changer ça. Nous
              proposons des formations certifiantes, finançables à 100%, et
              accessibles même aux profils sans aucune qualification. Qu'il
              s'agisse du SST, du PRAP, de l'habilitation électrique ou de nos
              modules à distance, chaque formation vise un objectif concret :
              vous rendre plus compétent, plus employable et plus en sécurité.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nous travaillons en étroite collaboration avec ADN France
              Insertion, notre branche emploi, pour vous proposer un parcours
              complet : formation d'abord, emploi ensuite.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 space-y-4">
            <div className="text-center mb-6">
              <div className="text-5xl font-black text-[var(--color-primary)] mb-1">
                4+
              </div>
              <div className="text-slate-500 text-sm">formations certifiantes</div>
            </div>
            <div className="text-center mb-6">
              <div className="text-5xl font-black text-[var(--color-primary)] mb-1">
                100%
              </div>
              <div className="text-slate-500 text-sm">financement possible</div>
            </div>
            <div className="text-center">
              <div className="bg-[var(--color-accent)] text-slate-900 font-black px-6 py-3 rounded-xl inline-block">
                🏆 Certifié Qualiopi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">
            Nos valeurs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div
                key={v.titre}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-black text-slate-900 text-lg mb-2">
                  {v.titre}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lien ADN Insertion */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-[var(--color-primary)] rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-black mb-3">
            Le groupe ADN France
          </h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            ADN Formation fait partie du groupe ADN France, aux côtés d'ADN
            France Insertion, notre plateforme d'offres d'emploi dédiée aux
            métiers du BTP, de la logistique et de la manutention. Ensemble,
            nous vous accompagnons de la formation à l'emploi.
          </p>
          <a
            href="https://adn-insertion.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-accent)] text-slate-900 font-black px-8 py-3 rounded-xl hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Voir ADN France Insertion ↗
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 px-6 text-center">
        <Link
          href="/contact"
          className="inline-block bg-[var(--color-primary)] text-white font-bold px-10 py-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Contactez-nous
        </Link>
      </section>
    </>
  );
}
