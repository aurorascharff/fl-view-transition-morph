export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "alpine-tote",
    name: "Alpine Tote",
    price: 84,
    description:
      "A waxed-canvas everyday carry, roomy enough for a 14-inch laptop and the rest of your kit.",
    image: "https://picsum.photos/seed/alpine-tote/1200/1200",
  },
  {
    id: "porcelain-mug",
    name: "Porcelain Mug",
    price: 22,
    description:
      "Hand-thrown porcelain with a slim, balanced handle. Holds 12 oz of hot or cold drink.",
    image: "https://picsum.photos/seed/porcelain-mug/1200/1200",
  },
  {
    id: "field-notebook",
    name: "Field Notebook",
    price: 14,
    description:
      "Pocket-sized, dot-grid pages on FSC-certified paper. Stitched binding lies flat.",
    image: "https://picsum.photos/seed/field-notebook/1200/1200",
  },
  {
    id: "merino-beanie",
    name: "Merino Beanie",
    price: 38,
    description:
      "Soft, breathable merino wool with a relaxed slouch and ribbed cuff.",
    image: "https://picsum.photos/seed/merino-beanie/1200/1200",
  },
  {
    id: "ceramic-planter",
    name: "Ceramic Planter",
    price: 46,
    description:
      "Matte-glaze stoneware with a removable drainage saucer. Fits 6-inch pots.",
    image: "https://picsum.photos/seed/ceramic-planter/1200/1200",
  },
  {
    id: "leather-wallet",
    name: "Leather Wallet",
    price: 68,
    description:
      "Vegetable-tanned full-grain leather. Six card slots and a bill compartment.",
    image: "https://picsum.photos/seed/leather-wallet/1200/1200",
  },
  {
    id: "linen-apron",
    name: "Linen Apron",
    price: 54,
    description:
      "Stonewashed linen with adjustable crossback straps and a deep front pocket.",
    image: "https://picsum.photos/seed/linen-apron/1200/1200",
  },
  {
    id: "brass-lamp",
    name: "Brass Desk Lamp",
    price: 168,
    description:
      "Adjustable arm in solid brass with a warm 3000K LED bulb included.",
    image: "https://picsum.photos/seed/brass-lamp/1200/1200",
  },
  {
    id: "walnut-board",
    name: "Walnut Cutting Board",
    price: 92,
    description:
      "End-grain walnut with juice groove and recessed side handles.",
    image: "https://picsum.photos/seed/walnut-board/1200/1200",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
