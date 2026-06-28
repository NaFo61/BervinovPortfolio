import React from 'react';

/**
 * Avatar — circular placeholder with initials over a dark surface and a
 * light hairline ring. Pass `src` to show a photo instead.
 */
export function Avatar({ src, alt = '', name = '', size = 48, style = {}, ...rest }) {
  const initials = name
    ? name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
    : '';
  return (
    <div
      style={{
        width: size, height: size, borderRadius: '50%', flexShrink: 0,
        background: 'var(--surface-raised)',
        border: '1px solid var(--border-card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: size * 0.34, letterSpacing: '0.04em',
        color: 'var(--color-graphite)',
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : initials}
    </div>
  );
}
