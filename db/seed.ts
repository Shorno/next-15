import sampleData from "@/db/sample-data";
import {prisma} from "@/lib/prisma";

async function seed() {
    await prisma.product.createMany({data : sampleData.products})
}

seed().then(() => {
    console.log("Seeding complete");
    prisma.$disconnect();
});