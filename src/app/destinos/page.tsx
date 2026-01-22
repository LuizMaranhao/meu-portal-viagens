import { destinos } from '@/data/destinos';
import CardDestino from '@/components/CardDestino/CardDestino';
import Layout from '@/components/Layout/Layout';
import styles from './destinos.module.scss'; // Crie este arquivo SCSS na pasta destinos

export default function DestinosPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Destinos</h1>
        <div className={styles.grid}>
          {destinos.map((destino) => (
            <CardDestino key={destino.id} {...destino} />
          ))}
        </div>
      </div>
    </Layout>
  );
}