import { addProduct } from './products/product.service';
addProduct({
  id: 1,
  title: 'Camisa',
  createAt: new Date(),
  stock: 10,
  size: 'small',
  category: {
    id: 1,
    createAt: new Date(),
    updateAt: new Date(),
    name: 'Ropa',
  },
  updateAt: new Date(),
});
