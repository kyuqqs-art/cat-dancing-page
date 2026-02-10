import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

function App() {
  const { isPlaying, currentMove, speed, toggle, nextMove, changeSpeed } =
    useAnimation()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      switch (e.code) {
        case 'Space':
          e.preventDefault()
          toggle()
          break
        case 'KeyD':
          nextMove()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle, nextMove])

  return (
    <Layout>
      <div className="stage">
        <DancingCat
          isPlaying={isPlaying}
          currentMove={currentMove}
          speed={speed}
        />
      </div>
      <AnimationControls
        isPlaying={isPlaying}
        currentMove={currentMove}
        speed={speed}
        onToggle={toggle}
        onNextMove={nextMove}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  )
}

export default App
