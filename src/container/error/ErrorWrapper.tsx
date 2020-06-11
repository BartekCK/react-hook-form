import React from 'react';
import { ErrorMessage } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

interface IProps {
  name: string;
  errors: any;
}

export const ErrorWrapper: React.FC<IProps> = (props: IProps) => {
    const { name, errors } = props;

    return (
        <ErrorMessage errors={errors} name={name}>
            {({ message }) => <Alert variant="danger">{message}</Alert>}
        </ErrorMessage>
    );
};
