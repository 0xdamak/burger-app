import Navigation from "../Navigation";
import Styles from "./SideBar.module.scss";

export default function SideBar() {
  const year = new Date().getFullYear();

  return (
    <div className={Styles.Wrapper}>
      <Navigation />
      <div className={Styles.Footer}>
        &copy; {year} by{" "}
        <a href="https://damak.dev" target="_blank" rel="noreferrer">
          Damak
        </a>
        <br />
        Original concept by{" "}
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          target="_blank"
          rel="noreferrer"
        >
          Maximilian Schwarzmüller
        </a>
      </div>
    </div>
  );
}
