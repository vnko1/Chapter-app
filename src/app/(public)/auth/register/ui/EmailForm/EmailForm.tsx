"use client";
import React, { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { LinksEnum } from "@/types";
import { CustomError } from "@/services";
import { Button, TextField } from "@/components";
import { emailCreate } from "@/lib/actions";

import { ErrorApi } from "@/app/ui";
import styles from "../Form.module.scss";
import { EmailFormProps } from "./EmailForm.type";
import { EmailFormValue, emailSchema } from "./validationSchema";

const EmailForm: FC<EmailFormProps> = ({ setUserId, setEmail }) => {
  const methods = useForm<EmailFormValue>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    resolver: zodResolver(emailSchema),
  });
  const { formState, handleSubmit, setError, clearErrors } = methods;
  const { isSubmitting, isDirty, isValid } = formState;
  const { push } = useRouter();

  const onHandleSubmit: SubmitHandler<EmailFormValue> = async ({ email }) => {
    try {
      const res = await emailCreate(email);
      if (res && res.isError) throw new CustomError(res.error);

      setEmail(email);
      setUserId(res.data.userId);
    } catch (error) {
      if (error instanceof CustomError) {
        const [message, serviceMessage] = error.errorMessage.split("; ");
        if (typeof serviceMessage === "string") {
          setError("root.serverError", {
            message,
            type: "custom",
          });
          if (serviceMessage.endsWith("unconfirmed")) {
            return setTimeout(() => {
              clearErrors("root");
              setEmail(email);
              setUserId(error.data?.userId ?? null);
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
