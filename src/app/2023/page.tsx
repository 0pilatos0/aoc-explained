"use client";

import Separator from "@/components/separator";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";
import Year2023 from "@/components/year2023";
import Link from "next/link";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

function page() {
  return (
    <>
      <Title title=" 2023 Solutions and Explanations" />
      <p>
        As the clock strikes midnight EST (UTC-5), a new puzzle emerges,
        challenging my coding prowess. While I aim to swiftly conquer each
        puzzle, I can't make promises on the timing of my solutions. However,
        rest assured, once I crack the code, a detailed blog post will follow,
        unraveling the intricacies of the day's challenge.
      </p>

      <Separator />

      <p>
        To streamline my approach, I've crafted a template for this year's
        journey. This template, designed to expedite the initial setup,
        leverages the Bun runtime for seamless Typescript support. By automating
        the loading and parsing of input files, I can direct my focus squarely
        on the puzzle at hand.
      </p>
      <p>
        For those intrigued by the inner workings, the template is available on
        my{" "}
        <Link
          href="https://github.com/0pilatos0/adventofcode/tree/master/template"
          target="_blank"
          className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
        >
          Github repository
        </Link>
        . Feel free to explore and utilize it as you embark on your own coding
        adventures.{" "}
      </p>

      <p>
        At the heart of the template lies a switch – a constant in the setup
        file allowing seamless toggling between the test input and the actual
        challenge input. The test input, a smaller subset for trial and error,
        aids in refining solutions before applying them to the real challenge
        input.
      </p>

      <CodeBlock
        text="const USETESTINPUT = false;"
        language="typescript"
        theme={dracula}
      />

      <Separator />

      <SubTitle title="Solutions and Explanations" />

      <Year2023 />
    </>
  );
}

export default page;
