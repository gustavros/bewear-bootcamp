'use client'

import Image from "next/image";

const brands = [
    { id: 1, name: "Nike", imageUrl: "/nike.svg" },
    { id: 2, name: "Adidas", imageUrl: "/adidas.svg" },
    { id: 3, name: "Puma", imageUrl: "/puma.svg" },
    { id: 4, name: "New Balance", imageUrl: "/new-balance.svg" },
    { id: 5, name: "Reebok", imageUrl: "/reebok.svg" },
    { id: 7, name: "Under Armour", imageUrl: "/under-armour.svg" },
];

const BrandList = () => (
    <div className="max-w-6xl mx-auto flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-2">

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {brands.map((brand) => (
                <li key={brand.id} className="text-sm font-medium bg-white text-center py-2 rounded inline-block mx-2">
                    <Image
                        src={brand.imageUrl}
                        alt={brand.name}
                        width={100}
                        height={40}
                        className="mx-auto mb-2 border-2 border-gray-300 p-8 rounded-4xl"
                    />
                    {brand.name}
                </li>
            ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {brands.map((brand) => (
                <li key={brand.id + "-dup"} className="text-sm font-medium bg-white text-center py-2 rounded inline-block mx-2">
                    <Image
                        src={brand.imageUrl}
                        alt={brand.name}
                        width={100}
                        height={40}
                        className="mx-auto mb-2 border-2 border-gray-300 p-8 rounded-4xl"
                    />
                    {brand.name}
                </li>
            ))}
        </ul>
    </div>
);

export default BrandList;
