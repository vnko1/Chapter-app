"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { LinksEnum } from "@/types";
import { CustomError } from "@/services";
import { Button, TextField } from "@/components";

import { ErrorApi } from "@/app/ui";
import { EmailFormProps } from "./EmailForm.type";
import { EmailFormValue, emailSchema } from "./validationSchema";
import styles from "./EmailForm.module.scss";

const EmailForm: FC<EmailFormProps> = ({ setUserId, setEmail }) => {
  const methods = useForm<EmailFormValue>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    resolver: zodResolver(emailSchema),
  });
  const { push } = useRouter();
  const { formState, handleSubmit, setError, clearErrors } = methods;
  const { isSubmitting, isDirty, isValid } = formState;

  const onHandleSubmit: SubmitHandler<EmailFormValue> = async (formValues) => {
    try {
      console.log(
        "🚀 ~ constonHandleSubmit:SubmitHandler<EmailFormValue>= ~ formValues:",
        formValues
      );
      setEmail(formValues.email);
      setUserId("123");
    } catch (error) {
      if (error instanceof CustomError) {
        const [message, serviceMessage] = error.errorMessage.split("; ");
        if (typeof serviceMessage === "string") {
          setError("root.serverError", {
            message,
            type: "custom",
          });
          if (serviceMessage.endsWith("unconfirmed")) {
            setUserId(error.data?.userId ?? null);
            return setTimeout(() => {
              clearErrors("root");
              setEmail(formValues.email);
            }, 2000);
          }
          if (serviceMessage.endsWith("confirmed"))
            return setTimeout(
              () => push(LinksEnum.ACCOUNT_CREATION + "/" + error.data?.userId),
              2000
            );
          if (
            serviceMessage.endsWith("completed") ||
            serviceMessage.endsWith("restoring") ||
            serviceMessage.endsWith("deleted")
          )
            return setTimeout(() => push(LinksEnum.LOG_IN), 2000);
        }
        return setError("root.serverError", {
          message,
          type: "custom",
        });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onHandleSubmit)} className={styles["form"]}>
        <TextField
          id="email"
          name="email"
          label="Your email"
          aria-label="Email input field"
          classNames={styles["form__field"]}
        />
        <Button
          type="submit"
          aria-label="Submit form button"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting || !isDirty || !isValid}
          classNames={styles["form__button"]}
        >
          Create new account
        </Button>
        <ErrorApi error={formState.errors.root?.serverError.message} />
      </form>
    </FormProvider>
  );
};

export default EmailForm;
