import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import styles from './page.module.scss'; // Você precisará criar este arquivo scss

export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1>Bem-vindo ao TravelGlobal</h1>
        <p>Sua próxima experiência inesquecível começa aqui.</p>
        <Link href="/destinos" style={{ 
          display: 'inline-block', 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#1a2a6c', 
          color: '#fff', 
          borderRadius: '5px' 
        }}>
          Ver Destinos
        </Link>
      </section>
    </Layout>
  );
}