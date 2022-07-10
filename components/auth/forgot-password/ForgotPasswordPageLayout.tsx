import { PropsWithChildren } from "react";
import styles from "./ForgotPasswordPageLayout.module.css";

export default function ForgotPasswordPageLayout(
  props: PropsWithChildren
): JSX.Element {
  const wrapperStyles = `${styles.vh} flex justify-center content-center items-center flex-wrap`;
  return <div className={wrapperStyles}>{props.children}</div>;
}
