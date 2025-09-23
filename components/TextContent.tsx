import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";

const TextContent: FC<{
  title?: string | ReactNode;
  headingClassName?: string;
  breifClassName?: string;
}> = ({ title, headingClassName, breifClassName }) => {
  return (
    <>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold leading-[120%] mb-10  max-w-screen md:max-w-[500px]",
          headingClassName
        )}
      >
        {title ?? (
          <span>
            Eros augue curabitur <br /> rutrum ibrium
          </span>
        )}
      </h2>
      <span
        className={cn(
          "text-base sm:text-lg text-[#292929] leading-[150%] max-w-screen md:max-w-[500px]",
          breifClassName
        )}
      >
        Connection reesizing strikethrough frame project layer opacity. Rotate
        flatten align link invite plugin. Clip asset ellipse flatten hand align
        editor flatten. Device star union frame text vector. Select rectangle
        style select scrolling bold boolean.
      </span>
    </>
  );
};

export default TextContent;
