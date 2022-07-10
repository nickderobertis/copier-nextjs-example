import { useRouter } from "next/router";
import * as yup from "yup";
import TextInput from "../../forms/TextInput";
import ForgotPasswordCard from "./ForgotPasswordCard";
import ForgotPasswordForm, { TextInputCreator } from "./ForgotPasswordForm";

type Props = {
  token?: string;
};

const schema = yup
  .object({
    password: yup.string().required(),
  })
  .required();

type ForgotPasswordResetData = yup.TypeOf<typeof schema>;

const textInputCreator: TextInputCreator<ForgotPasswordResetData> = ({
  register,
  errors,
}) => {
  return [
    <TextInput
      {...register("password", { required: true })}
      type="password"
      placeholder="New Password"
      error={errors.password}
      key="password"
    />,
  ];
};

export default function ForgotPasswordReset({ token }: Props): JSX.Element {
  const router = useRouter();

  if (!token) {
    return <ForgotPasswordCard>No token provided</ForgotPasswordCard>;
  }

  const onSubmit = (data: ForgotPasswordResetData) => {
    console.log("reset password with", data, "and token", token);
    router.push("/reset-password-finish");
  };

  return (
    <ForgotPasswordForm
      onSubmit={onSubmit}
      textInputCreator={textInputCreator}
      schema={schema}
      description="Please enter a new password."
      submitText="Update my Password"
    />
  );
}
