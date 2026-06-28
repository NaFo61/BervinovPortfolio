import React from 'react';

/**
 * @startingPoint section="Surfaces" subtitle="Dark card defined by a light hairline border" viewport="700x220"
 *
 * Card — primary content container. Elevation = light border, not shadow.
 * `featured` adds the phosphor-mint glow (one per viewport).
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: 'card' | 'raised' | 'page';
  /** Phosphor-mint border + glow for the single featured item */
  featured?: boolean;
  /** Lift + mint glow on hover */
  interactive?: boolean;
  padding?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
