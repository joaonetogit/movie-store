import useCartTotalPrice from '@/hooks/components/useCartTotalPrice';

export default function CartTotalPrice() {
  const { totalCartWithSymbol, whenShippingIsFree, valueDisplayShippingFree } = useCartTotalPrice();

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
      <div>
        <p className="text-2xl">Total: {totalCartWithSymbol}</p>
      </div>
      {whenShippingIsFree ? (
        <p>Congratulations, your purchase is free!</p>
      ) : (
        <p>Value for free shipping is {valueDisplayShippingFree}</p>
      )}
    </div>
  );
}