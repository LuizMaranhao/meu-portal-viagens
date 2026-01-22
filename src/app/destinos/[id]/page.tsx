import { destinos } from '@/data/destinos';
import Layout from '@/components/Layout/Layout';
import { notFound } from 'next/navigation';
import styles from './detalhes.module.scss'; // Certifique-se que o arquivo existe nesta pasta

// Interface atualizada: params agora deve ser tratada como Promise
interface RouteProps {
  params: Promise<{ id: string }>;
}

// Transformamos a função em 'async' para poder usar o 'await'
export default async function DetalheDestino({ params }: RouteProps) {
  // Aguardamos os parâmetros da URL serem resolvidos pelo Next.js
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Procuramos o destino usando o ID extraído
  const destino = destinos.find((d) => d.id === id);

  // Caso o ID não exista no destinos.ts, redireciona para o 404
  if (!destino) {
    return notFound();
  }

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <img src={destino.imagem} alt={destino.nome} className={styles.mainImage} />
          <div className={styles.titleOverlay}>
            <h1>{destino.nome}</h1>
          </div>
        </section>

        <article className={styles.details}>
          <div className={styles.infoBox}>
            <h2>Sobre o destino</h2>
            <p>{destino.descricao}</p>
          </div>

          <div className={styles.bookingCard}>
            <h3>Reserve sua vaga</h3>
            <p className={styles.price}>Investimento: <strong>{destino.preco}</strong></p>
            <button className={styles.ctaButton}>Confirmar Interesse</button>
          </div>
        </article>
      </div>
    </Layout>
  );
}