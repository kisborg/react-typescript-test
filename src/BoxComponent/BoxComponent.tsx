import * as React from 'react';
import './BoxComponent.css';

export interface IAppProps {
    color?: string;
    openAlert?: React.MouseEventHandler
}

export function BoxComponent (props: IAppProps) {
  return (
    <div className='box' style={{backgroundColor: props.color}} onClick={props.openAlert}>
      Red box
    </div>
  );
}

