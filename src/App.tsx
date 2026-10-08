import { Navbar } from './components/navigation/Navbar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { CustomCursor } from './components/ui/CustomCursor'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />

        <section
          id="work"
          className="min-h-screen"
        />
      </main>
    </SmoothScroll>
  )
}

export default App