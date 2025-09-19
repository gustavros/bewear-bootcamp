import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
    categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
    return (
        <div className="px-5 bg-violet-100 rounded-lg grid grid-cols-2 gap-3 py-5">
            {categories.map((category) => (
                <Button key={category.id} className="text-sm font-medium bg-white" variant="ghost">{category.name}</Button>
            ))}
        </div>
    )
}

export default CategorySelector