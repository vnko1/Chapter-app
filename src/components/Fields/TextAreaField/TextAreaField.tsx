"use client";
import { FC, ChangeEvent } from "react";
import { useController, useFormContext } from "react-hook-form";
import cn from "classnames";

import { Icon } from "@/components";

import { TextAreaFieldProps } from "./TextAreaField.type";
import "./TextAreaField.scss";

const TextAreaField: FC<TextAreaFieldProps> = ({
  id,
  classNames,
  label,
  name,
  inputClassNames,
  size = "normal",
  iconSize = 24,
  icon,
  iconClassNames,
  onChange,
  ...props
}) => {
  const { field, fieldState } = useController({ name });
  const { register } = useFormContext();

  const { error, isTouched } = fieldState;

  const isErrorValidation = isTouched && error;

  const validationClassnames = cn({
    ["text-field--has-error"]: isErrorValidation,
  });

  const inputSizeClassNames = cn(
    {
      ["input--small"]: size === "small",
      ["input--normal"]: size === "normal",
      ["input--large"]: size === "large",
    },
    { ["icon"]: !!icon }
  );

  const inputBaseClassNames = cn(
    "text-field__input",
    inputSizeClassNames,
    inputClassNames
  );

  const onHandleChangeField = (event: ChangeEvent<HTMLTextAreaElement>) => {
    field.onChange(event);
    onChange && onChange(event);
  };

  return (
    <div className={cn("text-area-field", validationClassnames, classNames)}>
      <label className="text-area-field__label">
        {label && <span className="text-area-field__label-text">{label}</span>}
        <span className="text-area-field__holder">
          <textarea
            {...register(name)}
            {...props}
            id={id}
            name={field.name}
            value={field.value}
            onChange={onHandleChangeField}
            onBlur={field.onBlur}
            ref={field.ref}
            className={inputBaseClassNames}
            autoComplete="off"
          />

          {icon ? (
            <Icon
              icon={icon}
              size={iconSize}
              removeInlineStyle
              className={`icon ${iconClassNames}`}
            />
          ) : null}
        </span>
      </label>
      <div className="text-area-field__helper-box">
        {isErrorValidation ? <p className="error">{error.message}</p> : null}
      </div>
    </div>
  );
};
export default TextAreaField;
