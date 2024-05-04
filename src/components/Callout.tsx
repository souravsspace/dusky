import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
};

export default function Callout({
  children,
  type = "default",
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "boder-l-4 my-6 w-full items-start rounded-md border p-4 dark:max-w-none",
        {
          "dark:prose border-yellow-900 bg-yellow-50": type === "warning",
          "dark:prose border-red-900 bg-red-50": type === "danger",
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
}
