import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link
        href="/"
        className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
      >
        Home
      </Link>
      <hr className="w-full border-[#ffffff] border-opacity-10" />
      <div className="flex flex-col gap-4">{children}</div>
    </>
  );
}
