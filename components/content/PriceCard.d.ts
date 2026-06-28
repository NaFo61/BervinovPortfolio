import React from 'react';

/**
 * @startingPoint section="Content" subtitle="Pricing package — mint price, popular badge" viewport="700x320"
 *
 * PriceCard — pricing package with mint price + pill CTA. `popular` adds
 * the mint badge and featured glow.
 */
export interface PriceCardProps {
  name?: string;
  /** e.g. "от 120 000 ₽" */
  price?: string;
  note?: string;
  features?: string[];
  popular?: boolean;
  cta?: string;
  style?: React.CSSProperties;
}

export function PriceCard(props: PriceCardProps): JSX.Element;
