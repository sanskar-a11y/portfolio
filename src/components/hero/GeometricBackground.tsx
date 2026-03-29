'use client'

/**
 * Ambient geometric background — purple/violet tones for the Dora-dark theme.
 * Pure CSS animation, zero JS cost.
 */
export default function GeometricBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Shape 1 — Large hexagonal form in purple */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '600px',
          height: '600px',
          opacity: 0.06,
          background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animation: 'drift-1 40s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Shape 2 — Diamond form */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '450px',
          height: '450px',
          opacity: 0.04,
          background: 'linear-gradient(225deg, #a78bfa, transparent)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animation: 'drift-2 35s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Shape 3 — Triangle form */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '500px',
          height: '500px',
          opacity: 0.05,
          background: 'linear-gradient(45deg, #ec4899, transparent)',
          clipPath: 'polygon(50% 10%, 90% 90%, 10% 90%)',
          animation: 'drift-3 45s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Radial glow — purple centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
