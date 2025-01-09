export const allRoutes = {
  HOME: "/",
  SETTINGS: "/settings",
  PROFILE: (id: string) => `/profile/${id}`,
  SEARCH: (id?: string) => `/search${id ? "/" + id : ""}`,
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  FORGOT_PASSWORD: "/auth/forgot-password",
  DEMO: "/demo",
};
