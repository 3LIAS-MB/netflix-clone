import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";

import { Terms } from "../components/Terms";
import { LoginForm } from "./LoginForm";

export default async function LoginPage() {
  return (
    <div>
      <p className="text-3xl font-bold text-left mb-7">Iniciar sesión</p>

      <LoginForm />
      <div className="mt-5 text-center">
        <Link href="/" className="hover:underline hover:opacity-70">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>

      <div className="flex items-center mt-4 space-x-2">
        <Checkbox id="terms" className="border-white" />
        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Recuérdame
        </label>
      </div>

      <div className="flex gap-1 mt-4">
        <p className="text-white opacity-70">¿Todavía sin Netflix?</p>
        <Link href="/register" className="text-white opacity-1">
          Registrate aquí
        </Link>
      </div>

      <Terms />
    </div>
  );
}

// revisado