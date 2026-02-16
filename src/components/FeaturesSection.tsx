import './FeaturesSection.css'

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Recommendations',
    description:
      'Get suggestions based on data and patterns, personalized for smarter everyday decisions tailored to your needs.',
  },
  {
    icon: '💰',
    title: 'Manage Your Resources',
    description:
      'Learn practical methods to save money and optimize your personal or business budget effectively and effortlessly.',
  },
  {
    icon: '📈',
    title: 'Stay Ahead',
    description:
      'Receive daily briefings and insights to stay updated and make confident, informed choices in real-time.',
  },
]

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>Our Key Features</h2>
      <p>Everything you need to stay ahead and make informed decisions</p>
      <div className="cards">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <h3>
              {feature.icon} {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
