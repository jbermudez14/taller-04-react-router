import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enviado, setEnviado] = useState(false)

  const hayCamposVacios = email.trim() === '' || password === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    if (hayCamposVacios) return
    setEnviado(true)
  }

  return (
    <section className="section dark page">
      <form className="login" onSubmit={handleSubmit}>
        <h2 className="on-dark">Iniciar sesión</h2>

        <label htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={enviado}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={enviado}
        />

        <button type="submit" className="btn" disabled={hayCamposVacios || enviado}>
          {enviado ? 'Enviado' : 'Ingresar'}
        </button>

        <p className="micro">
          {enviado
            ? 'Formulario enviado. No se guardó nada: no hay servidor ni usuarios reales.'
            : 'Esto es solo una interfaz: no valida ni guarda ningún dato.'}
        </p>
      </form>
    </section>
  )
}
