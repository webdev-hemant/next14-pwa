"use client";

import { Dispatch, SetStateAction } from "react";

// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  setLike: Dispatch<SetStateAction<number>>;
}

const SecondPostCardImg = (props: IProps) => {
  const { src, alt, width, height, setLike } = props;

  const handleDoubleClick = () => {
    setLike((prev) => prev + 1);
  };

  return (
    <div onDoubleClick={() => handleDoubleClick()}>
      <img
        className="w-full cursor-pointer"
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default SecondPostCardImg;
