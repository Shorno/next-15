import {getProductBySlug} from "@/lib/actions/product.actions";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import ProductImages from "@/components/shared/ProductImages";

export default async function ProductDetailsPage(props: { params: Promise<{ slug: string }> }) {
    const {slug} = await props.params;

    const product = await getProductBySlug(slug);

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <section>
            <div className={"grid grid-cols-1 md:grid-cols-5"}>
                <div className={"col-span-2"}>
                    <ProductImages images={product.images}/>
                </div>
                <div className={"col-span-2 p-4"}>
                    <div className={"flex flex-col gap-6"}>
                        <p>{product.brand}</p> {product.category}
                        <h1 className={"h3-bold"}>{product.name}</h1>
                        <p>{product.rating} of {product.numReviews} reviews </p>
                        <div className={"flex flex-col sm:flex-row sm:items-center gap-4"}>
                            <p>${product.price}</p>
                        </div>
                        <div className={"mt-10"}>
                            <p className={"font-semibold"}>Description</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Card>
                        <CardContent className={"p-4"}>
                            <div className={"mb-2 flex justify-between"}>
                                <div>Price</div>
                                <div>
                                    ${product.price}
                                </div>
                            </div>
                            <div className={"mb-2 flex justify-between"}>
                                <div>Status</div>
                                <div>
                                    {product.stock > 0 ? <Badge>In stock</Badge> :
                                        <Badge className={"bg-red-500"}>Out of stock</Badge>}
                                </div>
                            </div>
                            {
                                product.stock > 0 && (
                                    <Button className={"btn btn-primary w-full"}>Add to cart</Button>
                                )
                            }
                        </CardContent>
                    </Card>
                </div>


            </div>
        </section>
    )
}