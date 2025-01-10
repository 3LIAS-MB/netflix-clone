import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Profiles } from "./components/Profiles";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-full bg-zinc-900">
      <div>
        <h1 className="mb-8 text-5xl">¿Quién eres? Elige tu perfil</h1>
      </div>

      <Profiles users={userNetflix} />
    </div>
  );
}
