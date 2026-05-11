export const APP_ENV: "prod" | "dev" = (() => {
  const value = import.meta.env.VITE_APP_ENV;
  return value === "prod" || value === "dev" ? value : "prod";
})();

export const BASE_API_URL: string =
  import.meta.env.VITE_BASE_API_URL || "https://cab.groshi247.com/api";

export const PARTNERS_EMAIL = "partners@creditup.ua";

export const CREDITUP_HOMEPAGE_URL = "https://creditup.ua/";

export const PRIVACY_POLICY_URL = "https://creditup.ua/privacy";
