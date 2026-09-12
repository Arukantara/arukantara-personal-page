import Image from 'next/image';
import styles from './gallery.module.scss';

export default function Gallery() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black z-2">
      <main className="w-full max-w-3xl flex-col text-center py-32 px-16 bg-black-tp sm:items-start text-black dark:text-white z-1">
        <h1 className="text-lg">Gallery</h1>
        <p className="my-10">Implement floating gallery here</p>
        <Image src="./sketches/mitsuru-w.png" width={200} height={200} alt="Dibujo de Kirijo Mitsuru" unoptimized className={'fixed ' + styles['drawing-left']}/>
        <Image src="./sketches/link-w.png" width={200} height={200} alt="Dibujo de Link" unoptimized className={'fixed ' + styles['drawing-center']}/>
        <Image src="./sketches/gatos-w.png" width={200} height={200} alt="Dibujo de Café y Mocha" unoptimized className={'fixed ' + styles['drawing-right']}/>
        <Image src="./sketches/hoot-rat.png" width={100} height={100} alt="Hoot-rat" unoptimized className={'fixed ' + styles['drawing-bottom']}/>
      </main>
    </div>
  );
}
