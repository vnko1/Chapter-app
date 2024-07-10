"use client";
import { ChangeEvent, FC } from "react";
import { useController } from "react-hook-form";
import cn from "classnames";

import { Icon } from "@/components";
import { IconsEnum } from "@/types";

import styles from "./SearchField.module.scss";
import { SearchFieldProps } from "./SearchField.type";

const SearchField: FC<SearchFieldProps> = ({
  classNames,
  control,
  handleSearch,
  size,
  ...props
}) => {
  const { field } = useController({ name: "query", control });

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    handleSearch(event.target.value);
  };

  return (
    <label className={`search ${classNames}`}>
      <Icon size={24} icon={IconsEnum.Search} />
      <input
        {...props}
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        ref={field.ref}
        onChange={onHandleChange}
        type="text"
        className="search__field"
      />
    </label>
  );
};

export default SearchField;
