import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import Callout from "@/components/Callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

type Props = {
  code: string;
};

export function MdxContent({ code }: Props) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
