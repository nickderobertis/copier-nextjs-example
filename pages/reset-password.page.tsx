import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import ForgotPasswordPageLayout from "../components/auth/forgot-password/ForgotPasswordPageLayout";
import ForgotPasswordReset from "../components/auth/forgot-password/ForgotPasswordReset";

type ExpectedQuery = {
  token: string;
};

function isValidQuery(query: ParsedUrlQuery): query is ExpectedQuery {
  return typeof query.token === "string";
}

const ForgotPasswordSubmittedPage: NextPage = () => {
  const { query } = useRouter();
  if (!isValidQuery(query)) {
    return <div>Sorry, an error has occurred</div>;
  }

  const { token } = query;

  return (
    <ForgotPasswordPageLayout>
      <ForgotPasswordReset token={token} />
    </ForgotPasswordPageLayout>
  );
};

export default ForgotPasswordSubmittedPage;
