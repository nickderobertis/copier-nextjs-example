import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import Button from "../core/buttons/Button";
import SignUp from "../auth/SignUp";
import ReactModal from "react-modal";
import LogIn from "../auth/login/LogIn";

const signUpModalStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    minWidth: "400px",
    transform: "translate(-50%, -50%)",
  },
};
const logInModalStyles: ReactModal.Styles = signUpModalStyles;

export default function NavBar(): JSX.Element {
  const router = useRouter();

  const currentRoute = router.pathname;
  const loginHref = `${currentRoute}?login=true`;
  const signUpHref = `${currentRoute}?signup=true`;

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="pl-2 pr-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center pr-5">
            <Link className="navbar-brand text-blue-600" href="/">
              <svg
                className="w-5 h-5 ml-2 lg:ml-0 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
                ></path>
              </svg>
            </Link>
          </div>
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <Link
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="/about"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:ml-auto">
            <Link href={loginHref} as="/login">
              <button
                type="button"
                className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
            </Link>
            <Link href={signUpHref} as="/signup">
              <a>
                <Button text="Sign up for free" />
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={!!router.query.login}
        onRequestClose={() => router.push(currentRoute)}
        style={logInModalStyles}
      >
        <LogIn />
      </Modal>
      <Modal
        isOpen={!!router.query.signup}
        onRequestClose={() => router.push(currentRoute)}
        style={signUpModalStyles}
      >
        <SignUp />
      </Modal>
    </>
  );
}
