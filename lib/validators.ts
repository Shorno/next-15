import  {z} from "zod"
import {formatNumber} from "@/lib/utils";

const currency =  z.string().refine((val) => {
    return /^\d+(\.\d{1,2})?$/.test(formatNumber(Number(val))),
        "Price must be exactly 2 decimal places"
})


export const insertProductSchema = z.object({
    name : z.string().min(3, "Name must be at least 3 characters long"),
    slug : z.string().min(3, "Slug must be at least 3 characters long"),
    category : z.string().min(3, "Category must be at least 3 characters long"),
    brand : z.string().min(3, "Brand must be at least 3 characters long"),
    description : z.string().min(3, "Description must be at least 3 characters long"),
    stock : z.coerce.number().int().positive(),
    images : z.array(z.string()).min(1, "At least one image is required"),
    isFeatured : z.boolean(),
    banner : z.string().nullable(),
    price : currency,
})