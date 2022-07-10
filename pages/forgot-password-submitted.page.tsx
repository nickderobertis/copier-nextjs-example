import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import ForgotPasswordPageLayout from "../components/auth/forgot-password/ForgotPasswordPageLayout";
import ForgotPasswordSubmitted from "../components/auth/forgot-password/ForgotPasswordSubmitted";

type ExpectedQuery = {
  email: string;
};

function isValidQuery(query: ParsedUrlQuery): query is ExpectedQuery {
  return typeof query.email === "string";
}

const ForgotPasswordSubmittedPage: NextPage = () => {
  const { query } = useRouter();
  if (!isValidQuery(query)) {
    return <div>Sorry, an error has occurred</div>;
  }

  const { email } = query;

  return (
    <ForgotPasswordPageLayout>
      <ForgotPasswordSubmitted email={email} />
    </ForgotPasswordPageLayout>
  );
};

export default ForgotPasswordSubmittedPage;
