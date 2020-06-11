import React from 'react';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { ErrorWrapper } from '../../container/error/ErrorWrapper';

interface IProps {
    name: string;
    placeholder: string;
    control: any;
    errors: any;
}

const rules = {
    minLength: {
        value: 3,
        message: 'Min 3 chars',
    },
    required: {
        value: true,
        message: 'Place can not be empty',
    },
};
export const AntInputController: React.FC<IProps> = (props: IProps) => {
    const {
        name, placeholder, control, errors,
    } = props;

    const AInput = (<Input
        name={name} placeholder={placeholder}
    />);

    return (
        <>
            <label>{name}</label>
            <Controller
                as={AInput}
                name={name}
                control={control}
                rules={rules}
                defaultValue=""
            />
            <ErrorWrapper name={name} errors={errors} />
        </>
    );
};
