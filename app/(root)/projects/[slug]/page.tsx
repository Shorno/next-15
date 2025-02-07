import {getProductBySlug} from "@/lib/actions/product.actions";

export default async function ProjectDetailsPage(props: { params: Promise<{ slug: string }> }) {
    const {slug} = await props.params;

    const product = await getProductBySlug(slug);

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <>
            <h1>Product Details</h1>
        </>
    )
}