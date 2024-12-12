import { Link } from 'react-router-dom'

const lawyers = [
  {
    id: 1,
    name: 'Me. Sarah Martin',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256',
    specialties: ['Droit de la famille', 'Droit du divorce'],
    description: 'Spécialisée en droit de la famille avec 15 ans d\'expérience',
    disponibility: 'Lundi, Mercredi, Vendredi',
  },
  {
    id: 2,
    name: 'Me. Thomas Dubois',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256',
    specialties: ['Droit commercial', 'Droit des sociétés'],
    description: 'Expert en droit des affaires et création d\'entreprise',
    disponibility: 'Mardi, Jeudi, Samedi',
  },
  {
    id: 3,
    name: 'Me. Emma Bernard',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256',
    specialties: ['Droit immobilier', 'Droit de la construction'],
    description: 'Spécialiste du droit immobilier et de la copropriété',
    disponibility: 'Lundi, Mardi, Jeudi',
  },
  {
    id: 4,
    name: 'Me. Lucas Petit',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256',
    specialties: ['Droit pénal', 'Droit routier'],
    description: 'Avocat pénaliste expérimenté',
    disponibility: 'Mercredi, Vendredi, Samedi',
  },
  {
    id: 5,
    name: 'Me. Julie Rousseau',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256',
    specialties: ['Droit du travail', 'Droit social'],
    description: 'Experte en droit du travail et relations sociales',
    disponibility: 'Lundi, Jeudi, Vendredi',
  },
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Notre équipe</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos avocats à votre service
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une équipe d'avocats expérimentés et spécialisés pour vous accompagner dans vos démarches juridiques.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {lawyers.map((lawyer) => (
            <article key={lawyer.id} className="flex flex-col items-start">
              <div className="w-full">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {lawyer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {lawyer.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{lawyer.description}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    <span className="font-semibold">Disponibilités :</span> {lawyer.disponibility}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to={`/appointment?lawyer=${lawyer.id}`}
                    className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent"
                  >
                    Prendre rendez-vous
                    <span className="ml-2" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export const lawyersList = lawyers
