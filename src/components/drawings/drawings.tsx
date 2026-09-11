import Image from 'next/image';
import styles from './drawings.module.scss';

export default function Drawings() {
  return (
    <div className={styles.drawings}>
      <Image src="./sketches/mitsuru-w.png" width={200} height={200} alt="Dibujo de Kirijo Mitsuru" unoptimized className={'fixed ' + styles['drawing-left']}/>
      <Image src="./sketches/link-w.png" width={200} height={200} alt="Dibujo de Link" unoptimized className={'fixed ' + styles['drawing-center']}/>
      <Image src="./sketches/gatos-w.png" width={200} height={200} alt="Dibujo de Café y Mocha" unoptimized className={'fixed ' + styles['drawing-right']}/>
      <Image src="./sketches/hoot-rat.png" width={100} height={100} alt="Hoot-rat" unoptimized className={'fixed ' + styles['drawing-bottom']}/>
    </div>
  );
}