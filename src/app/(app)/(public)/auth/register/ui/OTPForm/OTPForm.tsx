"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { IconsEnum, LinksEnum } from "@/types";
import { CustomError } from "@/services";
import { Button, Icon, TextField } from "@/components";
import { emailConfirm } from "@/lib/actions";

import { ErrorMessage } from "@/app/(app)/ui";
import { ResentOTP } from "..";
import styles from "../Form.module.scss";
import { OTPFormValue, OTPSchema } from "./validationSchema";
import { OTPFormProps } from "./OTPForm.type";

const OTPForm: FC<OTPFormProps> = ({ email, userId }) => {
  const { push } = useRouter();

  const methods = useForm<OTPFormValue>({
    defaultValues: { otp: "" },
    mode: "onChange",
    resolver: zodResolver(OTPSchema),
  });

  const { formState, handleSubmit, setError } = methods;
  const { isSubmitting, isDirty, isValid } = formState;

  const onHandleSubmit: SubmitHandler<OTPFormValue> = async ({ otp }) => {
    try {
      const res = await emailConfirm({
        otp,
        userId,
      });
      if (res && res.isError) throw new CustomError(res.error);
      push(LinksEnum.ACCOUNT_CREATION + "/" + res.data.userId);
    } catch (error) {
      if (error instanceof CustomError) {
        setError("root.serverError", {
          message: error.errorMessage,
          type: "custom",
        });
      }
    }
  };

  return (
    <>
      <div className={styles["user-data"]}>
        <p
          className={`${styles["email"]} text-text-primary-light dark:text-text-primary-dark`}
        >
          {email}
          <Icon
            icon={IconsEnum.Ok}
            size={24}
            removeInlineStyle
            className="stroke-primary-default-light dark:stroke-primary-default-dark"
          />
        </p>
        <p
          className={`${styles["info"]} text-text-subtitle-light dark:text-text-subtitle-dark`}
        >
          We just sent you a temporary sign code. Please check your inbox and
          paste code below.
        </p>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onHandleSubmit)}
          className={styles["form"]}
        >
          <TextField
            id="otp"
            name="otp"
            label="Sign up code"
            helperText="It may take up to 2 minutes for the code to be sent."
            aria-label="OTP input field"
            classNames={styles["form__field"]}
          />
          <ResentOTP email={email} />
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
          <ErrorMessage error={formState.errors.root?.serverError.message} />
        </form>
      </FormProvider>
    </>
  );
};

export default OTPForm;
