import { Navbar } from './components/navigation/Navbar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { CustomCursor } from './components/ui/CustomCursor'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />

        <section
          id="work"
          className="min-h-screen"
        />
      </main>
    </SmoothScroll>
  )
}

export default App