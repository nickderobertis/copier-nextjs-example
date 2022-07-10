import { ReactNode, useMemo } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "../../core/buttons/SubmitButton";
import ForgotPasswordCard from "./ForgotPasswordCard";

type TextInputCreatorOptions<T> = {
  register: UseFormRegister<T>;
  errors: FieldErrorsImpl<DeepRequired<T>>;
};
export type TextInputCreator<T> = (
  options: TextInputCreatorOptions<T>
) => ReactNode[];

type Props<T> = {
  textInputCreator: TextInputCreator<T>;
  schema: yup.AnyObjectSchema;
  onSubmit: (data: T) => unknown;
  description: string;
  submitText: string;
};

function TextInputWrapper(props: { input: ReactNode }): JSX.Element {
  const { input } = props;
  return (
    <div className="md:gap-6">
      <div className="mb-6">{input}</div>
    </div>
  );
}

export default function ForgotPasswordForm<T>({
  textInputCreator,
  onSubmit,
  schema,
  description,
  submitText,
}: Props<T>): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({ resolver: yupResolver(schema) });
  const useTextInputs: ReactNode[] = useMemo(() => {
    const textInputs = textInputCreator({ register, errors });
    return textInputs.map((input, index) => (
      <TextInputWrapper key={index} input={input} />
    ));
    // TODO: Should not use complex object in dependencies without deep compare
  }, [errors, register, textInputCreator]);

  return (
    <ForgotPasswordCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{description}</p>
        <div className="mt-6"></div>
        {useTextInputs}
        <div className="mt-12"></div>
        <SubmitButton text={submitText} />
      </form>
    </ForgotPasswordCard>
  );
}
