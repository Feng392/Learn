import React from 'react';
import './radio.scss';

export interface RadioTagProps {
  highlight?: boolean;
  children: React.ReactNode;
  onClick(): void;
}

export default function RadioTag(props: RadioTagProps) {
  return (
      <span
          className={ `radio-tag ${ props.highlight ? 'highlight' : '' }` }
          onClick={ props.onClick }
      >
      { props.children }
    </span>
  );
}