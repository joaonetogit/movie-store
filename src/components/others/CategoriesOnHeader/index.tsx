import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import useHeaderCategories from '@/hooks/components/useCategoriesOnHeader';
import { Menu } from 'lucide-react';
import CategoriesOnHeaderItem from './CategoriesOnHeaderItem';
import CategoriesOnHeaderList from './CategoriesOnHeaderList';

export default function CategoriesOnHeader() {
  const { categories, isTablet } = useHeaderCategories();

  const RenderDropdownMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {categories.map((category) => (
          <DropdownMenuItem key={category}>
            <CategoriesOnHeaderItem category={category} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const RenderCategoriesList = () => (
    <CategoriesOnHeaderList>
      {categories.map((category) => (
        <CategoriesOnHeaderItem key={category} category={category} />
      ))}
    </CategoriesOnHeaderList>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {!isTablet ? RenderDropdownMenu() : RenderCategoriesList()}
    </div>
  );
}
