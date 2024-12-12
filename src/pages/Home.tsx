import { Link } from 'react-router-dom'

export default function Home() {
  const specialties = [
    {
      title: 'Droit de la famille',
      description: 'Divorce, garde d\'enfants, pension alimentaire',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Droit commercial',
      description: 'Création d\'entreprise, contrats commerciaux',
      icon: '💼',
    },
    {
      title: 'Droit immobilier',
      description: 'Transactions immobilières, baux, copropriété',
      icon: '🏠',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Cabinet d'avocats à votre service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une équipe d'avocats expérimentés pour vous accompagner dans vos démarches juridiques.
              Disponible du lundi au samedi de 9h à 20h.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/appointment"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Prendre rendez-vous
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Nous contacter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Nos domaines d'expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos spécialités juridiques
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {specialties.map((specialty) => (
                <div key={specialty.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-4xl">{specialty.icon}</span>
                    {specialty.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{specialty.description}</p>
                    <p className="mt-6">
                      <Link
                        to="/specialties"
                        className="text-sm font-semibold leading-6 text-accent"
                      >
                        En savoir plus <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
