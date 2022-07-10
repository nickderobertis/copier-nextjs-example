import { NextPage } from "next";
import ForgotPasswordBegin from "../components/auth/forgot-password/ForgotPasswordBegin";
import ForgotPasswordPageLayout from "../components/auth/forgot-password/ForgotPasswordPageLayout";

const ForgotPassword: NextPage = () => {
  return (
    <ForgotPasswordPageLayout>
      <ForgotPasswordBegin />
    </ForgotPasswordPageLayout>
  );
};

export default ForgotPassword;
