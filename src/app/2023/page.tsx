"use client";

import Year2023 from "@/components/year2023";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

function page() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-1xl font-extrabold tracking-tight text-white sm:text-[2rem]">
        2023 Solutions and Explanations
      </h3>
      <p>
        Each day the new puzzle will be released at 00:00 EST (UTC-5). I will
        try to solve the puzzle as soon as possible, and write a blog post about
        it. but I can&apos;t promise anything.
      </p>

      <hr className="w-full border-[#ffffff] border-opacity-10" />
      <p>
        For the challange of this year ill be using a template i made to speed
        up the initial setup each day, the setup is using the bun runtime for
        easy support for typescript. In the template the initial setup of
        loading the input file and parsing it is already done, so i can focus on
        the challange itself.
      </p>
      <p>
        The template is available on my github repo{" "}
        <a
          href="https://github.com/0pilatos0/adventofcode/tree/master/template"
          target="_blank"
          className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
        >
          here
        </a>
        . Feel free to use it if you want.
      </p>

      <p>
        At the top of the setup file is a constant to switch between the test
        input and the real input. The test input is a small input that is used
        to test the solution, and the real input is the actual input for the
        challange. The test input is usually a small subset of the real input,
        and is used to test the solution before running it on the real input.
      </p>

      <CodeBlock
        text="const USETESTINPUT = false;"
        language="typescript"
        theme={dracula}
      />

      <hr className="w-full border-[#ffffff] border-opacity-10" />

      <Year2023 />
    </div>
  );
}

export default page;
