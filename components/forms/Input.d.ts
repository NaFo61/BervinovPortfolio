import React from 'react';

/**
 * @startingPoint section="Forms" subtitle="Dark field, sharp 5px corner, blue focus border" viewport="700x200"
 *
 * Input — dark form field with label. Focus swaps the border to Deep Signal.
 * Pass `as="textarea"` for the message field.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  /** 'input' (default) or 'textarea' */
  as?: 'input' | 'textarea';
  /** Rows when as="textarea" */
  rows?: number;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
