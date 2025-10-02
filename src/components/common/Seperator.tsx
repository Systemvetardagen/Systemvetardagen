import React, { FC } from "react";

interface SeperatorProps {
  className?: string;
  reverse?: boolean;
}

const Seperator: FC<SeperatorProps> = ({ className, reverse }) => {
  return reverse ? (
    <div
      className={`h-1 bg-gradient-to-r from-accent via-secondary to-primary ${className}`}
    ></div>
  ) : (
    <div
      className={`h-1 bg-gradient-to-r from-primary via-secondary to-accent ${className}`}
    ></div>
  );
};

export default Seperator;
