import { Injectable } from '@nestjs/common';
import { Product } from './products.type';

@Injectable()
export class ProductService {
  products: Product[] = [];

  insert(title: string, price: number): string {
    const curId = new Date().toString();
    const newProduct = new Product(
      curId,
      title,
      price,
    );
    this.products.push(newProduct);
    return curId;
  }

  getproducts(): Product[] {
    return [...this.products];
  }
}
