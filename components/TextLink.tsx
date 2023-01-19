import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type TextLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
};
const TextLink: FC<TextLinkProps> = (props) => {
  return <Link className={`underline ${props.className}`} {...props} />;
};

export default TextLink;
