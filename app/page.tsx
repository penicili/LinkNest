"use client";
import MainButton from "@/components/MainButton";
import { useRouter } from "next/navigation";
import ToggleTheme from "@/components/ToggleTheme";

export default function Page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="bg-[var(--background)] h-screen flex items-center justify-center">
      <div className="text-center flex flex-col items-center">
        {/* Hero Heading */}
        <div className="flex flex-col mb-4">
          <h1 className="text-6xl font-bold">LinkNest</h1>
          <h2 className="text-2xl mt-4">Store your Links like an mf</h2>
        </div>
        <div className="flex flex-row gap-4 justify-end items-center w-[100%]">
          <MainButton text="Get Started" onClick={handleClick} isSecondary />
          <ToggleTheme/>
        </div>
      </div>
    </div>
  );
}
