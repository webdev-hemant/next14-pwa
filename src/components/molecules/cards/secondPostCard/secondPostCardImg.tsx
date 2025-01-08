"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

const SecondPostCardImg = (props: IProps) => {
  const { src, alt, width, height } = props;

  const handleDoubleClick = () => {
    alert("Button was double-clicked!");
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
