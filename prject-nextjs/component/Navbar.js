import Link from "next/link";
import "../styles/globals.css"
import Style from "./Navbar.module.css"

const Links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Posts",
    route: "/posts"
  }
];
export default function NavBarNabigation() {
  return (
    <header className={Style.header}>
      <nav className={Style.navigation}>
        <ul className={Style.li}>
          {Links.map(({label, route}) => {
            return (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
