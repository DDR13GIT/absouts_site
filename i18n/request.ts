// Minimal placeholder — real i18n configuration (locales, message loading,
// routing) is implemented in a later task. This file exists only to satisfy
// the next-intl/plugin import reference in next.config.ts at build time.
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => ({
  locale: "en",
  messages: {},
}));
