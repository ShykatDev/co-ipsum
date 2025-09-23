import { FC, ReactNode } from "react";

const TextContent: FC<{ title?: string | ReactNode }> = ({ title }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[120%] mb-10">
        {title ?? (
          <span>
            Eros augue curabitur <br /> rutrum ibrium
          </span>
        )}
      </h1>
      <span className="text-base sm:text-lg text-[#292929] leading-[150%]">
        Connection reesizing strikethrough frame project layer opacity. Rotate
        flatten align link invite plugin. Clip asset ellipse flatten hand align
        editor flatten. Device star union frame text vector. Select rectangle
        style select scrolling bold boolean.
      </span>
    </>
  );
};

export default TextContent;
