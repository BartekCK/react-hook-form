import React, { useEffect } from 'react';
import { Input, Select } from 'antd';
import { ErrorWrapper } from '../../container/error/ErrorWrapper';

interface IProps {
    name: string;
    setValue: any;
    register: any;
    errors: any;
}

const validation = {
    required: 'Place can not be empty',
};

export const AntSelectControllerUseEffect: React.FC<IProps> = (props: IProps) => {
    const {
        name, setValue, register, errors,
    } = props;

    const { Option } = Select;

    useEffect(() => {
        register({ name }, validation);
    }, [register]);

    const handleChange = (value) => {
        console.log(value);
        setValue(name, value);
    };

    return (
        <>
            <label>{name}</label>
            <Select onChange={handleChange}>
                <Option value="Car">Car</Option>
                <Option value="Bike">Bike</Option>
            </Select>
            <ErrorWrapper name={name} errors={errors} />
        </>
    );
};
