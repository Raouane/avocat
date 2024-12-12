import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { lawyersList } from './Team'
import DateTimePicker from '../components/DateTimePicker'

export default function Appointment() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const selectedLawyerId = searchParams.get('lawyer')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    lawyer: selectedLawyerId || '',
    date: '',
    time: '',
    message: '',
  })

  const specialties = [
    'Droit de la famille',
    'Droit commercial',
    'Droit immobilier',
    'Droit du travail',
    'Droit pénal',
  ]

  useEffect(() => {
    if (selectedLawyerId) {
      const lawyer = lawyersList.find(l => l.id.toString() === selectedLawyerId)
      if (lawyer && lawyer.specialties.length > 0) {
        setFormData(prev => ({
          ...prev,
          specialty: lawyer.specialties[0]
        }))
      }
    }
  }, [selectedLawyerId])

  const sendConfirmationEmail = async (appointmentData: typeof formData) => {
    // Ici, vous pouvez implémenter l'envoi réel d'email
    // Par exemple, en utilisant un service comme SendGrid, Mailjet, etc.
    console.log('Email de confirmation envoyé à:', appointmentData.email)
    
    // Simulation d'envoi d'email
    const emailContent = `
      Cher/Chère ${appointmentData.name},

      Nous vous confirmons votre demande de rendez-vous :
      
      Date : ${appointmentData.date}
      Heure : ${appointmentData.time}
      Avocat : ${lawyersList.find(l => l.id.toString() === appointmentData.lawyer)?.name}
      Spécialité : ${appointmentData.specialty}

      Nous vous contacterons rapidement pour confirmer votre rendez-vous.
      
      Cordialement,
      L'équipe du Cabinet Juridique
    `
    
    console.log('Contenu de l\'email :', emailContent)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Envoi de l'email de confirmation
      await sendConfirmationEmail(formData)

      // Redirection vers la page de remerciement avec les détails du rendez-vous
      navigate('/thank-you', { 
        state: { 
          appointment: formData
        }
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const getAvailableDays = () => {
    if (!formData.lawyer) return []
    const lawyer = lawyersList.find(l => l.id.toString() === formData.lawyer)
    return lawyer ? lawyer.disponibility.split(', ') : []
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Prendre rendez-vous
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Remplissez le formulaire ci-dessous pour prendre rendez-vous avec l'un de nos avocats.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="lawyer" className="block text-sm font-semibold leading-6 text-gray-900">
              Avocat
            </label>
            <div className="mt-2.5">
              <select
                name="lawyer"
                id="lawyer"
                required
                value={formData.lawyer}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              >
                <option value="">Sélectionnez un avocat</option>
                {lawyersList.map((lawyer) => (
                  <option key={lawyer.id} value={lawyer.id}>
                    {lawyer.name} - {lawyer.specialties.join(', ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="specialty" className="block text-sm font-semibold leading-6 text-gray-900">
              Spécialité
            </label>
            <div className="mt-2.5">
              <select
                name="specialty"
                id="specialty"
                required
                value={formData.specialty}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              >
                <option value="">Sélectionnez une spécialité</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <DateTimePicker
              selectedDate={formData.date}
              selectedTime={formData.time}
              onDateChange={(date) => handleChange({ target: { name: 'date', value: date } } as any)}
              onTimeChange={(time) => handleChange({ target: { name: 'time', value: time } } as any)}
              availableDays={getAvailableDays()}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom complet
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Téléphone
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Envoyer la demande
          </button>
        </div>
      </form>
    </div>
  )
}
