"use client";
import { FC, ChangeEvent } from "react";
import { useController, useFormContext } from "react-hook-form";
import cn from "classnames";

import { Icon } from "@/components";
import { IconsEnum } from "@/types";

import { TextFieldProps } from "./TextField.type";
import "./TextField.scss";

const TextField: FC<TextFieldProps> = ({
  id,
  classNames,
  label,
  name,
  type = "text",
  showSuccessIcon = false,
  helperText,
  size = "normal",
  iconSize = 24,
  leftIcon,
  rightIcon,
  onChange,
  ...props
}) => {
  const { field, fieldState } = useController({ name });
  const { register } = useFormContext();

  const { error, isTouched } = fieldState;

  const values = field.value;

  const isSuccessValidation = isTouched && !error;
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
    { ["left-icon"]: !!leftIcon },
    { ["right-icon"]: !!rightIcon }
  );

  const inputBaseClassNames = cn("text-field__input", inputSizeClassNames);

  const onHandleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    onChange && onChange(event);
  };

  return (
    <div className={cn("text-field", validationClassnames, classNames)}>
      <label className="text-field__label">
        {label && <span className="text-field__label-text">{label}</span>}
        <span className="text-field__holder">
          <input
            {...register(name)}
            {...props}
            id={id}
            name={field.name}
            value={field.value}
            type={type}
            onChange={onHandleChangeField}
            onBlur={field.onBlur}
            ref={field.ref}
            className={inputBaseClassNames}
            autoComplete="off"
          />
          {leftIcon ? (
            <Icon
              icon={leftIcon}
              size={iconSize}
              removeInlineStyle
              className="icon icon--left"
            />
          ) : null}
          {!showSuccessIcon && rightIcon ? (
            <Icon
              icon={rightIcon}
              size={iconSize}
              removeInlineStyle
              className="icon icon--right"
            />
          ) : null}
          {showSuccessIcon && isSuccessValidation ? (
            <Icon
              icon={IconsEnum.Ok}
              size={iconSize}
              removeInlineStyle
              className="icon icon--right"
            />
          ) : null}
        </span>
      </label>
      <div className="text-field__helper-box">
        {isErrorValidation ? <p className="error">{error.message}</p> : null}
        {helperText && !values.length ? (
          <p className="helper-text">{helperText}</p>
        ) : null}
      </div>
    </div>
  );
};
export default TextField;
