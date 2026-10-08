import { CustomCursor } from './components/ui/CustomCursor'
import { Navbar } from './components/navigation/Navbar'
import { SmoothScroll } from './components/layout/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />

      <Navbar />

      <main>
        <section className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
              Full Stack Developer
            </p>

            <h1 className="text-6xl font-medium tracking-tight md:text-9xl">
              Joren Alcos
            </h1>
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}

export default App