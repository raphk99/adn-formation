export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">Nous contacter</h1>
          <p className="text-blue-100 text-lg">
            Une question sur nos formations, le financement, ou votre
            inscription ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">
              Envoyer un message
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Marie"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="marie.dupont@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="06 00 00 00 00"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Formation concernée
                </label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors text-slate-700">
                  <option value="">Sélectionner une formation</option>
                  <option value="sst">SST — Sauveteur Secouriste du Travail</option>
                  <option value="prap">PRAP — Prévention des Risques liés à l'Activité Physique</option>
                  <option value="habilitation">Habilitation électrique</option>
                  <option value="distanciel">Formation à distance</option>
                  <option value="autre">Autre / Je ne sais pas encore</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Votre situation
                </label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors text-slate-700">
                  <option value="">Sélectionner votre situation</option>
                  <option value="demandeur">Demandeur d'emploi inscrit à France Travail</option>
                  <option value="salarie">Salarié en entreprise</option>
                  <option value="reconversion">En reconversion professionnelle</option>
                  <option value="entreprise">Je représente une entreprise</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Décrivez votre demande, votre situation, ou posez-nous vos questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Envoyer ma demande
              </button>

              <p className="text-xs text-slate-400 text-center">
                Nous vous répondons dans un délai de 24h ouvrées.
              </p>
            </form>
          </div>

          {/* Infos contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 mb-6">
              Nos coordonnées
            </h2>

            <ContactCard
              emoji="📧"
              titre="Email"
              valeur="contact@adn-formation.fr"
              lien="mailto:contact@adn-formation.fr"
            />
            <ContactCard
              emoji="📞"
              titre="Téléphone"
              valeur="01 00 00 00 00"
              note="Du lundi au vendredi, 9h–18h"
              lien="tel:+33100000000"
            />

            <div className="bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/40 rounded-2xl p-6">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-black text-slate-900 mb-1">Certifié Qualiopi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Notre certification garantit la qualité de nos formations et
                vous permet d'accéder aux financements CPF, France Travail et
                OPCO. Nous vous accompagnons dans toutes les démarches.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">Questions fréquentes</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-800">
                    Ma formation sera-t-elle prise en charge ?
                  </span>
                  <p className="mt-0.5">
                    Dans la plupart des cas, oui. Contactez-nous pour une étude
                    personnalisée de votre situation.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">
                    Quand ont lieu les prochaines sessions ?
                  </span>
                  <p className="mt-0.5">
                    Nous organisons des sessions régulièrement. Contactez-nous
                    pour connaître les prochaines dates.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">
                    Y a-t-il des prérequis ?
                  </span>
                  <p className="mt-0.5">
                    La plupart de nos formations sont accessibles sans prérequis,
                    y compris les formations à distance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  emoji,
  titre,
  valeur,
  note,
  lien,
}: {
  emoji: string;
  titre: string;
  valeur: string;
  note?: string;
  lien: string;
}) {
  return (
    <a
      href={lien}
      className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-[var(--color-primary-light)] transition-colors"
    >
      <span className="text-2xl">{emoji}</span>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-0.5">
          {titre}
        </div>
        <div className="font-bold text-slate-900">{valeur}</div>
        {note && <div className="text-xs text-slate-500 mt-0.5">{note}</div>}
      </div>
    </a>
  );
}
