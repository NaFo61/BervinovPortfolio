import React from 'react';

/**
 * @startingPoint section="Buttons" subtitle="Pill controls — white primary, ghost, neon mint CTA" viewport="700x150"
 *
 * Button — the system's pill control. The only filled button is white
 * (primary); everything else is ghost/outlined. The mint variant is the
 * single neon CTA per viewport.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = white fill · ghost = white outline · mint = neon CTA · quiet = muted outline */
  variant?: 'primary' | 'ghost' | 'mint' | 'quiet';
  size?: 'sm' | 'md' | 'lg';
  /** Render as another tag, e.g. 'a' for links */
  as?: 'button' | 'a';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
