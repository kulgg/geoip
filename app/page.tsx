import Image from "next/image";
import InputForm from "./InputForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={"/"}>
        <h1 className="bg-gradient-to-br from-slate-900 to-stone-500 dark:from-white dark:to-stone-300 bg-clip-text text-[39px] font-bold text-transparent sm:text-5xl">
          IP Geo Lookup
        </h1>
      </Link>
      <div className="my-10"></div>
      <InputForm />
    </div>
  );
}
