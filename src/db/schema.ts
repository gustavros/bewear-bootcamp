import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// tabela de usuários
export const userTable = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
});

// tabela de categorias
export const categoryTable = pgTable("category", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
});


// relacionamento entre categorias e produtos
export const categoryRelations = relations(categoryTable, ({ many }) => ({
    products: many(productTable),
}));

// tabela de produtos
export const productTable = pgTable("product", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    description: text().notNull(),
    categoryId: uuid("category_id").notNull().references(() => categoryTable.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

// tabela de variações de produtos
export const productVariantTable = pgTable("product_variant", {
    id: uuid().primaryKey().defaultRandom(),
    productId: uuid("product_id").notNull().references(() => productTable.id),
    name: text().notNull(),
    color: text().notNull(),
    slug: text().notNull().unique(),
    priceInCents: integer("price_in_cents").notNull(),
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

// relacionamento entre variações de produtos e produtos
export const productVariantRelations = relations(productVariantTable, ({ one, many }) => ({
    product: one(productTable, {
        fields: [productVariantTable.productId],
        references: [productTable.id],
    }),
    variants: many(productVariantTable), // um produto pode ter várias variações
}));

// relacionamento entre produtos e categorias. exemplo: um produto pertence a uma categoria.
export const productRelations = relations(productTable, ({ one }) => ({
    category: one(categoryTable, {
        fields: [productTable.categoryId], // campo da tabela de produtos que referencia a tabela de categorias
        references: [categoryTable.id], // campo da tabela de categorias que referencia a tabela de produtos
    }),
}));
