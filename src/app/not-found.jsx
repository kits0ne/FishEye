import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1>404 - Page non trouvée</h1>
      <p>Désolé, cette page n&apos;existe pas.</p>
      <Link href="/">Retour à l&apos;accueil</Link>
    </main>
  )
}