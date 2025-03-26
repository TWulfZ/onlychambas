import OnlyChambasLogo from "@/components/icons";
import LoginForm from "@/components/login-form";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex">
        <div className="flex flex-col items-center w-[49.3%] bg-primary gap-2 text-white h-min-screen py-20  bg-logo">
          <div className="mx-auto w-80 h-full">
            <OnlyChambasLogo className="w-72 h-12" primaryColor={"rgba(255,255,255,0.8)"} secondaryColor={"#fff"} />
            <p className="text-[1.8rem] font-medium ">Regístrate para apoyar a tus chambeadores favoritos.</p>
          </div>
        </div>
        {/* Form */}
        <div className="flex flex-col items-center w-[50.7%] text-foreground h-screen py-[4.25rem] pr-4">
          <div className="mx-auto w-[21.5rem] h-full">
            <h1 className="text-sm font-semibold mb-4">Iniciar sesión</h1>
            <LoginForm />
            <p className="text-[0.72rem] text-muted-foreground mt-2 px-3 text-wrap">
              Al iniciar sesión y usar OnlyChambas, aceptas nuestros{" "}
              <Link href="/terms" className="text-primary font-semibold">
                Términos de servicio y Política de privacidad
              </Link>
              , y confirmas que tienes al menos 18 años.
            </p>
            <section className="flex flex-col items-center text-[0.9rem] text-primary py-[30px]">
              <Link href="/reset-password">
                ¿Has olvidado la contraseña?
              </Link>
              <Link href="/register">
                Regístrate para OnlyChambas
              </Link>
            </section>
            {/* Login Methods */}
            <section>
              
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
