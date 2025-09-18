import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, type buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";

// extend Button’s props + add "to"
export interface ButtonNavigateProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  to: string;
}

export function ButtonNavigate({ to, onClick, ...props }: ButtonNavigateProps) {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (onClick) onClick(e);
    if (!e.defaultPrevented) {
      navigate(to);
    }
  }

  return <Button onClick={handleClick} {...props} />;
}
