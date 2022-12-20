import { SearchProps } from "../../types/types";
import styles from "./styles.module.css";
import SearchIcon from "../../public/svgs/search.svg";
import Input from "../Input/Input";
import cn from "classnames";
import { useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";

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
    <div {...props} className={cn(className, styles.wrapper)}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        type="button"
        className={styles.button}
        onClick={startSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
