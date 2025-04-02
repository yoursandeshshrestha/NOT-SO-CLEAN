import { ProductProvider } from "@/core/home/presentation/di/ProductProvider";
import ProductListPage from "@/core/home/presentation/view/ProductListPage";

export default function Home() {
  return (
    <>
      <ProductProvider>
        <ProductListPage />
      </ProductProvider>
    </>
  );
}
