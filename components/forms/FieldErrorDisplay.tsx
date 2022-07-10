import { FieldError } from "react-hook-form";

type Props = {
  error?: FieldError;
};

function FormattedMessage({ message }: { message: string }): JSX.Element {
  return <span className="text-red-600">{message}</span>;
}

export default function FieldErrorDisplay({ error }: Props) {
  if (!error) {
    return null;
  }
  if (error.type === "required") {
    return <FormattedMessage message="This field is required" />;
  }
  if (!error.message) {
    return null;
  }
  return <FormattedMessage message={error.message} />;
}
