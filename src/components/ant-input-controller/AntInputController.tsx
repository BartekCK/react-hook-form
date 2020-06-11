import React from 'react';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';

interface IProps {
    name: string;
    placeholder: string;
    control: any;
}

export const AntInputController: React.FC<IProps> = (props: IProps) => {
    const { name, placeholder, control } = props;

    const AInput = (<Input
        name={name} placeholder={placeholder}
    />);

    return (
        <>
            <p>{name}</p>
            <Controller
                as={AInput}
                name={name}
                control={control}
                defaultValue=""
            />
        </>
    );
};
