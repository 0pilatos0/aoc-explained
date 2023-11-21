import Year2023 from "@/components/year2023";
import React from "react";

function page() {
  return (
    <>
      <h3 className="text-1xl font-extrabold tracking-tight text-white sm:text-[2rem]">
        2023 Solutions and Explanations
      </h3>
      <p>
        Each day the new puzzle will be released at 00:00 EST (UTC-5). I will
        try to solve the puzzle as soon as possible, and write a blog post about
        it. but I can&apos;t promise anything.
      </p>

      <div className="py-4">
        <Year2023 />
      </div>
    </>
  );
}

export default page;
