import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <h1>Aprende <span className="accent">React</span> desde cero</h1>
      <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
      <Link to="/cursos" className="btn">Ver Cursos</Link>
    </section>
  )
}
