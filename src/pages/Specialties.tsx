import { Link } from 'react-router-dom'

const specialties = [
  {
    title: 'Droit de la famille',
    description: 'Notre équipe vous accompagne dans toutes vos démarches familiales : divorce, garde d\'enfants, pension alimentaire, adoption, succession...',
    icon: '👨‍👩‍👧‍👦',
    details: [
      'Divorce et séparation',
      'Garde d\'enfants',
      'Pension alimentaire',
      'Adoption',
      'Succession',
    ],
  },
  {
    title: 'Droit commercial',
    description: 'Expertise en droit des affaires pour les entreprises : création, contrats, litiges commerciaux...',
    icon: '💼',
    details: [
      'Création d\'entreprise',
      'Contrats commerciaux',
      'Litiges commerciaux',
      'Droit des sociétés',
      'Fusions et acquisitions',
    ],
  },
  {
    title: 'Droit immobilier',
    description: 'Conseil et assistance pour toutes vos opérations immobilières : achat, vente, location, copropriété...',
    icon: '🏠',
    details: [
      'Transactions immobilières',
      'Baux d\'habitation',
      'Copropriété',
      'Contentieux locatif',
      'Construction',
    ],
  },
  {
    title: 'Droit du travail',
    description: 'Protection de vos droits en tant qu\'employeur ou salarié : contrats, licenciement, harcèlement...',
    icon: '👔',
    details: [
      'Contrats de travail',
      'Licenciement',
      'Harcèlement',
      'Discrimination',
      'Négociations collectives',
    ],
  },
  {
    title: 'Droit pénal',
    description: 'Défense de vos droits en matière pénale : infractions, délits, crimes...',
    icon: '⚖️',
    details: [
      'Défense pénale',
      'Infractions routières',
      'Délits financiers',
      'Violence',
      'Appels',
    ],
  },
]

export default function Specialties() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Expertise juridique</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos domaines de spécialité
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Notre cabinet d'avocats vous propose une expertise pointue dans différents domaines du droit.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {specialties.map((specialty) => (
              <div key={specialty.title} className="flex flex-col bg-white p-8 shadow-lg rounded-lg">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <span className="text-4xl">{specialty.icon}</span>
                  {specialty.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{specialty.description}</p>
                  <ul className="mt-4 space-y-2">
                    {specialty.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <Link
                      to="/appointment"
                      className="text-sm font-semibold leading-6 text-accent hover:text-primary"
                    >
                      Prendre rendez-vous <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
