import Container from '@/components/others/Container';
import useCategory from '@/hooks/pages/useCategory';
import LayoutApp from '@/layouts/LayoutApp';

export default function Category() {
  const { productCategory, isLoading } = useCategory();
  return (
    <LayoutApp>
      <Container>
        <h1>Category</h1>
        {isLoading && <p>Loading...</p>}
        {productCategory?.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </Container>
    </LayoutApp>
  );
}
