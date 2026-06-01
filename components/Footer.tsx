import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://res.cloudinary.com/detxwbzq0/image/upload/v1777388155/adn-logo_vrz0cd.png"
              alt="ADN Formation"
              width={36}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <span className="font-black text-lg">ADN Formation</span>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Centre de formation professionnelle certifié Qualiopi, spécialisé
            dans les formations BTP pour demandeurs d'emploi et travailleurs
            en reconversion.
          </p>
          <div className="mt-4 flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 w-fit">
            <span className="text-[var(--color-accent)] font-black text-sm">✓</span>
            <span className="text-sm font-semibold">Certifié Qualiopi</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-blue-200 mb-4">
            Formations
          </h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><Link href="/formations#sst" className="hover:text-white transition-colors">SST — Sauveteur Secouriste du Travail</Link></li>
            <li><Link href="/formations#prap" className="hover:text-white transition-colors">PRAP — Prévention des risques</Link></li>
            <li><Link href="/formations#habilitation" className="hover:text-white transition-colors">Habilitation électrique</Link></li>
            <li><Link href="/formations#distanciel" className="hover:text-white transition-colors">Formations à distance</Link></li>
            <li><Link href="/financement" className="hover:text-white transition-colors">Financement CPF / France Travail</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-blue-200 mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>📧 <a href="mailto:contact@adn-formation.fr" className="hover:text-white transition-colors">contact@adn-formation.fr</a></li>
            <li>📞 <a href="tel:+33100000000" className="hover:text-white transition-colors">01 00 00 00 00</a></li>
            <li className="pt-2">
              <Link href="/contact" className="bg-[var(--color-accent)] text-slate-900 font-bold text-sm px-4 py-2 rounded-lg inline-block hover:bg-[var(--color-accent-dark)] transition-colors">
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-blue-300 text-xs">
          <p>© {new Date().getFullYear()} ADN Formation. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
