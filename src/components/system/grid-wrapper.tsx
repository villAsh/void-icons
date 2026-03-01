import { cn } from "@/lib/utils";

interface Props {
  bgSize?: string;
}
export const GridWrapper = ({ bgSize = "bg-size-[24px_24px]" }: Props) => {
  return (
    <div
      className={cn(
        "absolute top-0 inset-0 pointer-events-none z-0",
        "bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)]",
        "dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]",
        bgSize,
      )}
    />
  );
};
