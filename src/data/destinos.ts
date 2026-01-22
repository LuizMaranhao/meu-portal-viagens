// Define o contrato dos dados para garantir segurança no código
export interface Destino {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  preco: string;
}

// Mock de dados com destinos turísticos
export const destinos: Destino[] = [
  {
    id: 'paris',
    nome: 'Paris, França',
    descricao: 'A cidade luz, famosa pela Torre Eiffel e gastronomia refinada.',
    imagem: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    preco: 'R$ 4.500'
  },
  {
    id: 'kyoto',
    nome: 'Kyoto, Japão',
    descricao: 'Templos budistas clássicos, jardins imperiais e casas de madeira.',
    imagem: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    preco: 'R$ 7.200'
  },
  {
    id: 'santorini',
    nome: 'Santorini, Grécia',
    descricao: 'Vistas deslumbrantes do Mar Egeu e famosas casas brancas.',
    imagem: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    preco: 'R$ 5.800'
  },
  {
    id: 'machu-picchu',
    nome: 'Machu Picchu, Peru',
    descricao: 'A mística cidade perdida dos Incas nos Andes peruanos.',
    imagem: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800',
    preco: 'R$ 3.200'
  }
];