import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/cursos', label: 'Cursos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/login', label: 'Ingresar' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">ReactAcademy</Link>
      <nav>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
