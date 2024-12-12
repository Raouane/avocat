import { useState, useEffect } from 'react'
import { format, parse, addDays, isWeekend, setHours, setMinutes, isBefore, isAfter } from 'date-fns'
import { fr } from 'date-fns/locale'

interface DateTimePickerProps {
  selectedDate: string
  selectedTime: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
  availableDays: string[]
}

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  availableDays,
}: DateTimePickerProps) {
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])
  const [availableDates, setAvailableDates] = useState<Date[]>([])

  // Générer les créneaux horaires disponibles (9h-20h)
  useEffect(() => {
    const slots: string[] = []
    for (let hour = 9; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        slots.push(
          `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        )
      }
    }
    setAvailableTimeSlots(slots)
  }, [])

  // Générer les dates disponibles (30 jours à l'avance)
  useEffect(() => {
    const dates: Date[] = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 30; i++) {
      const date = addDays(today, i)
      // Exclure les dimanches
      if (!isWeekend(date) || (isWeekend(date) && date.getDay() === 6)) {
        dates.push(date)
      }
    }
    setAvailableDates(dates)
  }, [])

  // Vérifier si un jour est disponible pour l'avocat sélectionné
  const isDayAvailable = (date: Date) => {
    if (!availableDays || availableDays.length === 0) return true
    
    const dayName = format(date, 'EEEE', { locale: fr })
    return availableDays.some(day => 
      day.toLowerCase().includes(dayName.toLowerCase())
    )
  }

  // Formater la date pour l'affichage
  const formatDateOption = (date: Date) => {
    return format(date, 'EEEE d MMMM yyyy', { locale: fr })
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
          Date
        </label>
        <div className="mt-2">
          <select
            id="date"
            name="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option value="">Sélectionnez une date</option>
            {availableDates.map((date) => (
              isDayAvailable(date) && (
                <option key={date.toISOString()} value={format(date, 'yyyy-MM-dd')}>
                  {formatDateOption(date)}
                </option>
              )
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900">
          Heure
        </label>
        <div className="mt-2">
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={(e) => onTimeChange(e.target.value)}
            disabled={!selectedDate}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option value="">Sélectionnez une heure</option>
            {availableTimeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
