import CourseCard from './CourseCard'

const courses = [
  { icon: '⚛️', tint: 'linear-gradient(135deg,#8b5cf6,#5b3fd1)', title: 'React Básico',
    description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.', level: 'Principiante' },
  { icon: '🔄', tint: 'linear-gradient(135deg,#60a5fa,#2f7de1)', title: 'React Hooks',
    description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.', level: 'Intermedio' },
  { icon: '🗂️', tint: 'linear-gradient(135deg,#fde047,#f5b82e)', title: 'Estado Global',
    description: 'Gestiona el estado con Context API y aprende cuándo usarlo.', level: 'Intermedio' },
  { icon: '🚀', tint: 'transparent', title: 'React Avanzado',
    description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.', level: 'Avanzado' },
]

export default function CourseList() {
  return (
    <section className="section light page">
      <h2>Nuestros Cursos</h2>
      <p className="subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="grid">
        {courses.map((c) => <CourseCard key={c.title} {...c} />)}
      </div>
    </section>
  )
}
