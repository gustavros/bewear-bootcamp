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

      <div className="space-y-6">
        <div className="px-5">
          <Image src="/banner-01.png" alt="Hero Image" width={0} height={0} className="h-auto w-full" sizes="100vw" />
        </div>

        <ProductList title="Mais vendidos" products={products} />

        <div className="px-5">
          <Image src="/banner-02.png" alt="Hero Image" width={0} height={0} className="h-auto w-full" sizes="100vw" />
        </div>
      </div>
    </>
  );
}

export default Home;
