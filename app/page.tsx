'use client'

import Link from "next/link";

export default function Home() {

  return (
    <div>


      <Link href={`/storage`} className="btn btn-primary">storage</Link>


      <div className="hero bg-base-200 min-h-[calc(100vh-64px)]">

        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Fun.memecoin.tv</h1>
            <p className="py-6">
              Fun and simple memeconomy. Anyone to quickly and easily launch their own meme token without deep technical knowledge.
            </p>
            <Link href={`/home`} className="btn btn-primary">Get Started</Link>
          </div>
        </div>

      </div>



    </div>
  );
}