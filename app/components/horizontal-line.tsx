import React from "react";

type HorizontalLineType = {
  or?: boolean;
};

const HorizontalLine: React.FC<HorizontalLineType> = ({ or }) => {
  return (
    <div className="w-full relative">
      <hr className="bg-slate-300 w-full h-px" />
      {or && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-50 px-4">
          or
        </span>
      )}
    </div>
  );
};

export default HorizontalLine;
