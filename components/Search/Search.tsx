import { SearchProps } from "../../types/types";
import styles from "./styles.module.css";
import Input from "../Input/Input";
import cn from "classnames";
import { useState } from "react";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const Search: React.FC<SearchProps> = ({
  className,
  ...props
}): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

  const startSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startSearch();
    }
  };

  return (
    <form {...props} className={cn(className, styles.wrapper)} role="search">
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
      />
      <ButtonIcon
        onClick={startSearch}
        className={styles.button}
        appearance="primary"
        aria-label="Искать по сайту"
        icon="search"
      />
    </form>
  );
};

export default Search;
