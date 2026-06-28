import React from 'react';

/**
 * Input — dark form field. Sharp 5px corners (the one non-pill radius).
 * Focus swaps the border to Deep Signal — a color change, not a glow ring.
 */
export function Input({ label, id, as = 'input', rows = 4, style = {}, ...rest }) {
  const fieldId = id || (label ? 'f-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const Field = as;
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    background: 'var(--surface-card)',
    border: '1px solid var(--color-iron-edge)',
    borderRadius: 'var(--radius-input)',
    padding: '12px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--color-pure-white)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out)',
    resize: as === 'textarea' ? 'vertical' : undefined,
    ...style,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.4px',
          color: 'var(--text-tertiary)',
        }}>{label}</label>
      )}
      <Field
        id={fieldId}
        rows={as === 'textarea' ? rows : undefined}
        style={fieldStyle}
        onFocus={(e) => { e.target.style.borderColor = 'var(--color-deep-signal)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--color-iron-edge)'; }}
        {...rest}
      />
    </div>
  );
}
