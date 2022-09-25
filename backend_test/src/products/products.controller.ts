import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './products.type';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('price') price: number,
  ): {id:string}
  {
    const genId = this.productService.insert(title, price);
    return {id: genId};
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getproducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') procId: string) : void {
    console.log(procId);
  }
}
