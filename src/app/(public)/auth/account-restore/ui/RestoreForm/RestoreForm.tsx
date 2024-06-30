import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LinksEnum } from "@/types";
import { removeDataFromSS } from "@/utils";
import { Button, TextField } from "@/components";
import { CustomError } from "@/services";
import { confirmAccountRestore, restoreAccount } from "@/lib/actions";

import { OTPFormValue, OTPSchema } from "./validationSchema";
import { RestoreFormProps } from "./RestoreForm.type";
import styles from "./RestoreForm.module.scss";

const RestoreForm: FC<RestoreFormProps> = ({ email }) => {
  const router = useRouter();
  const methods = useForm<OTPFormValue>({
    defaultValues: { otp: "" },
    mode: "onChange",
    resolver: zodResolver(OTPSchema),
  });

  const onHandleResentOtpClick = async () => {
    try {
      const res = await restoreAccount(email);
      if (res?.isError) throw new CustomError(res.error);
    } catch (error) {
      if (error instanceof CustomError) {
        console.log("🚀 ~ onClick ~ error:", error);
      }
    }
  };

  const {
    handleSubmit,
    setError,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;

  const onHandleSubmit: SubmitHandler<OTPFormValue> = async ({ otp }) => {
    try {
      const res = await confirmAccountRestore(otp);
      if (res?.isError) throw new CustomError(res.error);
      removeDataFromSS("deletedTimeStamp", "email");
      router.push(LinksEnum.LOG_IN);
    } catch (error) {
      if (error instanceof CustomError) {
        setError("otp", { type: "onChange", message: error.errorMessage });
      }
    }
  };

  return (
    <>
      <div className={styles["user-data"]}>
        <h2
          className={`${styles["title"]} text-text-primary-light dark:text-text-primary-dark`}
        >
          The code has been sent to your email.
        </h2>
        <p
          className={`${styles["info"]} text-text-subtitle-light dark:text-text-subtitle-dark`}
        >
          3 attempts per day are provided.
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
            label="Confirmation code"
            aria-label="OTP field input"
            classNames={styles["form__field"]}
          />
          <button
            onClick={onHandleResentOtpClick}
            className={`${styles["form__resent-btn"]} text-link-primary-light dark:text-link-primary-dark`}
            aria-label="Send OTP button"
          >
            Send the code again?
          </button>
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
        </form>
      </FormProvider>
    </>
  );
};

export default RestoreForm;
