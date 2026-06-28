import React from 'react';
import { Card } from '../surfaces/Card.jsx';
import { Avatar } from './Avatar.jsx';
import { Rating } from './Rating.jsx';

/**
 * TestimonialCard — client review. Dark surface, big mint quote mark,
 * 5-star rating, avatar + name + company. Soft hover lift via Card.
 */
export function TestimonialCard({ quote, name, company, avatarSrc, rating = 5, style = {}, ...rest }) {
  return (
    <Card interactive style={{ display: 'flex', flexDirection: 'column', gap: 16, ...style }} {...rest}>
      <span aria-hidden="true" style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 56, lineHeight: 0.6,
        color: 'var(--color-phosphor-mint)', textShadow: '0 0 24px rgba(112,220,211,0.4)',
        height: 28,
      }}>&ldquo;</span>
      <p style={{
        margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.55,
        color: 'var(--text-secondary)', flex: 1,
      }}>{quote}</p>
      <Rating value={rating} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar name={name} src={avatarSrc} size={44} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--color-pure-white)' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>{company}</span>
        </div>
      </div>
    </Card>
  );
}
