import React, { type ButtonHTMLAttributes } from "react";

type Props = React.PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: Props) {
  return (
    <button className="bg-cc-gray-100 px-6 py-3 rounded-md" {...rest}>
      {children}
    </button>
  );
}
