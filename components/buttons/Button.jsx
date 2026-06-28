import React from 'react';

/**
 * Button — the system's pill control. The ONLY filled button is white
 * (primary); everything else is ghost/outlined. Mint variant is reserved
 * for the single neon CTA per viewport.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: 14 },
    md: { padding: '12px 24px', fontSize: 16 },
    lg: { padding: '15px 32px', fontSize: 16 },
  };

  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.2px',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    lineHeight: 1,
    textDecoration: 'none',
    transition: 'all var(--dur-base) var(--ease-out)',
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: 'var(--color-pure-white)',
      color: 'var(--color-void-canvas)',
      boxShadow: 'var(--shadow-pill-inset)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-pure-white)',
      border: '1px solid var(--color-pure-white)',
    },
    mint: {
      background: 'transparent',
      color: 'var(--color-phosphor-mint)',
      border: '1px solid var(--color-phosphor-mint)',
      boxShadow: 'var(--glow-mint-soft)',
    },
    quiet: {
      background: 'transparent',
      color: 'var(--color-graphite)',
      border: '1px solid var(--border-card)',
    },
  };

  const Tag = as;
  return (
    <Tag style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </Tag>
  );
}
