import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'antd';
import { Button } from 'react-bootstrap';
import { PlainInput } from '../../components/plain-input/PlainInput';
import { PlainSelect } from '../../components/plain-select/PlainSelect';

const FormBase: React.FC = () => {
    const {
        register, handleSubmit, watch, errors,
    } = useForm();

    const onSubmit = (data): void => {
        console.log(data);
    };

    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            <p>plainInput</p>
            <input name="plainInput" ref={register} />

            <PlainInput name="plainInputRef" ref={register} />
            <PlainSelect name="plainSelectRef" register={register()} />

            <p>Ant input</p>
            <Input />

            <Button
                className="align-self-end my-2" variant="success"
                type="submit"
            >
                Wyślij
            </Button>
        </form>
    );
};

export default FormBase;
