import { useTranslations } from "next-intl";

import { MantineColor } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import type { CommonError, CommonErrorCode } from "./types";

function useError<T extends string = never>({
  result,
  error,
}: {
  result?: { i18nKey?: string; title?: string; message?: string };
  error?: Error | CommonError<CommonErrorCode>;
} = {}) {
  type ErrorType = T | CommonErrorCode;
  interface ErrorInterface extends CommonError<ErrorType> {}

  /* ********************************** HOOKS ********************************* */

  const tError = useTranslations("Error");

  /* ***************************** LOCAL VARIABLES **************************** */

  /**
   * Returns a localized object with an error title and message
   * Falls back to generic if error not localized/documented
   * @param err App error object or JS Error
   */
  const formatError = (err: Error | ErrorInterface | null) => {
    const genericTitle = tError.has("APP_ERR_GENERIC.title")
      ? tError("APP_ERR_GENERIC.title")
      : "Error";
    const genericMessage = tError.has("APP_ERR_GENERIC.message")
      ? tError("APP_ERR_GENERIC.message")
      : "An error has occurred";

    const resolvedError = error ?? err;
    let title = result?.title ?? genericTitle;
    let message = result?.message ?? genericMessage;
    const code =
      (resolvedError as ErrorInterface)?.code ??
      (resolvedError as Error)?.message;
    if (tError.has(`${code}`)) {
      title = result?.title ?? tError(`${code}.title`, { defaultValue: title });
      message =
        result?.message ?? tError(`${code}.message`, { defaultValue: message });
    }
    return { title, message };
  };

  /* ***************************** IMPLEMENTATION ***************************** */
  /**
   * Displays a standard notification toaster (with overriden theme red color that
   * can be replaced with another color, ex: 'orange' for warnings) and localized
   * labels
   * @param err App error object or JS Error
   */
  const notifyError = (
    err: Error | ErrorInterface,
    clr?: MantineColor | string
  ) => {
    const { title, message } = formatError(error ?? err);
    const color: MantineColor = clr ?? "red";
    showNotification({
      title,
      message,
      color,
    });
    if (err instanceof Error) {
      console.debug(err);
    } else if ((err as unknown as ErrorInterface).code) {
      console.debug((err as unknown as ErrorInterface).code);
    }
  };

  return { formatError, notifyError } as {
    formatError: (err: Error | CommonError<T | CommonErrorCode> | null) => {
      title: string;
      message: string;
    };
    notifyError: (
      err: Error | CommonError<T | CommonErrorCode>,
      clr?: MantineColor | string
    ) => void;
  };
}

export default useError;
