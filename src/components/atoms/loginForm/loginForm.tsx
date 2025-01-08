import SocialLogins from "@/components/molecules/SocialLogins/SocialLogins";
import { allRoutes } from "@/constants/allRoutes";
import Link from "next/link";
import { redirect } from "next/navigation";

export const handleLogin = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and Password are required");
  }

  // Simulate login logic
  if (email === "test@example.com" && password === "password123") {
    redirect(allRoutes.HOME);
  } else {
    throw new Error("Invalid credentials");
  }
};

const LoginForm = async ({
  searchParams,
}: {
  searchParams?: { error?: string };
}) => {
  return (
    <div className="w-full my-3 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {searchParams?.error && (
        <div className="text-xl text-red-500 dark:text-white text-center">
          {searchParams.error}
        </div>
      )}
      <SocialLogins />
      <form className="space-y-6 relative">
        <h5 className="text-xl -mb-5 text-center font-medium text-gray-900 dark:text-white">
          OR
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Forgot password?{" "}
          <Link
            href={allRoutes.FORGOT_PASSWORD}
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Reset now!
          </Link>
          <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <Link
              href={allRoutes.SIGNUP}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create now!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
