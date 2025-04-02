import { ProductProvider } from "@/core/home/presentation/di/ProductProvider";
import ProductDetailWrapper from "@/core/home/presentation/view/ProductDetailWrapper";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <ProductProvider>
      <ProductDetailWrapper id={params.id} />
    </ProductProvider>
  );
}

// I had to make a wrapper for the page because I was getting an error
// saying that the page was not a client component
// and parmas doesnt work in client components
