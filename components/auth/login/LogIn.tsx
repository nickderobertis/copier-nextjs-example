import { ReactNode, useMemo } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../forms/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "../../core/buttons/SubmitButton";
import Link from "next/link";
import AuthLink from "../AuthLink";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type LoginData = yup.TypeOf<typeof schema>;

function TextInputWrapper(props: { input: ReactNode }): JSX.Element {
  const { input } = props;
  return (
    <div className="md:gap-6">
      <div className="mb-6">{input}</div>
    </div>
  );
}

export default function LogIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: LoginData) => console.log("logged in with", data);

  const textInputs: ReactNode[] = useMemo(() => {
    const baseInputs = [
      <TextInput
        {...register("email", { required: true })}
        type="email"
        placeholder="Email address"
        error={errors.email}
        key="email"
      />,
      <TextInput
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
        error={errors.password}
        key="password"
      />,
    ];
    return baseInputs.map((input, index) => (
      <TextInputWrapper key={index} input={input} />
    ));
  }, [errors.email, errors.password, register]);

  return (
    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        {textInputs}
        <div className="mt-9"></div>
        <SubmitButton text="Log in" />
        <div className="flex justify-around">
          <AuthLink href="/forgot-password" text="Forgot password?" />
          <AuthLink href="/?signup=true" as="/signup" text="Need an account?" />
        </div>
      </form>
    </div>
  );
}
