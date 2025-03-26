'use client';
import React from "react";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/models/login.model";
import { useForm } from "react-hook-form";
import InputField from "./ui/form/input-field";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    redirect("/home")
  };

  const {
    handleSubmit,
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <InputField form={form} name="email" type="text" placeholder="Correo"/>
        <InputField form={form} name="password" type="password" placeholder="Contraseña"/>
        <Button type="submit" className="rounded-full text-md uppercase py-5 -mt-2">
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
