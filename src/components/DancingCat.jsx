import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const NOTES = ['♪', '♫', '♬', '♩']

export default function DancingCat({ isPlaying, currentMove, speed }) {
  const animationClass = `dance-${currentMove} ${!isPlaying ? 'dance-paused' : ''}`
  const speedStyle = { animationDuration: `${1 / speed}s` }

  return (
    <div className="dancing-cat-wrapper">
      {/* Sparkles */}
      {isPlaying && (
        <div className="sparkles">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="sparkle"
              style={{
                left: `${10 + i * 16}%`,
                top: `${15 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${14 + (i % 3) * 6}px`,
              }}
            >
              ✦
            </span>
          ))}
        </div>
      )}

      {/* Music notes */}
      {isPlaying && (
        <div className="music-notes">
          {NOTES.map((note, i) => (
            <span
              key={i}
              className="music-note"
              style={{
                left: `${15 + i * 22}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${20 + i * 4}px`,
              }}
            >
              {note}
            </span>
          ))}
        </div>
      )}

      {/* Cat */}
      <div className={animationClass} style={speedStyle}>
        <img
          src={catSvg}
          alt="Dancing cat"
          className="cat-image"
        />
      </div>

      {/* Shadow */}
      <div
        className={`cat-shadow-element ${isPlaying ? 'cat-shadow' : ''}`}
        style={isPlaying ? speedStyle : undefined}
      />
    </div>
  )
}
