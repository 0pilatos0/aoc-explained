import Separator from "@/components/separator";
import Image from "next/image";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
        >
          Home
        </Link>

        <Image src={"/aoc.png"} width={60} height={60} alt="AOC Logo" />
      </div>
      <Separator />

      <div className="flex flex-col gap-4">{children}</div>
    </>
  );
}
