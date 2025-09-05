import Link from 'next/link'
import Login from './Login'

export default function Nav({ session }){
  return (
    <nav className="bg-white shadow p-4 mb-6 rounded">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link href="/" className="font-bold">Inicio</Link>
          <Link href="/indicadores">Indicadores</Link>
          <Link href="/metas">Metas</Link>
          <Link href="/avances">Avances</Link>
          <Link href="/reportes">Reportes</Link>
          <Link href="/formularios">Formularios</Link>
        </div>
        <div>
          <Login session={session} />
        </div>
      </div>
    </nav>
  )
}