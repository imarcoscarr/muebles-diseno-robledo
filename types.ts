
export type Category = 'Mesas' | 'Sillas' | 'Almacenaje';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  material: string;
  dimensions: string;
  imageUrl: string;
}

export interface BudgetRequest {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

export interface WoodConsultation {
  style: string;
  roomType: string;
  usage: string;
}
