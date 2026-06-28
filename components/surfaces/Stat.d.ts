import React from 'react';

/**
 * Stat — a single neon metric: big mint number + muted label.
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric, e.g. "6+" or "40" */
  value?: React.ReactNode;
  /** Caption under the number */
  label?: string;
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
