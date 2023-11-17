import React from "react";
import Results from "./Results";
import Link from "next/link";

async function Result({ params: { ip } }: { params: { ip: string } }) {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="bg-gradient-to-br from-slate-900 to-stone-500 dark:from-white dark:to-stone-300 bg-clip-text text-[39px] font-bold text-transparent sm:text-5xl">
          IP Geo Lookup
        </h1>
      </Link>
      <div className="my-20"></div>
      <div>
        <Results ip={ip} />
      </div>
    </div>
  );
}

export default Result;
