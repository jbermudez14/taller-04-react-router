import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="section dark">
      <h2 className="on-dark">¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="subtitle on-dark">Usa los botones para ajustar el número</p>
      <div className="counter">
        <button className="round" aria-label="Restar" onClick={() => setCount((c) => Math.max(0, c - 1))}>−</button>
        <span className="count">{count}</span>
        <button className="round" aria-label="Sumar" onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <p className="subtitle on-dark">estudiantes inscritos</p>
    </section>
  )
}
