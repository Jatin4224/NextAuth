import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form !
    </CardWrapper>
  );
};
