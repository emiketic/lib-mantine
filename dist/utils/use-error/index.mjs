import { useTranslations } from "next-intl";
import { showNotification } from "@mantine/notifications";
function useError({
  result,
  error
} = {}) {
  const tError = useTranslations("Error");
  const formatError = (err) => {
    const genericTitle = tError.has("APP_ERR_GENERIC.title") ? tError("APP_ERR_GENERIC.title") : "Error";
    const genericMessage = tError.has("APP_ERR_GENERIC.message") ? tError("APP_ERR_GENERIC.message") : "An error has occurred";
    const resolvedError = error ?? err;
    let title = result?.title ?? genericTitle;
    let message = result?.message ?? genericMessage;
    const code = resolvedError?.code ?? resolvedError?.message;
    if (tError.has(`${code}`)) {
      title = result?.title ?? tError(`${code}.title`, { defaultValue: title });
      message = result?.message ?? tError(`${code}.message`, { defaultValue: message });
    }
    return { title, message };
  };
  const notifyError = (err, clr) => {
    const { title, message } = formatError(error ?? err);
    const color = clr ?? "red";
    showNotification({
      title,
      message,
      color
    });
    if (err instanceof Error) {
      console.debug(err);
    } else if (err.code) {
      console.debug(err.code);
    }
  };
  return { formatError, notifyError };
}
var use_error_default = useError;
export {
  use_error_default as default
};
//# sourceMappingURL=index.mjs.map