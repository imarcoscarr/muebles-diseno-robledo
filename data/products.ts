
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'm1',
    name: 'Mesa de Comedor Robledo Imperial',
    category: 'Mesas',
    description: 'Nuestra pieza insignia. Una superficie de roble macizo con vetas naturales seleccionadas a mano, acabada en aceite de linaza.',
    material: 'Roble de Soria (Macizo)',
    dimensions: '220 x 100 x 76 cm',
    imageUrl: 'https://picsum.photos/id/445/800/600'
  },
  {
    id: 'm2',
    name: 'Mesa de Centro Nogal Rústico',
    category: 'Mesas',
    description: 'Elegancia compacta con bordes irregulares que respetan la forma original del tronco.',
    material: 'Nogal Español',
    dimensions: '110 x 60 x 40 cm',
    imageUrl: 'https://picsum.photos/id/20/800/600'
  },
  {
    id: 's1',
    name: 'Silla de Autor "Linaje"',
    category: 'Sillas',
    description: 'Ergonomía y diseño se funden en esta silla tallada con técnicas de ensamblado tradicionales sin clavos.',
    material: 'Estructura de Roble, Asiento de Cuero',
    dimensions: '45 x 50 x 85 cm',
    imageUrl: 'https://picsum.photos/id/450/800/600'
  },
  {
    id: 's2',
    name: 'Silla de Comedor Herencia',
    category: 'Sillas',
    description: 'Respaldo curvado al vapor para un confort excepcional durante largas sobremesas.',
    material: 'Nogal Americano',
    dimensions: '48 x 52 x 90 cm',
    imageUrl: 'https://picsum.photos/id/616/800/600'
  },
  {
    id: 'a1',
    name: 'Aparador Bosque Profundo',
    category: 'Almacenaje',
    description: 'Cuatro puertas con relieves tallados a mano inspirados en los bosques del norte.',
    material: 'Roble y herrajes de bronce',
    dimensions: '180 x 45 x 85 cm',
    imageUrl: 'https://picsum.photos/id/473/800/600'
  },
  {
    id: 'a2',
    name: 'Vitrina Legado Familiar',
    category: 'Almacenaje',
    description: 'Cristalería protegida por marcos de nogal finamente pulidos. Iluminación LED integrada.',
    material: 'Nogal y Vidrio Templado',
    dimensions: '100 x 40 x 190 cm',
    imageUrl: 'https://picsum.photos/id/491/800/600'
  }
];
