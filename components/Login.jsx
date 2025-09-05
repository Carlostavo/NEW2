import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login({ session }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState(null)

  useEffect(() => {
    if (session && session.user) {
      const r = session.user.user_metadata?.role || null
      setRole(r)
    } else setRole(null)
  }, [session])

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
  }

  async function signOut(){
    await supabase.auth.signOut()
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <div>Logeado: {session.user.email} {role && `(${role})`}</div>
        <button className="btn" onClick={signOut}>Cerrar sesión</button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={signIn}>Entrar</button>
    </div>
  )
}