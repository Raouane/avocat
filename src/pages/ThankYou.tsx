import { useLocation, Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { lawyersList } from './Team'

export default function ThankYou() {
  const location = useLocation()
  const appointment = location.state?.appointment

  // Formatage de la date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date)
  }

  // Formatage de l'heure
  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':')
    return `${hours}h${minutes}`
  }

  // Récupération des informations de l'avocat
  const lawyer = appointment?.lawyer ? 
    lawyersList.find(l => l.id.toString() === appointment.lawyer) : 
    null

  if (!appointment) {
    return (
      <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-accent">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page non trouvée
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Désolé, nous ne trouvons pas les détails de votre rendez-vous.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Merci pour votre demande de rendez-vous !
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Un email de confirmation a été envoyé à {appointment.email}.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl bg-gray-50 p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Détails de votre rendez-vous
        </h2>
        
        <div className="space-y-4">
          {lawyer && (
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
              <img
                src={lawyer.image}
                alt={lawyer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{lawyer.name}</h3>
                <p className="text-sm text-gray-500">{lawyer.specialties.join(', ')}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium text-gray-700">Date et heure</h4>
              <p className="mt-1 text-gray-900">
                {formatDate(appointment.date)} à {formatTime(appointment.time)}
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium text-gray-700">Spécialité</h4>
              <p className="mt-1 text-gray-900">{appointment.specialty}</p>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium text-gray-700">Vos coordonnées</h4>
              <p className="mt-1 text-gray-900">{appointment.name}</p>
              <p className="text-gray-600">{appointment.email}</p>
              <p className="text-gray-600">{appointment.phone}</p>
            </div>

            {appointment.message && (
              <div className="p-4 bg-white rounded-lg md:col-span-2">
                <h4 className="font-medium text-gray-700">Votre message</h4>
                <p className="mt-1 text-gray-900">{appointment.message}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-600 text-center">
            Nous vous contacterons rapidement pour confirmer votre rendez-vous.
            En cas de besoin, vous pouvez nous joindre au <a href="tel:+33123456789" className="text-accent">01 23 45 67 89</a>
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent"
            >
              Retour à l'accueil
            </Link>
            <button
              onClick={() => window.print()}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50"
            >
              Imprimer les détails
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
