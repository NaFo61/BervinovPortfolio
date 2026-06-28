import React from 'react';

/** Rating — row of phosphor-mint stars (filled glow + muted remainder). */
export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: number;
  style?: React.CSSProperties;
}

export function Rating(props: RatingProps): JSX.Element;
