import { useState, useCallback } from 'react'

const DANCE_MOVES = ['bounce', 'spin', 'wiggle', 'disco']

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentMove, setCurrentMove] = useState(0)
  const [speed, setSpeed] = useState(1)

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const nextMove = useCallback(() => {
    setCurrentMove((prev) => (prev + 1) % DANCE_MOVES.length)
  }, [])

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed)
  }, [])

  return {
    isPlaying,
    currentMove: DANCE_MOVES[currentMove],
    speed,
    toggle,
    nextMove,
    changeSpeed,
    danceMoveName: DANCE_MOVES[currentMove],
  }
}
