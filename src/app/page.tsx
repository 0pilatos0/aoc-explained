import Separator from "@/components/separator";
import Year2023 from "@/components/year2023";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[4rem]">
          AOC
        </h1>
        <p className="text-2xl font-extrabold leading-[1] tracking-tight text-white text-opacity-80 sm:text-[2.5rem]">
          Solving and Explaining the Advent of Code
        </p>
      </div>

      <Separator />

      <p>
        the advent of code is a yearly event where you solve 25 programming
        puzzles in the month of december. the puzzles are fun and challenging,
        and i&apos;ve been doing them for a few years now. this year i decided
        to write about my solutions, and explain how i got to them.
      </p>
      <p>
        i&apos;m not a professional puzzle programmer, so i&apos;m sure there
        are better ways to solve these puzzles. but i&apos;m learning a lot, and
        i hope you do too. if you have any questions or suggestions, please
        reach out to me on{" "}
        <a
          href="https://twitter.com/PilatoByte"
          target="_blank"
          className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
        >
          twitter
        </a>
        .
      </p>

      <Separator />

      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/2023"
            className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
          >
            2023
          </Link>
          <Year2023 />
        </li>
        {/* <li>
          <a
            href="/2021/01"
            className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
          >
            2021
          </a>
        </li> */}
      </ul>
    </>
  );
}
