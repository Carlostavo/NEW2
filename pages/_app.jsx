import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(res => setSession(res.data.session))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav session={session} />
      <main className="p-4 max-w-6xl mx-auto">
        <Component {...pageProps} session={session} />
      </main>
    </div>
  )
}