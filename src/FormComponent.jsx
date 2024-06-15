import React from 'react';
import { useForm } from 'react-hook-form';
import './FormComponent.css';

// Form field component
const FormField = ({ id, label, register, validation, error }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...register(id, validation)} />
    {error && <p>{error.message}</p>}
  </div>
);

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id="firstName"
        label="First Name"
        register={register}
        validation={{ required: 'First name is required' }}
        error={errors.firstName}
      />

      <FormField
        id="lastName"
        label="Last Name"
        register={register}
        validation={{ required: 'Last name is required' }}
        error={errors.lastName}
      />

      <FormField
        id="email"
        label="Email"
        register={register}
        validation={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email',
          },
        }}
        error={errors.email}
      />

      <FormField
        id="password"
        label="Password"
        register={register}
        validation={{
          required: 'Password is required',
          minLength: {
            value: 5,
            message: 'Password must be more than 4 characters',
          },
          maxLength: {
            value: 20,
            message: 'Password cannot be more than 20 characters',
          },
        }}
        error={errors.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
