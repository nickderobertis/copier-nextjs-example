import { NextPage } from "next";
import ForgotPasswordPageLayout from "../components/auth/forgot-password/ForgotPasswordPageLayout";
import ForgotPasswordSuccess from "../components/auth/forgot-password/ForgotPasswordSuccess";

const ResetPasswordFinish: NextPage = () => {
  return (
    <ForgotPasswordPageLayout>
      <ForgotPasswordSuccess />
    </ForgotPasswordPageLayout>
  );
};

export default ResetPasswordFinish;
