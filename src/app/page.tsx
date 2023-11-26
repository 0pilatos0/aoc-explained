import Separator from "@/components/separator";
import SubTitle from "@/components/subTitle";
import Year2023 from "@/components/year2023";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            AOC
          </h1>
          <p className="text-2xl font-extrabold leading-[1] tracking-tight text-white text-opacity-80 sm:text-[2.5rem]">
            Solving and Explaining the Advent of Code
          </p>
        </div>
        <Image
          src={"/aoc.png"}
          width={100}
          height={100}
          alt="AOC Logo"
          className="hidden md:block"
        />
      </div>

      <Separator />

      <SubTitle title="Unraveling the Challenge" />
      <p>
        The Advent of Code, an annual event, invites you to tackle 25 intriguing
        programming puzzles throughout December. These puzzles promise both fun
        and challenge. Having immersed myself in this coding adventure for
        several years, I&apos;ve decided to document my journey this time. My
        goal is to not just present solutions but to guide you through the
        process that led me to them.
      </p>

      <SubTitle title="Learning Through Exploration" />
      <p>
        While I may not be a seasoned puzzle programmer, this endeavor has been
        a remarkable learning experience. There&apos;s always room for
        improvement, and I&apos;m eager to share my discoveries with you. As we
        navigate through these puzzles together, I hope you find not only
        solutions but valuable insights. If you have questions or suggestions,
        don&apos;t hesitate to connect with me on Twitter.
      </p>

      <Separator />
      <SubTitle title="Solutions" />
      <p>
        Each day&apos;s puzzle solution will be crafted using Typescript and
        executed with the Bun runtime. Curious about this year&apos;s setup?
        Check out the details on the{" "}
        <Link
          href={"/2023"}
          className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
        >
          2023
        </Link>{" "}
        Page. For more insights into the Bun runtime, explore bun.sh.
      </p>

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
