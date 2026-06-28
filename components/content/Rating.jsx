import React from 'react';

/**
 * Rating — row of mint stars. Filled stars glow phosphor-mint; the rest
 * sit muted. Default 5 of 5.
 */
export function Rating({ value = 5, max = 5, size = 16, style = {}, ...rest }) {
  return (
    <div style={{ display: 'inline-flex', gap: 3, ...style }} aria-label={`${value} из ${max}`} {...rest}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            fontSize: size,
            lineHeight: 1,
            color: i < value ? 'var(--color-phosphor-mint)' : 'var(--color-iron-edge)',
            textShadow: i < value ? '0 0 10px rgba(112,220,211,0.6)' : 'none',
          }}
        >★</span>
      ))}
    </div>
  );
}
