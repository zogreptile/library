export interface IBook {
  title: string;
  author: string;
  price?: number | string;
  date?: string;
  inStock: boolean;
};

export interface IBookIndexed extends IBook {
  id: number;
}
