import { PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<{
  caption: string;
}>;

function Wrapper({ children, caption }: WrapperProps) {
  return (
    <div>
      <figure>
        {children}
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}

export { Wrapper as default };
