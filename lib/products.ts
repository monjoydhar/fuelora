export type Product = {
  id: string; name: string; slug: string; description: string; category: string;
  flavor: string; size: string; price: number; protein: string; image: string;
};

export const products: Product[] = [
 {id:"p1",name:"Organic Plant Whey",slug:"organic-plant-whey",description:"Multi-source plant blend packed with 21g of clean protein for natural daily strength.",category:"Plant-Based Nutrition",flavor:"Chocolate Fudge",size:"1kg",price:3490,protein:"25g",image:"/products/protin.png"},
 {id:"p2",name:"Triple-Source Whey Isolate",slug:"triple-source-whey-isolate",description:"High-quality whey isolate with triple-source protein for optimal absorption.",category:"Protein",flavor:"Vanilla Cream",size:"1kg",price:3490,protein:"25g",image:"/products/protin-1.png"},
 {id:"p3",name:"Low Carb Berry Shake",slug:"low-carb-berry-shake",description:"High-protein (26g), low-carbohydrate recovery shake enriched with natural berry flavors.",category:"Protein",flavor:"Berry Blast",size:"1kg",price:3690,protein:"25g",image:"/products/protin-13.png"},
 {id:"p4",name:"Pure Vegan Protein",slug:"pure-vegan-protein",description:"Smooth plant-based blend crafted with clean, unflavored plant sources for easy mixing.",category:"Plant-Based Nutrition",flavor:"Unflavored",size:"1kg",price:3790,protein:"25g",image:"/products/protin-11-removebg-preview.png"},
 {id:"p5",name:"Low Carb Mocha Delight",slug:"low-carb-mocha-delight",description:"Rich coffee-infused protein blend designed for lean muscle maintenance and clean energy.",category:"Protein",flavor:"Mocha",size:"1kg",price:3690,protein:"25g",image:"/products/protin-12.png"},
 {id:"p6",name:"Performance Whey",slug:"performance-whey-unflavored",description:"Minimal, flexible protein for smoothies and recipes.",category:"Protein",flavor:"Unflavored",size:"1kg",price:3290,protein:"25g",image:"/products/protin-13.png"}
];