import { ReactNode } from "react";

interface Heading {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  variant?: "default" | "link";
}

function Heading({ as: Tag = "h1", children, variant = "default" }: Heading) {
  const star = Tag === "h1" || Tag === "h2" ? "*" : "";
  const starTag = <span className="text-primary">{star + " "}</span>;
  const headingVariant =
    variant === "link" ? "group-hover:text-primary underline" : "";

  return (
    <Tag className={headingVariant}>
      {starTag}
      {children}
    </Tag>
  );
}

export default Heading;
