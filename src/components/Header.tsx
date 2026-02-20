import { track } from "@vercel/analytics/react";
import "./Header.css";

const TELEGRAM_LINK = "https://t.me/s/momentum_insights_channel";

function Header() {
  const handleJoinClick = () => {
    track("telegram_button_click", { location: "header" });
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  };

  return (
    <header className="hero-header">
      <div className="header-logo">
        <img src="/logo.png" alt="Momentum Insights Logo" />
      </div>
      <h1>Momentum Insights</h1>
      <p>
        Daily AI-powered tips and smart insights to help you make informed
        decisions and manage your day with confidence.
      </p>

      <div className="hero-cta">
        <div className="telegram-btn-wrapper">
          <a
            href={TELEGRAM_LINK}
            className="telegram-cta-btn"
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
        </div>
        <p className="hero-cta-subtext">Free · No spam · Daily insights</p>
      </div>
    </header>
  );
}

export default Header;
