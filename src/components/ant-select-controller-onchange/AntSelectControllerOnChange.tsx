import React from 'react';
import { Input, Select } from 'antd';
import { Controller } from 'react-hook-form';

interface IProps {
    name: string;
    control: any;
}

export const AntSelectControllerOnChange: React.FC<IProps> = (props: IProps) => {
    const { name, control } = props;

    const handleChange = (test) => {
        console.log(test);
        return test;
    };

    const { Option } = Select;
    const ASelect = (
        <Select>
            <Option value="Man">Man</Option>
            <Option value="Woman">Woman</Option>
        </Select>);

    return (
        <>
            <label>{name}</label>
            <Controller
                as={ASelect}
                name={name}
                control={control}
                onChange={handleChange}
                defaultValue=""
            />
        </>
    );
};
