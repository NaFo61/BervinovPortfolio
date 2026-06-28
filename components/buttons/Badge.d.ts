import React from 'react';

/**
 * Badge — outlined pill status/label. Never filled; identity comes from
 * the border + text color. Mint variant flags the featured / "Популярный"
 * item; outline variants for success/info.
 */
export interface BadgeProps {
  /** Visual tone */
  variant?: 'mint' | 'success' | 'info' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
