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
  customErrorMessage,
  additionalLabel,
  onChange,
  size = "normal",
  ...props
}) => {
  const { field, fieldState } = useController({ name });
  const { register } = useFormContext();

  const { error, isTouched } = fieldState;

  const values = field.value;

  const isSuccessValidation = isTouched && !error;
  const isErrorValidation = isTouched && error;

  const validationClassname = cn({
    ["text-field--has-error"]: isErrorValidation,
  });

  const onHandleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    onChange && onChange(event);
  };
  return (
    <div>
      <label>
        <span>
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
          />
        </span>
      </label>
    </div>
  );
};
export default TextField;
