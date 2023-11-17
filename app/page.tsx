import Image from "next/image";
import InputForm from "./InputForm";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        IP Geo Lookup
      </h1>
      <InputForm />
    </div>
  );
}
