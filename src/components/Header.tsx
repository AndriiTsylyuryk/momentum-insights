import { useState } from "react";
import { track } from "@vercel/analytics/react";
import "./Header.css";

const TELEGRAM_LINK = "https://t.me/s/momentum_insights_channel";

const translations = {
  en: {
    joinToday: "Join Today !!!",
    subtitle: "Get your benefits and explore opportunities",
    cta: "Sign to Telegram",
  },
  hi: {
    joinToday: "आज ही जुड़ें !!!",
    subtitle: "अपने लाभ प्राप्त करें और अवसरों का पता लगाएं",
    cta: "अभी टेलीग्राम से जुड़ें",
  },
};

function Header() {
  const [lang, setLang] = useState<"en" | "hi">("hi");
  const t = translations[lang];

  const handleJoinClick = () => {
    track("telegram_button_click", { location: "header" });
    if (window.fbq) window.fbq("track", "Lead");
  };

  return (
    <div className="page">
      <div className="flag-bar">
        <div className="flag-saffron" />
        <div className="flag-white" />
        <div className="flag-green" />
      </div>

      <div className="lang-selector">
        <button
          className={`lang-btn${lang === "en" ? " active" : ""}`}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <span className="lang-divider">|</span>
        <button
          className={`lang-btn${lang === "hi" ? " active" : ""}`}
          onClick={() => setLang("hi")}
        >
          हिन्दी
        </button>
      </div>

      <div className="content">
        <img
          className="ipl-logo"
          src="https://upload.wikimedia.org/wikipedia/en/8/84/Indian_Premier_League_Official_Logo.svg"
          alt="Indian Premier League"
        />

        <h1 className="join-today">{t.joinToday}</h1>
        <p className="subtitle">{t.subtitle}</p>

        <div className="btn-wrapper">
          <a
            href={TELEGRAM_LINK}
            className="telegram-btn"
            onClick={handleJoinClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/telegram-app.png"
              alt="Telegram"
            />
            {t.cta}
          </a>
        </div>
      </div>

      <div className="flag-bar bottom">
        <div className="flag-saffron" />
        <div className="flag-white" />
        <div className="flag-green" />
      </div>
    </div>
  );
}

export default Header;
