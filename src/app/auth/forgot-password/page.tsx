import ForgotPassForm from "@/components/atoms/forgotPassForm/forgotPassForm";
import { allRoutes } from "@/constants/allRoutes";
import { useServerSession } from "@/hooks/useServerSession";
import { redirect } from "next/navigation";

const ForgotPassword = async () => {
  const session = await useServerSession();

  if (session) {
    redirect(allRoutes.HOME);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center m-4">
      <ForgotPassForm />
    </div>
  );
};

export default ForgotPassword;
