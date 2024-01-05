import { Gabarito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = Gabarito({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-blue-800">
      <div className="space-y-6 text-white text-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className
          )}
        >
          🔐Authmate
        </h1>
        <p className="text-lg">A simple authentication service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
