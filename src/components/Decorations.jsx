import React from 'react'

export const GithubIcon = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const LinkedinIcon = ({ size = 20, color = 'currentColor', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const BotanicalLeafTopRight = ({ className = '', color = '#A85A64', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`botanical-art ${className}`}
  >
    <path
      d="M140 10C110 40 85 85 70 145"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* Leaves branching off */}
    <path
      d="M130 25C135 15 148 16 150 25C148 35 136 34 130 25Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M115 45C125 35 138 40 136 50C130 58 118 53 115 45Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M102 70C112 60 125 65 122 75C116 82 105 77 102 70Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M88 100C98 90 110 94 108 104C102 110 92 106 88 100Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    {/* Left-side leaves */}
    <path
      d="M120 30C110 20 98 25 102 35C108 42 118 38 120 30Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M105 55C95 48 84 55 88 65C95 72 104 64 105 55Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M90 85C80 80 72 88 77 96C84 102 91 94 90 85Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
  </svg>
)

export const BotanicalLeafBottomLeft = ({ className = '', color = '#A85A64', size = 140 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`botanical-art ${className}`}
  >
    <path
      d="M10 150C35 120 60 75 75 15"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M20 135C15 145 3 144 2 135C3 125 15 126 20 135Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M35 115C25 125 13 120 15 110C21 102 33 107 35 115Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M48 90C38 100 25 95 28 85C34 78 45 83 48 90Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M62 60C52 70 40 66 42 56C48 50 58 54 62 60Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M30 130C40 140 52 135 48 125C42 118 32 122 30 130Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M45 105C55 112 66 105 62 95C55 88 46 96 45 105Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M60 75C70 80 78 72 73 64C66 58 59 66 60 75Z"
      stroke={color}
      strokeWidth="1.5"
      fill={color}
      fillOpacity="0.15"
    />
  </svg>
)

export const SparkleStar = ({ size = 20, color = '#B8727C', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={`sparkle-star ${className}`}
  >
    <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
  </svg>
)

export const DotGrid = ({ rows = 6, cols = 4, dotSize = 4, gap = 12, color = '#DDAEB5', className = '' }) => {
  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + dotSize}
          cy={r * gap + dotSize}
          r={dotSize / 2}
          fill={color}
        />
      )
    }
  }

  return (
    <svg
      width={cols * gap}
      height={rows * gap}
      className={`dot-grid ${className}`}
      style={{ overflow: 'visible' }}
    >
      {dots}
    </svg>
  )
}
