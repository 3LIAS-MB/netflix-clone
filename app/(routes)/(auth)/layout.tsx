import { Logo } from "@/components/Shared/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <div className="relative h-full">
        <div className="absolute w-full h-full min-h-screen bg-black -z-10">
          <div className="bg-[url('/login-bg.jpg')] h-full opacity-40 bg-no-repeat bg-cover" />
        </div>
        <div className="px-8 py-5 mx-auto max-w-7xl">
          <Logo />
        </div>
        <div className="w-full h-full max-w-md mx-auto">
          <div className="py-16 bg-black/70 px-14">{children}</div>
        </div>
      </div>
    </div>
  );
}

// revisado