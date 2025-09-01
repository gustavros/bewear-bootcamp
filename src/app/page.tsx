import { desc } from "drizzle-orm";
import Image from "next/image";

import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const getNewlyCreatedProducts = async () => {
    const products = await db.query.productTable.findMany({
      orderBy: [desc(productTable.createdAt)],
      with: {
        variants: true,
      },
    });

    return products;
  };

  const products = await getNewlyCreatedProducts();

  return (
    <>
      <Header />

      <div className="px-5 space-y-6">
        <Image src="/banner-01.png" alt="Hero Image" width={0} height={0} className="h-auto w-full" sizes="100vw" />

        <ProductList title="Mais vendidos" products={products} />

        <Image src="/banner-02.png" alt="Hero Image" width={0} height={0} className="h-auto w-full" sizes="100vw" />
      </div>
    </>
  );
}

export default Home;
