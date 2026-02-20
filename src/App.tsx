import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}

export default App
