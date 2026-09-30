import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section dark page center">
      <h1 className="big404">404</h1>
      <h2 className="on-dark">Esta página no existe</h2>
      <p className="subtitle on-dark">La dirección que escribiste no corresponde a ninguna vista.</p>
      <Link to="/" className="btn">Volver al inicio</Link>
    </section>
  )
}
