import Link from 'next/link';
import styles from './CardDestino.module.scss';
import { Destino } from '@/data/destinos';

const CardDestino = ({ id, nome, imagem, preco }: Destino) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imagem} alt={nome} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3>{nome}</h3>
        <p className={styles.price}>A partir de <strong>{preco}</strong></p>
        <Link href={`/destinos/${id}`} className={styles.button}>
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default CardDestino;