import Image from "next/image";
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start text-black dark:text-white">
        <h1>Arukantara's playground</h1>
        <p>No os toméis esto en serio, I'll just do what I want here :)</p>
      </main>
    </div>
  );
}