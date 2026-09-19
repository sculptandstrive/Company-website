/**
 * Dynamically resolves the User App URL based on the current environment.
 * - In local development (localhost / 127.0.0.1): connects to http://localhost:8081
 * - In production / deployed environment: connects to https://users.sculptandstrive.com
 * Can also be overridden with VITE_USER_APP_URL in .env
 */
export const getUserAppUrl = (): string => {
  if (import.meta.env.VITE_USER_APP_URL) {
    return import.meta.env.VITE_USER_APP_URL;
  }
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.endsWith(".localhost")
    ) {
      return "http://localhost:8081";
    }
  }
  return "https://users.sculptandstrive.com";
};
