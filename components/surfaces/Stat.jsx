import React from 'react';

/**
 * Stat — a single neon metric: big mint number + muted label.
 * Used in the "Обо мне" mini-statistics row.
 */
export function Stat({ value, label, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: 56,
        lineHeight: 1,
        letterSpacing: '0.04em',
        color: 'var(--color-phosphor-mint)',
        textShadow: '0 0 24px rgba(112,220,211,0.45)',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        letterSpacing: '0.4px',
        color: 'var(--text-tertiary)',
      }}>{label}</span>
    </div>
  );
}
