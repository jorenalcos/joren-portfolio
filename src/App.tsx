import { Navbar } from './components/navigation/Navbar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { CustomCursor } from './components/ui/CustomCursor'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'


function App() {
  return (
    <SmoothScroll>
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stack />

        <section
          id="work"
          className="min-h-screen"
        />
      </main>
    </SmoothScroll>
  )
}

export default App