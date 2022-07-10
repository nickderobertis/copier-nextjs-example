import { ReactNode, useMemo } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../forms/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "../core/buttons/SubmitButton";
import AuthLink from "./AuthLink";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type SignUpData = yup.TypeOf<typeof schema>;

function TextInputWrapper(props: { input: ReactNode }): JSX.Element {
  const { input } = props;
  return (
    <div className="md:gap-6">
      <div className="mb-6">{input}</div>
    </div>
  );
}

export default function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: SignUpData) => console.log("signed up with", data);

  const textInputs: ReactNode[] = useMemo(() => {
    const baseInputs = [
      <TextInput
        {...register("name", { required: true })}
        type="text"
        placeholder="Name"
        error={errors.name}
        key="name"
      />,
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
  }, [errors.email, errors.name, errors.password, register]);

  return (
    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        {textInputs}
        <div className="mt-9"></div>
        <SubmitButton text="Sign up" />
        <AuthLink
          href="/?login=true"
          as="/login"
          text="Already have an account?"
        />
      </form>
    </div>
  );
}
