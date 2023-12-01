import Countdown from "@/components/countdown";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { redirect } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "AOC Explained",
  description: "Solving and Explaining the Advent of Code",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("https://github.com/0pilatos0/adventofcode");
  return (
    <html lang="en">
      <script
        async
        src="https://analytics.paulvanderlei.com/script.js"
        data-website-id="3fed5c7f-03cf-467e-88ec-31bb6bddc6af"
      ></script>
      <body
        className={`font-sans ${inter.variable}`}
        style={{ background: "#0b0b0b" }}
      >
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#0b0b0b] to-[#191919]  text-white">
          <Countdown />

          <div className="container flex max-w-[1200px] flex-col justify-center gap-6 px-4 py-16">
            {children}
            {/* Footer */}
            <hr className="w-full border-[#ffffff] border-opacity-10" />
            <div className="flex justify-between gap-4">
              <p className="text-sm font-extrabold leading-[1] tracking-tight text-white text-opacity-80 sm:text-[1rem]">
                Made by{" "}
                <a
                  href="https://paulvanderlei.com"
                  target="_blank"
                  className="text-[#ff0000] hover:text-[#ff0000] hover:underline"
                >
                  Paul van der Lei
                </a>
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/0pilatos0/aoc-explained"
                  target="_blank"
                  className="text-[#943838] hover:text-[#ff0000] hover:underline"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/paul-vanderlei/"
                  target="_blank"
                  className="text-[#943838] hover:text-[#ff0000] hover:underline"
                >
                  Linkedin
                </a>
                <a
                  href="https://twitter.com/PilatoByte"
                  target="_blank"
                  className="text-[#943838] hover:text-[#ff0000] hover:underline"
                >
                  Twitter
                </a>
              </div>
            </div>
            <hr className="w-full border-[#ffffff] border-opacity-10" />
            {/* Disclaimer */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-extrabold leading-[1] tracking-tight text-white text-opacity-80 sm:text-[1rem]">
                <span className="text-[#943838]">Disclaimer:</span> This is not
                an official site for the Advent of Code. I am not affiliated
                with Eric Wastl in any way. I just really like the Advent of
                Code and wanted to share my solutions and explanations.
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
