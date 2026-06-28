import React from 'react';

/**
 * Card — primary content container. Elevation comes from a light hairline
 * border (#d9dae5) on the dark surface, never a drop shadow. `featured`
 * adds the phosphor-mint glow (use one per viewport max).
 */
export function Card({
  surface = 'card',
  featured = false,
  interactive = false,
  padding = 24,
  children,
  style = {},
  ...rest
}) {
  const surfaces = {
    card: 'var(--surface-card)',
    raised: 'var(--surface-raised)',
    page: 'var(--surface-page)',
  };
  return (
    <div
      className={interactive ? 'ds-card ds-card--interactive' : 'ds-card'}
      style={{
        background: surfaces[surface],
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-card)',
        padding,
        boxShadow: featured ? 'var(--glow-mint-soft)' : 'none',
        borderColor: featured ? 'var(--color-phosphor-mint)' : 'var(--border-card)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {interactive && (
        <style>{`
          .ds-card--interactive:hover {
            transform: translateY(-4px);
            border-color: var(--color-phosphor-mint) !important;
            box-shadow: var(--glow-mint-soft) !important;
          }
        `}</style>
      )}
    </div>
  );
}
