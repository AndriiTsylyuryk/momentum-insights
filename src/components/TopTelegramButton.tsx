import { track } from '@vercel/analytics/react'
import './TopTelegramButton.css'

const TELEGRAM_LINK = 'https://t.me/+-k9zzEEk1ekwNDAy'

function TopTelegramButton() {
  const handleClick = () => {
    // Track with Vercel Analytics
    track('telegram_button_click', { location: 'top_fixed' })

    // Facebook Pixel tracking (if available)
    if (window.fbq) {
      window.fbq('track', 'Lead')
    }
  }

  return (
    <a
      href={TELEGRAM_LINK}
      className="top-telegram"
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/color/48/000000/telegram-app.png"
        alt="Telegram"
      />
      Join Channel
    </a>
  )
}

export default TopTelegramButton
