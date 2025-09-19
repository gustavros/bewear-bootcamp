import { desc } from "drizzle-orm";
import Image from "next/image";

import BrandList from "@/components/common/brand-list";
import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
    limit: 10,
  })

  const newleyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
    limit: 10,
  })

  const categories = await db.query.categoryTable.findMany();

  return (
    <>
      <Header />

      <div className="space-y-6">
        <div className="px-5">
          <Image src="/banner-01.png" alt="Hero Image" width={0} height={0} className="h-auto w-full" sizes="100vw" />
        </div>

        <BrandList />

        <ProductList title="Mais vendidos" products={products} />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image src="/banner-02.png" alt="Hero Image" width={0} height={0} className="h-auto w-full" sizes="100vw" />
        </div>

        <ProductList title="Novos produtos" products={newleyCreatedProducts} />
      </div>

      <Footer />
    </>
  );
}

export default Home;
