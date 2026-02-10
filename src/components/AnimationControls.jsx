const SPEED_OPTIONS = [
  { label: '0.5x', value: 0.5 },
  { label: '1x', value: 1 },
  { label: '1.5x', value: 1.5 },
  { label: '2x', value: 2 },
]

const MOVE_LABELS = {
  bounce: 'Bounce',
  spin: 'Spin',
  wiggle: 'Wiggle',
  disco: 'Disco',
}

export default function AnimationControls({
  isPlaying,
  currentMove,
  speed,
  onToggle,
  onNextMove,
  onSpeedChange,
}) {
  return (
    <div className="controls" role="toolbar" aria-label="Animation controls">
      {/* Play/Pause */}
      <button
        className="control-btn play-btn"
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
        title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      {/* Dance Move */}
      <button
        className="control-btn move-btn"
        onClick={onNextMove}
        aria-label={`Change dance move. Current: ${MOVE_LABELS[currentMove]}`}
        title="Change dance (D)"
      >
        💃 {MOVE_LABELS[currentMove]}
      </button>

      {/* Speed */}
      <div className="speed-controls" role="group" aria-label="Speed controls">
        {SPEED_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`control-btn speed-btn ${speed === opt.value ? 'active' : ''}`}
            onClick={() => onSpeedChange(opt.value)}
            aria-pressed={speed === opt.value}
            aria-label={`Speed ${opt.label}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
