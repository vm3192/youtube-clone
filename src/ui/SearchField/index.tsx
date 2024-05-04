"use client";

import React, {
  ChangeEvent,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import styles from "@/ui/SearchField/index.module.scss";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

type Props = {};

const SearchField: FC<Props> = () => {
  const [searchValue, setSearchValue] = useState("");
  const params = new URLSearchParams();
  const { replace } = useRouter();

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === "Enter" && searchValue.length > 1) {
      params.set("q", searchValue);
      replace(`/search/?${params}`);
      setSearchValue("");
    }
  };

  const handleSearchClick: MouseEventHandler = (event) => {
    if (searchValue.length > 1) {
      params.set("q", searchValue);
      replace(`/search/?${params}`);
      setSearchValue("");
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchInput}
        onKeyDown={handleKeyPress}
      />
      <CiSearch
        className={styles.searchIcon}
        style={{ color: "#ccc" }}
        onClick={handleSearchClick}
      />
    </form>
  );
};

export default SearchField;
