import { Button as ShadcnButton } from "@/components/ui/button";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <ShadcnButton onClick={onClick}>{label}</ShadcnButton>;
};

export default Button;
