import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import TopTelegramButton from './components/TopTelegramButton'
import './App.css'

function App() {
  return (
    <>
      <TopTelegramButton />
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
