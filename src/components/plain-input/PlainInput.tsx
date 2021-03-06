import React from 'react';

interface IProps {
    name: string;
}

type Ref = HTMLInputElement;

export const PlainInput = React.forwardRef<Ref, IProps>((props: IProps, ref) => (
    <>
        <label>{props.name}</label>
        <input
            name={props.name}
            ref={ref}
        />
    </>
));
