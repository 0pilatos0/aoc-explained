import React from "react";

type TitleProps = {
  title: string;
};

function Title({ title }: Readonly<TitleProps>) {
  return (
    <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-[2rem]">
      {title}
    </h3>
  );
}

export default Title;
