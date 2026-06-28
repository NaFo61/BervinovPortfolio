import React from 'react';

/**
 * Badge — outlined pill status/label. Never filled.
 */
export function Badge({ variant = 'neutral', children, style = {}, ...rest }) {
  const tones = {
    mint:    { color: 'var(--color-phosphor-mint)', border: '1px solid var(--color-phosphor-mint)', boxShadow: 'var(--glow-mint-soft)' },
    success: { color: 'var(--color-verdant-edge)', border: '1px solid var(--color-verdant-edge)' },
    info:    { color: 'var(--color-deep-signal)', border: '1px solid var(--color-deep-signal)' },
    neutral: { color: 'var(--color-graphite)', border: '1px solid var(--border-card)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 11,
        lineHeight: 1,
        letterSpacing: '0.094em',
        textTransform: 'uppercase',
        padding: '5px 11px',
        borderRadius: 'var(--radius-pill)',
        background: 'transparent',
        ...tones[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
