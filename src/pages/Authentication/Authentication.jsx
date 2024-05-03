import { useForm } from "react-hook-form";
import "./AuthenticationStyled.jsx";
import { AuthContainer, ErrorSpan, Section } from "./AuthenticationStyled.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema.js";
import { signupSchema } from "../../schemas/signupSchema.js";

export default function Authentication() {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const inHandleSubmit = (data) => console.log(data);

  const upHandleSubmit = (data) => console.log(data);

  return (
    <>
      <AuthContainer>
        <Section type="signin">
          <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
            <h2>CLAVICULÁRIO</h2>

            <Input
              type="email"
              placeholder="Email"
              name="email"
              register={registerSignin}
            />
            {errorsSignin.email && (
              <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
            )}
            <Input
              type="password"
              name="password"
              id=""
              placeholder="Senha"
              register={registerSignin}
            />
            {errorsSignin.password && (
              <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
            )}
            <Button type="submit" text="Entrar" />
          </form>
        </Section>
        <Section type="signup">
          <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
            <h2>Cadastrar</h2>
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              register={registerSignup}
            />
            {errorsSignup.name && (
              <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
            )}
            <Input
              type="email"
              placeholder="Email"
              name="email"
              register={registerSignup}
            />
            {errorsSignup.email && (
              <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
            )}
            <Input
              type="password"
              name="password"
              id=""
              placeholder="Senha"
              register={registerSignup}
            />
            {errorsSignup.password && (
              <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
            )}
            <Input
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Confirmar senha"
              register={registerSignup}
            />
            {errorsSignup.confirmPassword && (
              <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
            )}

            <Button type="submit" text="Cadastrar" />
          </form>
        </Section>
      </AuthContainer>
    </>
  );
}
