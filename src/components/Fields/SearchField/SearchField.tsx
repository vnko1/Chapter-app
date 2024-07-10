"use client";
import { ChangeEvent, FC } from "react";
import { useController } from "react-hook-form";
import cn from "classnames";

import { Icon } from "@/components";
import { IconsEnum } from "@/types";

import { SearchFieldProps } from "./SearchField.type";
import "./SearchField.scss";

const SearchField: FC<SearchFieldProps> = ({
  classNames,
  control,
  handleSearch,
  size = "normal",
  ...props
}) => {
  const { field } = useController({ name: "query", control });

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    handleSearch(event.target.value);
  };

  const fieldClassNames = cn(
    "search__field",
    {
      "search__field--small": size === "small",
      "search__field--normal": size === "normal",
      "search__field--large": size === "large",
    },
    classNames
  );

  return (
    <label className="search">
      <input
        {...props}
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        ref={field.ref}
        onChange={onHandleChange}
        type="text"
        className={fieldClassNames}
      />
      <Icon
        size={24}
        icon={IconsEnum.Search}
        removeInlineStyle
        className="search__icon"
      />
    </label>
  );
};

export default SearchField;
