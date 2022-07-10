import { PropsWithChildren } from "react";

export default function ForgotPasswordCard(
  props: PropsWithChildren
): JSX.Element {
  return (
    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      {props.children}
    </div>
  );
}
