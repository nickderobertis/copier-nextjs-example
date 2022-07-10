import { useRouter } from "next/router";
import { useCallback } from "react";
import Button from "../../core/buttons/Button";
import ForgotPasswordCard from "./ForgotPasswordCard";

export default function ForgotPasswordSuccess(): JSX.Element {
  const { push } = useRouter();
  const onClick = useCallback(() => push("/?login=true", "/login"), [push]);
  return (
    <ForgotPasswordCard>
      <p>Your password has been successfully reset.</p>
      <div className="mt-3"></div>
      <Button text="Sign In" onClick={onClick} />
    </ForgotPasswordCard>
  );
}
