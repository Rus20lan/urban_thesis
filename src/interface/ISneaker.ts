export interface ISneaker {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  stars: number;
  sizes: number[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
}
