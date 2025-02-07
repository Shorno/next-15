"use server"

import {convertToObject} from "@/lib/utils";
import {prisma} from "@/lib/prisma";

export async function getLatestProducts() {
    const products = await prisma.product.findMany({
        take: 3,
        orderBy: {createdAt: 'desc'}
    })

    return convertToObject(products)
}

export async function getProductBySlug(slug: string) {
    const product = await prisma.product.findUnique({
        where: {slug}
    })

    return convertToObject(product)
}