"use server"

import prisma from "@/lib/prisma";
import {convertToObject} from "@/lib/utils";

export async function getLatestProducts() {
    const products = await prisma.product.findMany({
        take: 3,
        orderBy: {createdAt: 'desc'}
    })

    return convertToObject(products)
}