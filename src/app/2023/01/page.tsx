import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <p>
        As the advent of code 2023 has not started yet, the solution and
        explanation for this day will be posted here as soon as possible.
      </p>
      <p>
        For the puzzles of this year we will be using a template carefully
        crafted to improve our experience, learn more about the setup for this
        year on the{" "}
        <Link
          href="/2023"
          className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
        >
          2023 overview page
        </Link>
      </p>
    </>
  );
}

export default page;
