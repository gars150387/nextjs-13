import SearchBarComponent from "./SearchBar";
import Styles from "./posts.module.css";
import ReturnButton from "./ReturnButton";

export default function PostsLayout({ children }) {
  return (
    <div>
      <header className={Styles.header}>
        <SearchBarComponent className={Styles.searchBar} />
      </header>
      <div className={Styles.children}>
        <div className={Styles.title}>
          <small>Home &bull; Posts</small>
          <ReturnButton />
        </div>
        {children}
        <hr />
      </div>
    </div>
  );
}
