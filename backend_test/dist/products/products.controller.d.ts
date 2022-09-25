import { ProductService } from './products.service';
import { Product } from './products.type';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(title: string, price: number): {
        id: string;
    };
    getAllProducts(): Product[];
    getOneProduct(procId: string): void;
}
