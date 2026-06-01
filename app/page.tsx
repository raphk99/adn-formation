import Link from "next/link";

const formations = [
  {
    id: "sst",
    emoji: "🚑",
    titre: "SST",
    sousTitre: "Sauveteur Secouriste du Travail",
    description:
      "Portez secours sur le lieu de travail. Formation obligatoire et reconnue, finançable CPF.",
    duree: "14h",
    modalite: "Présentiel",
    niveau: "Tout public",
  },
  {
    id: "prap",
    emoji: "🏋️",
    titre: "PRAP",
    sousTitre: "Prévention des Risques liés à l'Activité Physique",
    description:
      "Prévenez les troubles musculo-squelettiques. Idéal pour les métiers de manutention et BTP.",
    duree: "14h",
    modalite: "Présentiel / Distanciel",
    niveau: "Tout public",
  },
  {
    id: "habilitation",
    emoji: "⚡",
    titre: "Habilitation électrique",
    sousTitre: "NF C18-510 — Niveaux B0, H0, BS, BE...",
    description:
      "Travaillez en sécurité à proximité d'installations électriques. Obligatoire pour de nombreux postes BTP.",
    duree: "7h à 21h",
    modalite: "Présentiel / Distanciel",
    niveau: "Selon niveau",
  },
  {
    id: "distanciel",
    emoji: "💻",
    titre: "Formations à distance",
    sousTitre: "Prévention & sécurité en e-learning",
    description:
      "Accédez à nos formations depuis chez vous. Spécialement conçues pour les travailleurs peu qualifiés qui souhaitent progresser.",
    duree: "Variable",
    modalite: "100% distanciel",
    niveau: "Débutant à intermédiaire",
  },
];

const chiffres = [
  { valeur: "95%", label: "Taux de satisfaction" },
  { valeur: "4", label: "Formations certifiantes" },
  { valeur: "100%", label: "Financement possible" },
  { valeur: "Qualiopi", label: "Certifié" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              ✓ Certifié Qualiopi — Finançable CPF
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Formez-vous aux métiers du{" "}
              <span className="text-[var(--color-accent)]">BTP</span> en toute
              sécurité
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              ADN Formation est un centre de formation professionnelle
              spécialisé dans la prévention des risques et la sécurité au
              travail. Nos formations sont accessibles à tous, finançables et
              reconnues par l'État.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/formations"
                className="bg-[var(--color-accent)] text-slate-900 font-bold px-8 py-4 rounded-xl text-base hover:bg-[var(--color-accent-dark)] transition-colors text-center"
              >
                Voir toutes nos formations
              </Link>
              <Link
                href="/financement"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-colors text-center"
              >
                Comment financer ?
              </Link>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {chiffres.map((c) => (
              <div
                key={c.label}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl font-black text-[var(--color-accent)] mb-1">
                  {c.valeur}
                </div>
                <div className="text-blue-200 text-sm font-medium">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualiopi banner */}
      <section className="bg-[var(--color-accent)] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-900">
          <span className="font-black text-sm">🏆 Certifié Qualiopi</span>
          <span className="hidden sm:block text-slate-700">|</span>
          <span className="text-sm font-medium">
            Notre certification garantit la qualité de nos formations et vous
            permet d'accéder aux financements publics (CPF, France Travail, OPCO)
          </span>
        </div>
      </section>

      {/* Formations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              Nos formations
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Des formations reconnues, adaptées aux travailleurs du BTP et de
              la logistique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map((f) => (
              <Link
                key={f.id}
                href={`/formations#${f.id}`}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[var(--color-primary-light)] transition-all"
              >
                <div className="text-4xl mb-4">{f.emoji}</div>
                <div className="text-[var(--color-primary)] font-black text-lg mb-1">
                  {f.titre}
                </div>
                <div className="text-slate-500 text-xs font-semibold mb-3">
                  {f.sousTitre}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {f.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded-full">
                    🕐 {f.duree}
                  </span>
                  <span className="bg-blue-50 text-[var(--color-primary)] text-xs font-semibold px-2 py-1 rounded-full">
                    {f.modalite}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/formations"
              className="inline-block bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Voir le catalogue complet →
            </Link>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Votre formation peut être{" "}
            <span className="text-[var(--color-primary)]">100% financée</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Nos formations sont éligibles à plusieurs dispositifs de financement.
            Pas de reste à charge dans la majorité des cas.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                logo: "📱",
                nom: "CPF",
                desc: "Compte Personnel de Formation — utilisez vos droits accumulés sur Mon Compte Formation",
              },
              {
                logo: "🏛️",
                nom: "France Travail",
                desc: "Aide Individuelle à la Formation (AIF) pour les demandeurs d'emploi inscrits",
              },
              {
                logo: "🏢",
                nom: "OPCO",
                desc: "Prise en charge par votre opérateur de compétences si vous êtes salarié",
              },
            ].map((f) => (
              <div
                key={f.nom}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left"
              >
                <div className="text-3xl mb-3">{f.logo}</div>
                <div className="font-black text-slate-900 text-lg mb-2">
                  {f.nom}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/financement"
            className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            En savoir plus sur le financement
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary-dark)] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Prêt à vous former ?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Contactez-nous pour connaître les prochaines sessions, vérifier
            votre éligibilité au financement et vous inscrire.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--color-accent)] text-slate-900 font-black px-10 py-4 rounded-xl text-lg hover:bg-[var(--color-accent-dark)] transition-colors inline-block"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
