import { OrderTypes } from '@/types/components/SortButton';
import { IProduct } from '@/types/product';

export const sortOptions: OrderTypes[] = ['Name', 'Price', 'Newest'];

export const sortByName = (products: IProduct[]) => {
  return [...products].sort((a, b) => a.title.localeCompare(b.title));
};

export const sortByPrice = (products: IProduct[]) => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByNewest = (products: IProduct[]) => {
  return [...products].sort((a, b) => {
    if (a.new === b.new) return 0;
    return a.new ? -1 : 1;
  });
};
