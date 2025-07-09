export interface Recipe {
    id: string;
    title: string;
    description: string;
    img: string;
    products: Product[];
}

interface Product {
    name: string;
    quantity: number;
    unit: string;
}
