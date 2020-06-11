import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { PlainInput } from '../../components/plain-input/PlainInput';
import { PlainSelect } from '../../components/plain-select/PlainSelect';
import { AntInputController } from '../../components/ant-input-controller/AntInputController';
import { AntSelectControllerOnChange } from '../../components/ant-select-controller-onchange/AntSelectControllerOnChange';
import { AntSelectControllerUseEffect } from '../../components/ant-select-controller-useEffect/AntSelectControllerUseEffect';

const FormBase: React.FC = () => {
    const {
        register, handleSubmit, control, watch, errors, setValue,
    } = useForm();

    const onSubmit = (data): void => {
        console.log(data);
    };

    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            <p>plainInput</p>
            <input name="plainInput" ref={register} />

            <PlainInput name="plainInputRef" ref={register} />
            <PlainSelect name="plainSelectRef" register={register} />

            <AntInputController
                name="antInput" placeholder="antInput"
                control={control}
            />
            <AntSelectControllerOnChange name="antSelectOnChange" control={control} />

            <AntSelectControllerUseEffect
                register={register} name="antSelectUseEffect"
                setValue={setValue}
            />

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
