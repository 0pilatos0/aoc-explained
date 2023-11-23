import React from "react";

type SubTitleProps = {
  title: string;
};

function SubTitle({ title }: Readonly<SubTitleProps>) {
  return (
    <h4 className="text-1xl font-extrabold tracking-tight text-white sm:text-[1.4rem]">
      {title}
    </h4>
  );
}

export default SubTitle;
