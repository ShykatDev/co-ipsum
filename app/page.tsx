import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Slider />;
    </>
  );
}
