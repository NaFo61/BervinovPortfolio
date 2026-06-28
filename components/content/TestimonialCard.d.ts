import React from 'react';

/**
 * @startingPoint section="Content" subtitle="Client review card — mint quote, stars, avatar" viewport="700x260"
 *
 * TestimonialCard — client review with mint quote mark, 5 stars, avatar.
 */
export interface TestimonialCardProps {
  quote?: string;
  name?: string;
  company?: string;
  avatarSrc?: string;
  rating?: number;
  style?: React.CSSProperties;
}

export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
