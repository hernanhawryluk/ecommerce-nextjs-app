import React from "react";

interface HeadingProps {
  title: string;
  center?: boolean;
  custom?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, center, custom }) => {
  return (
    <div className={`${custom} ${center ? "text-center" : "text-start"}`}>
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
};

export default Heading;
