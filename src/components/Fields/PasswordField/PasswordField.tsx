"use client";
import { ChangeEvent, FC, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import Link from "next/link";
import cn from "classnames";

import { emojiRegex } from "@/utils";
import { IconsEnum } from "@/types";
import { Icon } from "@/components";

import { PasswordFieldProps, TypePasswordStrength } from "./PasswordField.type";
import { usePasswordStrength } from "./usePasswordStrength";
import "./PasswordField.scss";

const PasswordField: FC<PasswordFieldProps> = ({
  id,
  label,
  name,
  strength,
  classNames,
  strengthMessage = "Password must be at least 8 characters long, include only Latin letters, one uppercase letter, one number, space symbol mustn't be included",
  helperLink,
  helperText,
  size,
  onChange,
  iconSize = 24,
  ...props
}) => {
  const { field } = useController({ name });
  const { register, setValue, getFieldState, getValues } = useFormContext();
  const { error, isTouched } = getFieldState(name);

  const values = getValues(name);

  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const { passwordStrength, passwordValue, LENGTH_STRENGTH, onHandleChange } =
    usePasswordStrength();

  const typePasswordStrengthClassname = cn({
    [TypePasswordStrength.WEAK]: passwordStrength === 1,
    [TypePasswordStrength.OKAY]: passwordStrength === 2,
    [TypePasswordStrength.STRONG]: passwordStrength === 3,
  });

  const isErrorValidation = isTouched && error;

  const validationClassname = cn({
    ["pass-field--has-error"]: isErrorValidation,
  });

  const inputSizeClassNames = cn({
    ["input--small"]: size === "small",
    ["input--normal"]: size === "normal",
    ["input--large"]: size === "large",
  });

  const inputBaseClassNames = cn("pass-field__input", inputSizeClassNames);

  const onHandleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    event.target.value = event.target.value
      .replace(" ", "")
      .replace(emojiRegex, "");
    setValue(name, event.target.value);
    onHandleChange(event.target.value);
    onChange && onChange(event);
  };

  return (
    <div className={cn("pass-field", validationClassname, classNames)}>
      <label htmlFor={id} className="pass-field__label">
        {label && <p className="pass-field__label-text">{label}</p>}
        <div className="pass-field__holder">
          <input
            {...register(name)}
            {...props}
            id={id}
            name={name}
            type={isVisiblePassword ? "text" : "password"}
            className={inputBaseClassNames}
            onChange={onHandleChangeField}
            onBlur={field.onBlur}
            ref={field.ref}
            autoComplete="off"
          />
          {values?.length ? (
            <Icon
              icon={isVisiblePassword ? IconsEnum.Eye : IconsEnum.Non_eye}
              size={iconSize}
              color="#8E8E93"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
              className="icon"
              removeInlineStyle
            />
          ) : null}
        </div>
      </label>
      {strength && !helperText && values && !isTouched && (
        <p className="pass-field__requirements">{strengthMessage}</p>
      )}
      <div className="pass-field__helper-box">
        {isErrorValidation ? <p className="error">{error.message}</p> : null}
        {helperText && !isErrorValidation ? (
          <p className="helper-text">{helperText}</p>
        ) : null}
        {helperLink ? (
          <Link href={helperLink.href} className="pass-field__helper-link">
            {helperLink.text}
          </Link>
        ) : null}
      </div>
      {strength && passwordValue && values.length && passwordStrength >= 0 ? (
        <div
          className={cn(
            "strength-progress",
            `strength-progress--${typePasswordStrengthClassname}`
          )}
        >
          {Array.from(Array(LENGTH_STRENGTH).keys()).map((item) => (
            <div
              key={item}
              className={cn("strength-progress__item", {
                ["strength-progress__item--active"]: item < passwordStrength,
              })}
            ></div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PasswordField;
