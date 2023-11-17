import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto px-4 md:px-2 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
