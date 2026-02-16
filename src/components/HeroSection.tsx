import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Smart Decisions, Every Day</h2>
        <p>
          Our AI analyzes current trends, data, and patterns to provide
          practical tips for your everyday life, helping you stay informed and
          make better choices.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>
          Join thousands of users who are already making smarter decisions with
          our daily insights and personalized recommendations.
        </p>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
          alt="AI Analytics Dashboard"
        />
      </div>
    </section>
  )
}

export default HeroSection
