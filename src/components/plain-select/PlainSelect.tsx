import React from 'react';

interface IProps {
  name: string;
  register: any;
}

export const PlainSelect: React.FC<IProps> = (props: IProps) => {
    const { name, register } = props;

    return (
        <>
            <label>{name}</label>
            <select name={name} ref={register}>
                <option hidden> </option>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
            </select>
        </>
    );
};
