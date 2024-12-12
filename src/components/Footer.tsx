import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <span className="text-white">|</span>
          <Link to="/appointment" className="text-white hover:text-gray-300">
            Rendez-vous
          </Link>
          <span className="text-white">|</span>
          <Link to="/specialties" className="text-white hover:text-gray-300">
            Nos spécialités
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-white">
            &copy; {new Date().getFullYear()} Cabinet Juridique. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
