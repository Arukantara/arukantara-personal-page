import Image from 'next/image';

export default function Blog() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans stars-bg">
      <main className="w-full max-w-3xl flex-col text-center py-32 px-16 bg-black-tp sm:items-start text-black dark:text-white z-1">
        <h1 className="text-lg">Arukantara's blog</h1>
        <p>Day 1</p>
      </main>
    </div>
  );
}
