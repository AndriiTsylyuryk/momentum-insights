import { track } from '@vercel/analytics/react'
import './Header.css'

const TELEGRAM_LINK = 'https://t.me/+-k9zzEEk1ekwNDAy'

function Header() {
  const handleJoinClick = () => {
    // Track with Vercel Analytics
    track('telegram_button_click', { location: 'header' })

    // Facebook Pixel tracking (if available)
    if (window.fbq) {
      window.fbq('track', 'Lead')
    }
  }

  return (
    <>
      <header className="hero-header">
        <div className="header-logo">
          <img src="/logo.png" alt="Momentum Insights Logo" />
        </div>
        <h1>Momentum Insights</h1>
        <p>
          Daily AI-powered tips and smart insights to help you make informed
          decisions and manage your day with confidence.
        </p>
      </header>

      <section className="header-join-section">
        <p>Get daily AI insights delivered to your inbox</p>
        <a
          href={TELEGRAM_LINK}
          className="header-join-button"
          onClick={handleJoinClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/telegram-app.png"
            alt="Telegram"
          />
          Join Our Community
        </a>
      </section>
    </>
  )
}

export default Header
