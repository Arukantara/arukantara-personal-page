import Drawings from '@/components/drawings/drawings';
import Stars from '@/components/stars/stars';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans stars-bg">
      <Stars/>
      <Drawings/>
      <main className="w-full max-w-3xl flex-col text-center py-32 px-16 bg-black-tp sm:items-start text-black dark:text-white z-1">
        <h1 className="text-lg">Arukantara's playground (WIP)</h1>
        <p className="my-10">いらっしゃいませ!</p>
        <p>No os toméis esto en serio, I'll just do what I want here :)</p>
        <p>Das erstes Mal, dass ich einen personelle Web in React mache</p>
        <p>Expect linguistic chaos here.</p>
      </main>
    </div>
  );
}
