import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
async function main(){await prisma.product.createMany({data:[
{name:"Performance Whey",slug:"performance-whey",description:"Everyday whey protein.",basePrice:3490,images:["/products/chocolate.svg"],category:"Protein",isSubscription:false},
{name:"Performance Whey Vanilla",slug:"performance-whey-vanilla",description:"Vanilla whey protein.",basePrice:3490,images:["/products/vanilla.svg"],category:"Protein",isSubscription:false}
],skipDuplicates:true});}
main().finally(()=>prisma.$disconnect());