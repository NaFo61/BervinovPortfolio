import React from 'react';
import { Card } from '../surfaces/Card.jsx';
import { Badge } from '../buttons/Badge.jsx';
import { Button } from '../buttons/Button.jsx';

/**
 * PriceCard — pricing package. Dark surface, mint price, pill CTA.
 * `popular` adds the "Популярный" mint badge + featured glow.
 */
export function PriceCard({ name, price, note, features = [], popular = false, cta = 'Обсудить', style = {}, ...rest }) {
  return (
    <Card featured={popular} interactive style={{ display: 'flex', flexDirection: 'column', gap: 18, ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 24, letterSpacing: '0.04em', color: 'var(--color-pure-white)' }}>{name}</span>
        {popular && <Badge variant="mint">Популярный</Badge>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, letterSpacing: '0.02em', color: 'var(--color-phosphor-mint)', textShadow: '0 0 22px rgba(112,220,211,0.4)' }}>{price}</span>
        {note && <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{note}</span>}
      </div>
      {features.length > 0 && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--color-phosphor-mint)', lineHeight: 1.5 }}>—</span>{f}
            </li>
          ))}
        </ul>
      )}
      <Button variant={popular ? 'mint' : 'ghost'} style={{ width: '100%', marginTop: 'auto' }}>{cta}</Button>
    </Card>
  );
}
