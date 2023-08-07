export interface Zapato {
     id: number;
  nombre: string;
  precio: number;
  categoria: string;
  tags?: string[];
  imagen?: string;


  
  calificacion?: number;
  comentarios?: string[];
}
