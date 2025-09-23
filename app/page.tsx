import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: true,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <main>
      <Slider />;
    </main>
  );
}
