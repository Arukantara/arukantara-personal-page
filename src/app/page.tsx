import Star from '../components/star/star';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black stars-bg">
      <Star speed="slow" x="5" color=""/>
      <Star speed="fast" x="10" color="green"/>
      <Star speed="" x="15" color="blue"/>
      <Star speed="" x="80" color="red"/>
      <Star speed="slow" x="90" color=""/>
      <Star speed="slow" x="12" color=""/>
      <Star speed="fast" x="20" color="green"/>
      <Star speed="" x="75" color="blue"/>
      <Star speed="" x="85" color="red"/>
      <Star speed="slow" x="95" color=""/>
      <main className="w-full max-w-3xl flex-col text-center py-32 px-16 bg-white dark:bg-black sm:items-start text-black dark:text-white">
        <h1 className="text-lg">Arukantara's playground (WIP)</h1>
        
        <p>No os toméis esto en serio, I'll just do what I want here :)</p>
        <p>Das erstes Mal, dass ich einen personelle Web in React mache</p>
        <p>Expect linguistic chaos here.</p>
      </main>
    </div>
  );
}
