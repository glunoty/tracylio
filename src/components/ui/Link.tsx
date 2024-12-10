import { ArrowUpRight } from "lucide-react";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface Link extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "default" | "group" | "labeledIcon";
}

function Link({ children, variant = "default", ...props }: Link) {
  const icon =
    variant === "labeledIcon" ? (
      <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1" />
    ) : (
      ""
    );
  const linkVariant =
    variant === "default"
      ? "underline hover:text-primary"
      : variant === "group"
      ? "group"
      : variant === "labeledIcon"
      ? "group text-primary flex items-center gap-2 w-fit"
      : "";

  return (
    <a className={linkVariant} {...props}>
      {children}
      {icon}
    </a>
  );
}

export default Link;
