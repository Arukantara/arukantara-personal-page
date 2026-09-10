import Image from 'next/image';

export default function Drawings() {
  return (
    <div className="drawings">
      <Image src="./sketches/mitsuru-w.png" width={200} height={200} alt="Dibujo de Kirijo Mitsuru" unoptimized className='fixed drawing-left'/>
      <Image src="./sketches/link-w.png" width={200} height={200} alt="Dibujo de Link" unoptimized className='fixed drawing-center'/>
      <Image src="./sketches/gatos-w.png" width={200} height={200} alt="Dibujo de Café y Mocha" unoptimized className='fixed drawing-right'/>
    </div>
  );
}