"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var use_error_exports = {};
__export(use_error_exports, {
  default: () => use_error_default
});
module.exports = __toCommonJS(use_error_exports);
var import_next_intl = require("next-intl");
var import_notifications = require("@mantine/notifications");
function useError({
  result,
  error
} = {}) {
  const tError = (0, import_next_intl.useTranslations)("Error");
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
    (0, import_notifications.showNotification)({
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
//# sourceMappingURL=index.js.map