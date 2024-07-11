"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PasswordField, Button } from "@/components";
import { CustomError } from "@/services";
import { updateUserPassword } from "@/lib/actions";

import { FormValues, passwordSchema } from "./validationSchema";
import styles from "./PasswordChange.module.scss";

const initialValues = { password: "", newPassword: "", confirmNewPassword: "" };
const PasswordChange: FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(passwordSchema),
    mode: "onBlur",
  });
  const {
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty, errors },
    reset,
    setError,
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await updateUserPassword(data);
      if (res?.isError) throw new CustomError(res.error);

      reset();
    } catch (error) {
      if (error instanceof CustomError) {
        setError("root.serverError", {
          type: "custom",
          message: error.errorMessage,
        });
      }
    }
  };

  const cancelClick = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["password"]}>
        <PasswordField
          id="password"
          name="password"
          label="Old password"
          aria-label="Confirm password input field"
          placeholder="Re-enter your password"
          classNames={`${styles["password__input"]} ${styles["input"]}`}
        />
        <PasswordField
          id="newPassword"
          name="newPassword"
          label="New password"
          aria-label="Password input field"
          placeholder="Enter your password"
          classNames={`${styles["password__input"]} ${styles["input"]}`}
          strength
        />
        <PasswordField
          id="confirmNewPassword"
          name="confirmNewPassword"
          label="Repeat new password"
          aria-label="Confirm password input field"
          placeholder="Re-enter your password"
          classNames={`${styles["password__input"]} ${styles["input"]}`}
        />
        <div className={styles["buttons"]}>
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={!isValid}
            fullWidth
            classNames={`${styles["button"]} ${styles["button--mob"]}`}
            aria-label="Submit form button"
          >
            Save changes
          </Button>
          <Button
            type="button"
            isLoading={isSubmitting}
            onClick={cancelClick}
            disabled={!isDirty}
            fullWidth
            classNames={`${styles["button"]} ${styles["button--mob"]}`}
            aria-label="Submit form button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={!isValid}
            fullWidth
            size="large"
            classNames={`${styles["button"]} ${styles["button--desc"]}`}
            aria-label="Submit form button"
          >
            Save changes
          </Button>
          <Button
            type="button"
            isLoading={isSubmitting}
            onClick={cancelClick}
            disabled={!isDirty}
            size="large"
            fullWidth
            classNames={`${styles["button"]} ${styles["button--desc"]}`}
            aria-label="Submit form button"
          >
            Cancel
          </Button>
        </div>
        {errors.root?.serverError ? (
          <p
            className={`${styles["error"]} text-error-primary-light dark:text-error-primary-dark`}
          >
            {errors.root?.serverError.message}
          </p>
        ) : null}
      </form>
    </FormProvider>
  );
};

export default PasswordChange;
