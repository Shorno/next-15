import {getLatestProducts} from "@/lib/actions/product.actions";
import {ProductList} from "@/components/product-list";
export const metadata = {
    title: "Home",
    description: "Home page",
}


export default async function Home() {
    const products = await getLatestProducts()

    return (
        <div>
            <h1 className="text-2xl font-bold tracking-tight mb-6 px-4 sm:px-6 lg:px-8">Our Products</h1>
            <ProductList products={products}/>
        </div>
    );
}
