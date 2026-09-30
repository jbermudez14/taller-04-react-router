export default function CourseCard({ icon, tint, title, description, level }) {
  return (
    <article className="card">
      <div className="card-icon" style={{ background: tint }} aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="badge">{level}</span>
    </article>
  )
}
