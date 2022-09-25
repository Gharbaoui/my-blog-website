import { Product } from './products.type';
export declare class ProductService {
    products: Product[];
    insert(title: string, price: number): string;
    getproducts(): Product[];
}
