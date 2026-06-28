import React from 'react';

/** Avatar — circular initials placeholder with hairline ring; pass src for a photo. */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  /** Full name — initials are derived from it */
  name?: string;
  size?: number;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
