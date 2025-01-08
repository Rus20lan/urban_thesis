import { FC } from 'react';
import './style.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormData } from '../../interface/IFormData';

type Props = {
  setDataForm?: React.Dispatch<React.SetStateAction<IFormData>>;
  style?: React.CSSProperties;
  btnProps: {
    text: string;
    style: React.CSSProperties;
  };
  isEmailField?: boolean;
  isPhoneField?: boolean;
  inputClass?: string;
};

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

const FeedbackForm: FC<Props> = ({
  btnProps,
  isEmailField,
  isPhoneField,
  style,
  inputClass,
  setDataForm,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setDataForm?.(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="quiz_form"
        style={style && style}
      >
        {errors.name?.type === 'required' && (
          <p role="alert" style={{ textAlign: 'center', color: '#ff2400' }}>
            Требуется указать имя
          </p>
        )}
        <input
          className={inputClass && inputClass}
          type="text"
          placeholder="Ваше имя"
          {...register('name', {
            required: true,
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
        ></input>

        {isEmailField && (
          <>
            {errors.email && (
              <p role="alert" style={{ textAlign: 'center', color: '#ff2400' }}>
                {errors.email.message}{' '}
              </p>
            )}
            <input
              className={inputClass && inputClass}
              type="email"
              placeholder="E-mail"
              {...register('email', {
                required: 'Требуется указать адрес электронной почты',
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            ></input>
          </>
        )}

        {isPhoneField && (
          <>
            {errors.phone && (
              <p role="alert" style={{ textAlign: 'center', color: '#ff2400' }}>
                {errors.phone.message}{' '}
              </p>
            )}
            <input
              className={inputClass && inputClass}
              type="tel"
              placeholder="Номер телефона"
              {...register('phone', {
                required: 'Требуется указать номер телефона',
              })}
              aria-invalid={errors.phone ? 'true' : 'false'}
            ></input>
          </>
        )}
        <input type="submit" style={btnProps.style} />
      </form>
    </>
  );
};

export default FeedbackForm;
