import { Drink, EventCategory, GalleryItem, Founder, Testimonial } from '../types';
import foundersImage from '../images/founders.jpg';

export const COMPANY_INFO = {
  name: 'DR. COFFEE',
  tagline: 'Cafés Especiais & Experiências Sensoriais para Eventos',
  heroSubtitle: 'Transformamos cafés especiais em experiências inesquecíveis para empresas, feiras e eventos corporativos.',
  phone: '+55 (11) 98765-4321',
  whatsappNumber: '5511987654321',
  email: 'contato@drcoffeeeventos.com.br',
  instagram: '@drcoffee.eventos',
  location: 'São Paulo, SP - Atendimento em todo o Brasil',
};

// Curated high resolution images for background, drinks, and gallery
export const COFFEE_IMAGES = {
  heroBgDefault: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
  heroBgSecondary: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop',
  baristaExtraction: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
  foundersMain: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop',
  foundersLucas: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  foundersGabriel: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  espressoMachine: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop',
  latteArt: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1974&auto=format&fit=crop',
  coldBrew: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop',
  pourover: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1974&auto=format&fit=crop',
  eventBooth: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop',
  eventPeople: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
  beansRoast: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop',
};

// Video background options for Hero
export const HERO_VIDEO_OPTIONS = [
  {
    id: 'coffee_pour',
    title: 'Extracão Pour Over & Espresso',
    url: 'https://assets.mixkit.co/videos/810/810-720.mp4',
    poster: COFFEE_IMAGES.heroBgDefault
  },
  {
    id: 'latte_art',
    title: 'Arte Latte em Movimento',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-barista-making-latte-art-on-a-coffee-cup-41070-large.mp4',
    poster: COFFEE_IMAGES.latteArt
  },
  {
    id: 'coffee_grind',
    title: 'Moagem & Grãos Selecionados',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-roasted-coffee-beans-falling-41068-large.mp4',
    poster: COFFEE_IMAGES.beansRoast
  }
];

export const SPECIALTY_DRINKS: Drink[] = [
  {
    id: 'espresso-doppio',
    name: 'Espresso Doppio Signature',
    subtitle: 'Extratora La Marzocco / Cimbali • 9 Bar',
    category: 'espresso',
    categoryLabel: 'Espresso & Clássicos',
    description: 'A essência pura do café especial. Dupla extração artesanal com crema densa e aveludada, revelando acidez cítrica brilhante e notas de chocolate amargo.',
    beanOrigin: 'Cerrado Mineiro - Altitude 1.150m (86+ pontos BSCA)',
    extractionMethod: 'Espresso 93°C • 28 segundos',
    temperature: 'Quente',
    prepTime: '1.5 min',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Caramelo Queimado', 'Nozes Torradas', 'Cacau Intenso'],
      notes: ['Chocolate Amargo', 'Laranja Bahia', 'Mel de Melato'],
      acidity: 'Média-Alta',
      body: 'Aveludado',
      sweetness: 'Caramelizada'
    },
    highlights: ['100% Arábica Single Origin', 'Moagem na hora', 'Xícara aquecida de porcelana']
  },
  {
    id: 'macchiato-velvet',
    name: 'Macchiato Velvet',
    subtitle: 'Espresso Ristretto + Microespuma de Leite',
    category: 'espresso',
    categoryLabel: 'Espresso & Clássicos',
    description: 'Um toque delicado de leite vaporizado a 65°C sobre uma base de espresso concentrado, criando um contraste sutil entre o doce e a força do café.',
    beanOrigin: 'Alta Mogiana Paulista - Altitude 1.050m',
    extractionMethod: 'Espresso Ristretto + Microfio de Leite Integral Tipo A',
    temperature: 'Quente',
    prepTime: '2 min',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Manteiga de Cacau', 'Baunilha Natural'],
      notes: ['Doce de Leite', 'Noz Moscada', 'Café Tostado'],
      acidity: 'Balanceada',
      body: 'Cremoso',
      sweetness: 'Natural Alto'
    },
    highlights: ['Microespuma sedosa', 'Opção de Leite de Aveia Artesanal', 'Sem adição de açúcar']
  },
  {
    id: 'cappuccino-artisan',
    name: 'Cappuccino Cremoso com Arte Latte',
    subtitle: 'Proporção Áurea 1:1:1 • Arte Latte Customizada',
    category: 'cappuccino',
    categoryLabel: 'Cappuccinos & Cremosos',
    description: 'Proporção perfeita entre espresso duplo, leite vaporizado e espuma densa. Finalizado com arte latte personalizada com a marca ou inicial do evento.',
    beanOrigin: 'Sul de Minas - Mantiqueira de Minas (87 pontos)',
    extractionMethod: 'Espresso + Leite Aveludado a Vapor',
    temperature: 'Quente',
    prepTime: '2.5 min',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Canela em Pau', 'Cacau em Pó 70%'],
      notes: ['Avelã Tostada', 'Creme de Leite', 'Caramelo'],
      acidity: 'Baixa',
      body: 'Cremoso',
      sweetness: 'Natural Alto'
    },
    highlights: ['Latte Art exclusiva em cada xícara', 'Possibilidade de logo stencil com cacau', 'Toque de especiarias brasileiras']
  },
  {
    id: 'v60-origami-single',
    name: 'Filtrado V60 / Origami Single Origin',
    subtitle: 'Método Geométrico Japonês • Fluxo Contínuo',
    category: 'filtrados',
    categoryLabel: 'Filtrados Artesanais',
    description: 'Massa limpa e complexa. O método V60 realça as nuances de acidez floral e frutada dos grãos de altitude, servido em jarras de vidro soprado.',
    beanOrigin: 'Chapada Diamantina, Bahia - Altitude 1.300m',
    extractionMethod: 'Filtro de Papel Cônico Origami • Bico de Cisne',
    temperature: 'Quente',
    prepTime: '3.5 min',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Jasmin', 'Pêssego Maduro', 'Flores Brancas'],
      notes: ['Mel de Flor de Laranjeira', 'Damasco', 'Chá Preto'],
      acidity: 'Acentuada',
      body: 'Leve',
      sweetness: 'Floral'
    },
    highlights: ['Rituais de preparo na frente do convidado', 'Jarras térmicas elegantes', 'Apresentação sensorial explicativa']
  },
  {
    id: 'chemex-reserve',
    name: 'Chemex Reserve Floral',
    subtitle: 'Filtro de Gramatura Tripla • Pureza Visual',
    category: 'filtrados',
    categoryLabel: 'Filtrados Artesanais',
    description: 'Extratora de ampulheta com filtro grosso que retém todos os óleos pesados, resultando em uma bebida cristalina, extremamente elegante e de corpo sedoso.',
    beanOrigin: 'Pedra Azul, Espírito Santo - Microlote Premiado',
    extractionMethod: 'Chemex 6 Xícaras • Água Mineral 91°C',
    temperature: 'Quente',
    prepTime: '4 min',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Cereja Ensuada', 'Cardamomo'],
      notes: ['Aromas Cítricos', 'Uva Verde', 'Açúcar Mascavo'],
      acidity: 'Acentuada',
      body: 'Leve',
      sweetness: 'Natural Alto'
    },
    highlights: ['Serviço ritualístico em copos de cristal', 'Sem amargor residual', 'Ideal para harmonização']
  },
  {
    id: 'cold-brew-citrus',
    name: 'Cold Brew Autoral Citrus & Tonic',
    subtitle: 'Infusão a Frio 18 horas + Tônica Artesanal & Alecrim',
    category: 'drinks_autorais',
    categoryLabel: 'Drinks Autorais Gelados',
    description: 'Café extraído lentamente em água gelada por 18 horas. Servido com gelo translúcido, fatia de laranja bahia desidratada e ramo de alecrim maçaricado.',
    beanOrigin: 'Cerrado Mineiro (Fermentação Induzida)',
    extractionMethod: 'Slow Immersion 18h • Servido em Copo Lowball',
    temperature: 'Gelado',
    prepTime: '2 min',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Alecrim Maçaricado', 'Zeste de Laranja'],
      notes: ['Frutas Amarelas', 'Tônica Botânica', 'Sensação Refrescante'],
      acidity: 'Brilhante',
      body: 'Médio',
      sweetness: 'Caramelizada'
    },
    highlights: ['Baixa acidez estomacal', 'Super refrescante para feiras e dias quentes', 'Apresentação visual instagramável']
  },
  {
    id: 'espresso-tonic-gold',
    name: 'Espresso Tonic Gold Leaf',
    subtitle: 'Espresso Duplo + Tônica Premium + Xarope de Laranja',
    category: 'drinks_autorais',
    categoryLabel: 'Drinks Autorais Gelados',
    description: 'Duas camadas visuais marcantes: água tônica gelada na base e o espresso espesso fluindo no topo. Finalizado com xarope autoral de casca de laranja e folha de ouro comestível.',
    beanOrigin: 'Mantiqueira de Minas - Processo Natural',
    extractionMethod: 'Espresso sobre Água Tônica e Gelo Cubo Duplo',
    temperature: 'Gelado',
    prepTime: '2.5 min',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Laranja Kinkan', 'Quinino Botânico'],
      notes: ['Limonada Suíça', 'Caramelo Salgado', 'Efervescência'],
      acidity: 'Acentuada',
      body: 'Médio',
      sweetness: 'Caramelizada'
    },
    highlights: ['Efeito bifásico deslumbrante', 'Energético natural de alto padrão', 'Muito solicitado em eventos corporativos tech']
  },
  {
    id: 'affogato-madagascar',
    name: 'Affogato de Baunilha de Madagáscar',
    subtitle: 'Gelato Artesanal Fior di Latte + Espresso Pelando',
    category: 'drinks_autorais',
    categoryLabel: 'Drinks Autorais Gelados',
    description: 'A sobremesa perfeita em forma de bebida. Uma bola de gelato artesanal de baunilha pura afogada por um espresso duplo bem quente recém extraído.',
    beanOrigin: 'Alta Mogiana - Torra Média Escura',
    extractionMethod: 'Gelato em Taça de Cristal + Pour Over de Espresso',
    temperature: 'Ambiente',
    prepTime: '2 min',
    image: 'https://images.unsplash.com/photo-1592321675774-3de57f36f407?q=80&w=800&auto=format&fit=crop',
    sensory: {
      aroma: ['Baunilha em Fava', 'Cacau Venezuelano'],
      notes: ['Sorvete Cremoso', 'Espresso Amargo', 'Crocante de Amêndoas'],
      acidity: 'Baixa',
      body: 'Veludoso e Denso',
      sweetness: 'Natural Alto'
    },
    highlights: ['Contraste térmico quente x frio', 'Servido em taça de cristal', 'Sucesso absoluto em casamentos e jantares de gala']
  }
];

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'feiras',
    title: 'Cafeteria para Feiras & Estandes',
    subtitle: 'Transformamos estandes em pontos de encontro movimentados',
    description: 'Em grandes feiras de negócios (Hospitalar, Expo Revestir, Agrishow, Futurecom), um café especial de altíssima velocidade e qualidade retém clientes no seu estande, aumentando o tempo de permanência e fechamento de vendas.',
    capacityText: 'De 200 a 3.000+ cafés/dia',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Bancada modular customizada com a identidade visual da sua marca',
      'Equipamentos italianos de alta extração contínua (La Cimbali / Nuova Simonelli)',
      'Equipe de baristas uniformizados com avental de couro artesanal',
      'Atendimento ágil sem filas nem perda de padrão de sabor'
    ]
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos & Convenções',
    subtitle: 'Recepção VIP para diretores, parceiros e colaboradores',
    description: 'Treinamentos, reuniões de conselho, kick-offs e convenções de vendas ganham um ar sofisticado com nossa estação itinerante de cafés especiais e recepção refinada.',
    capacityText: 'De 30 a 800 convidados',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Cardápio sob medida com grãos selecionados e opções sem lactose/veganas',
      'Arte Latte exclusiva nas xícaras de porcelana ou copos biodegradáveis',
      'Baristas qualificados com postura impecável e fluência em inglês/espanhol',
      'Serviço harmonizado com minipetit fours artesanais'
    ]
  },
  {
    id: 'congressos',
    title: 'Congressos & Simpósios Acadêmicos',
    subtitle: 'Fluxo intenso com eficiência e qualidade inegociável',
    description: 'Intervalos entre palestras exigem energia rápida e experiência agradável. Mantemos um fluxo constante de até 1.000 cafés por hora com consistência de extração.',
    capacityText: 'Até 5.000 participantes',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Multi-estações de espresso e jarras de filtrados V60/Chemex para fluxo ágil',
      'Sinalização e menu explicativo sobre as notas sensoriais dos grãos',
      'Gestão sustentável de resíduos de borra de café para compostagem',
      'Logística própria e pontualidade britânica de montagem'
    ]
  },
  {
    id: 'social',
    title: 'Casamentos & Festas Sociais VIP',
    subtitle: 'O gran finale inesquecível da sua celebração',
    description: 'Surpreenda seus convidados na pista de dança ou na mesa de doces com uma ilha gastronômica de cafés especiais, affogatos de baunilha e drinks autorais gelados.',
    capacityText: 'De 50 a 500 convidados',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Design da ilha harmonizado com a decoração do casamento/festa',
      'Drinks autorais alcoólicos e não-alcoólicos com café (Espresso Martini, Iced Tonics)',
      'Monograma dos noivos impresso na espuma do cappuccino',
      'Serviço até as madrugadas para renovar as energias dos convidados'
    ]
  }
];

export const FOUNDERS: Founder[] = [
  {
    id: 'Ronald-Douglas',
    name: 'Douglas Lima & Ronald Silva',
    role: 'Fundadores & Master Baristas ',
    bio: `Há seis anos, nos conhecemos trabalhando em diferentes empresas e eventos. Entre experiências, desafios e grandes produções, descobrimos que compartilhávamos mais do que a profissão: <strong> o mesmo olhar para excelência, cuidado e inovação.</strong>`,
    quote: 'Para nós, café não é um insumo de evento — é uma experiência sensorial capaz de conectar pessoas, despertar sorrisos e deixar uma lembrança afetiva duradoura.',
    image: foundersImage,
    specialties: ['Seleção dos melhores cafés', 'Atendimento Humanizado', 'Drinks Autorais', 'Café que gera conexão', 'Experiência sensorial completa', 'Amamos o que fazemos']
  }
];

export const GALLERY_CASES: GalleryItem[] = [
  {
    id: 'feira-hospitalar-2026',
    title: 'Estande MedTech - Feira Hospitalar',
    clientName: 'MedTech Systems',
    category: 'feiras',
    categoryLabel: 'Feiras & Estandes',
    capacityCategory: 'large',
    extractionType: 'espresso',
    year: '2026',
    guestCount: 2800,
    coffeesServed: 3506,
    location: 'Expo Center Norte, SP',
    description: 'Serviço de alta rotação durante 4 dias de feira internacional. Nosso estande de café foi eleito o ponto de encontro mais movimentado da pavilhão principal.',
    coverImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop'
    ],
    extractionMethodsUsed: ['Espresso La Cimbali', 'Cappuccino Latte Art', 'Cold Brew Citrus'],
    testimonialQuote: 'O estande da DR. COFFEE transformou nossa prospecção na feira. Clientes entravam pelo aroma e permaneciam pelo atendimento impecável!',
    clientRole: 'Diretora de Marketing - MedTech'
  },
  {
    id: 'samsung-tech-summit',
    title: 'Convencão Anual de Tecnologia',
    clientName: 'Samsung Brasil',
    category: 'corporativo',
    categoryLabel: 'Eventos Corporativos',
    capacityCategory: 'medium',
    extractionType: 'espresso',
    year: '2025',
    guestCount: 450,
    coffeesServed: 1280,
    location: 'WTC Events Center, SP',
    description: 'Estação VIP com 3 baristas dedicados servindo espresso, macchiato e drinks autorais com arte latte personalizada com a marca do cliente.',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop'
    ],
    extractionMethodsUsed: ['Espresso', 'Cappuccino com Stencil da Marca', 'Espresso Tonic'],
    testimonialQuote: 'Pontualidade britânica, apresentação requintada e um café que foi elogio unânime entre toda nossa diretoria internacional.',
    clientRole: 'Event Lead - Samsung'
  },
  {
    id: 'expo-revestir-luxury',
    title: 'Estande Design & Arquitetura',
    clientName: 'Portobello Shop',
    category: 'feiras',
    categoryLabel: 'Feiras & Estandes',
    capacityCategory: 'large',
    extractionType: 'filtrados',
    year: '2025',
    guestCount: 3200,
    coffeesServed: 4120,
    location: 'São Paulo Expo',
    description: 'Combinação perfeita entre arquitetura e alta gastronomia. Estação de filtrados artesanais V60 em jarras de cristal harmonizada com os revestimentos.',
    coverImage: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop'
    ],
    extractionMethodsUsed: ['Pour Over V60 Origami', 'Chemex Reserve', 'Cold Brew infusion'],
    testimonialQuote: 'A sensibilidade dos baristas para explicar cada nota aromática encantou nossos arquitetos parceiros.',
    clientRole: 'Gerente de Branding'
  },
  {
    id: 'casamento-quinta-cantareira',
    title: 'Casamento Sofia & Thiago',
    clientName: 'Sofia & Thiago',
    category: 'social',
    categoryLabel: 'Casamentos & Festas',
    capacityCategory: 'medium',
    extractionType: 'drinks',
    year: '2025',
    guestCount: 220,
    coffeesServed: 540,
    location: 'Quinta da Cantareira, SP',
    description: 'Ilha de café na pista de dança servindo affogato com sorvete de baunilha madagáscar e drinks gelados de café até o amanhecer.',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592321675774-3de57f36f407?q=80&w=1000&auto=format&fit=crop'
    ],
    extractionMethodsUsed: ['Affogato de Baunilha', 'Espresso Martini', 'Cappuccino com Monograma'],
    testimonialQuote: 'Nossos convidados comentam até hoje sobre o affogato na madrugada! Foi a melhor escolha para o nosso casamento.',
    clientRole: 'Noiva'
  },
  {
    id: 'congresso-medicina-intensiva',
    title: 'Simpósio Internacional de Cardiologia',
    clientName: 'Sociedade Brasileira de Cardiologia',
    category: 'congressos',
    categoryLabel: 'Congressos',
    capacityCategory: 'large',
    extractionType: 'espresso',
    year: '2025',
    guestCount: 1800,
    coffeesServed: 2900,
    location: 'Pro Magno Centro de Eventos',
    description: 'Operação de alta performance em múltiplos pontos de atendimento durante 3 dias de congresso médico nacional.',
    coverImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop'
    ],
    extractionMethodsUsed: ['Espresso Duplo', 'Filtrados rápidos', 'Macchiato'],
    testimonialQuote: 'Agilidade sem perder nem um pingo da qualidade dos grãos. A DR. COFFEE superou nossas expectativas de fluxo!',
    clientRole: 'Coordenadora Geral do Evento'
  },
  {
    id: 'bmw-launch-experience',
    title: 'Lançamento BMW Série M',
    clientName: 'BMW Group Brasil',
    category: 'corporativo',
    categoryLabel: 'Eventos Corporativos',
    capacityCategory: 'small',
    extractionType: 'drinks',
    year: '2025',
    guestCount: 90,
    coffeesServed: 280,
    location: 'Autódromo de Interlagos, SP',
    description: 'Experiência sensorial premium casando a alta precisão da engenharia automotiva alemã com a extração artesanal do café.',
    coverImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1000&auto=format&fit=crop'
    ],
    extractionMethodsUsed: ['Espresso Tonic Gold Leaf', 'Cold Brew Citrus', 'Affogato'],
    testimonialQuote: 'Extremamente alinhados com o padrão de luxo da nossa marca. O Espresso Tonic Gold foi o drink comentado por todos.',
    clientRole: 'Experiência do Cliente - BMW'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mariana Siqueira',
    role: 'Head de Eventos & Live Marketing',
    company: 'Samsung Brasil',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    text: 'A DR. COFFEE é nossa parceira fixa em todas as convenções. A atenção aos detalhes, desde a estética das máquinas até o sorriso dos baristas e a arte latte impecável, transforma a atmosfera do nosso evento.',
    eventType: 'Convenção Corporativa (450 pessoas)',
    rating: 5,
    year: '2025'
  },
  {
    id: '2',
    author: 'Dr. Roberto Camargo',
    role: 'Presidente do Comitê Organizador',
    company: 'Simpósio Internacional de Cardiologia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    text: 'Atender 1.800 médicos exigentes sem formação de filas e com um café que recebeu nota máxima na pesquisa de satisfação do congresso. Eficiência e paixão raras de se encontrar!',
    eventType: 'Congresso Médico (1.800 pessoas)',
    rating: 5,
    year: '2025'
  },
  {
    id: '3',
    author: 'Beatriz & Rodrigo',
    role: 'Noivos',
    company: 'Casamento na Fazenda Vila Rica',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    text: 'Contratamos a DR. COFFEE para o nosso casamento e foi um dos pontos mais elogiados pelos convidados! A ilha de café na madrugada deu um ânimo extra na festa e os affogatos estavam divinos.',
    eventType: 'Casamento VIP (250 convidados)',
    rating: 5,
    year: '2025'
  },
  {
    id: '4',
    author: 'Carlos Eduardo Fontes',
    role: 'Diretor de Marketing',
    company: 'MedTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    text: 'Na Feira Hospitalar, nosso estande bateu recorde de reuniões realizadas. O café da DR. COFFEE atraía os visitantes pelo aroma marcante e os mantinha confortáveis enquanto apresentávamos nossos produtos.',
    eventType: 'Feira Internacional de Negócios (3.500 cafés)',
    rating: 5,
    year: '2026'
  }
];

export const TRUSTED_BRANDS = [
  { name: 'Samsung', logoText: 'SAMSUNG' },
  { name: 'Google', logoText: 'GOOGLE' },
  { name: 'Intel', logoText: 'INTEL' },
  { name: 'BMW', logoText: 'BMW GROUP' },
  { name: 'Nestlé', logoText: 'NESTLÉ' },
  { name: 'Oracle', logoText: 'ORACLE' },
  { name: 'Bosch', logoText: 'BOSCH' },
  { name: 'Meta', logoText: 'META' },
  { name: 'HP', logoText: 'HP' },
  { name: 'Siemens', logoText: 'SIEMENS' }
];

export const STATS = [
  { value: '300+', label: 'Eventos realizados', description: 'Atendimento impecável em todo o Brasil' },
  { value: '80.000+', label: 'Cafés servidos', description: 'Grãos 100% arábica de alta pontuação' },
  { value: '98%', label: 'Clientes satisfeitos', description: 'Pesquisa oficial pós-evento' },
  { value: '12', label: 'Anos de experiência', description: 'Tradição e paixão pelo café especial' }
];
