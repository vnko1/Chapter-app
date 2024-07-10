"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, PasswordField } from "@/components";
import { CustomError } from "@/services";
import { LinksEnum } from "@/types";
import { changePassword } from "@/lib/actions";

import { ChangePasswordFormProps } from "./ChangePasswordForm.type";
import { changeSchema, FormValues } from "./validationSchema";
import styles from "./ChangePasswordForm.module.scss";

const defaultValues = { confirm_password: "", password: "" };

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ otp }) => {
  const router = useRouter();
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(changeSchema),
    mode: "onChange",
  });

  const { formState, handleSubmit, setError } = methods;
  const { isSubmitting, isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<FormValues> = async ({ password }) => {
    try {
      const res = await changePassword({ otp, password });
      if (res && res.isError) throw new CustomError(res.error);
      router.replace(LinksEnum.LOG_IN);
    } catch (error) {
      if (error instanceof CustomError) {
        setError("confirm_password", {
          type: "validate",
          message: error.errorMessage,
        });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <PasswordField
          id="password"
          name="password"
          label="Create password"
          placeholder="Enter your password"
          aria-label="Password field input"
          strength
          strengthMessage="New password must be at least 8 characters, including uppercase letters and special characters and be different from the previous one."
          classNames={styles["form__field"]}
        />
        <PasswordField
          id="confirm_password"
          name="confirm_password"
          aria-label="Confirm password field input"
          label="Confirm password"
          placeholder="Re-enter your password"
          classNames={styles["form__field"]}
          helperText="Both passwords must match"
        />
        <Button
          type="submit"
          aria-label="Submit form button"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting || !isDirty || !isValid}
          classNames={styles["form__button"]}
        >
          Restore my password
        </Button>
      </form>
    </FormProvider>
  );
};

export default ChangePasswordForm;
