'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeButtom() {
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {setMounted(true), []})

  if (!mounted) {
    return null
  }

  function isDarkTheme(): string {
    return resolvedTheme === 'dark' ? 'light' : 'dark'
  }

  return (
    <button onClick={() => {setTheme(isDarkTheme())}}>
      {isDarkTheme()}
    </button>
  )
}
