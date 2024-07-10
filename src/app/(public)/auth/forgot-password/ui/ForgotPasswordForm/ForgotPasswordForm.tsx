"use client";
import React, { FC } from "react";
import { ForgotPasswordFormProps } from "./ForgotPasswordForm.type";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextField, Button } from "@/components";
import { CustomError } from "@/services";
import { resetPassword } from "@/lib/actions";

import { forgotSchema, FormValues } from "./validationSchema";
import styles from "./ForgotPasswordForm.module.scss";

const defaultValues = { email: "" };

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ setSubmitted }) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(forgotSchema),
    defaultValues,
    mode: "onChange",
  });
  const {
    formState: { isDirty, isSubmitting, isValid },
    handleSubmit,
    setError,
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await resetPassword(data.email);
      if (res?.isError) throw new CustomError(res.error);
      setSubmitted(true);
    } catch (error) {
      if (error instanceof CustomError) {
        setError("email", { type: "onChange", message: error.errorMessage });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        <TextField
          id="email"
          name="email"
          label="Your email"
          placeholder="Enter your email"
          classNames={styles["form__field"]}
        />
        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting || !isValid || !isDirty}
          classNames={styles["form__button"]}
        >
          Restore my password
        </Button>
      </form>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
