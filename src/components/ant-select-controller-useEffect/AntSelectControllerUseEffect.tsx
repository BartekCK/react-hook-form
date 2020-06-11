import React, { useEffect } from 'react';
import { Input, Select } from 'antd';
import { Controller } from 'react-hook-form';

interface IProps {
    name: string;
    setValue: any;
    register: any;
}

export const AntSelectControllerUseEffect: React.FC<IProps> = (props: IProps) => {
    const { name, setValue, register } = props;

    const { Option } = Select;

    useEffect(() => {
        register({ name });
    }, [register]);

    const handleChange = (value) => {
        console.log(value);
        setValue(name, value);
    };

    return (
        <>
            <p>{name}</p>
            <Select onChange={handleChange}>
                <Option value="Car">Car</Option>
                <Option value="Bike">Bike</Option>
            </Select>
        </>
    );
};
