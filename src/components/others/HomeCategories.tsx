import { IHomeCategoriesProps } from '@/types/components/HomeCategories';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { Link } from 'react-router-dom';

export default function HomeCategories({ categories }: IHomeCategoriesProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
      <h2 className="text-lg sm:text-sm">Categories</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/product/category/${GenerateSlug(category)}`}
            className="rounded-md border border-border px-2 py-1 text-sm text-foreground transition-all hover:bg-border hover:text-opacity-5"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
