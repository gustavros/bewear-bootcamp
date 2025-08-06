import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
});

export const categoryTable = pgTable("category", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
});


export const categoryRelations = relations(categoryTable, ({ many }) => ({
    products: many(productTable),
}));

export const productTable = pgTable("product", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    description: text().notNull(),
    categoryId: uuid("category_id").notNull().references(() => categoryTable.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

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

export const productVariantRelations = relations(productVariantTable, ({ one, many }) => ({
    product: one(productTable, {
        fields: [productVariantTable.productId],
        references: [productTable.id],
    }),
    variants: many(productVariantTable),
}));

export const productRelations = relations(productTable, ({ one }) => ({
    category: one(categoryTable, {
        fields: [productTable.categoryId],
        references: [categoryTable.id],
    }),
}));
