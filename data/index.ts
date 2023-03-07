export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/**
 * function that returns a unique Id, both numbers and letters
 */
export const generateId = () => {
  const newId = Math.floor(1 + Math.random() * 0x1000)
    .toString(16)
    .substring(1);
  return newId;
};

// Remove the data inside this when starting working on project
export const products: Product[] = [
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1032228-02_Fm_M0013527&mw=1500&fmt=webp',
    title: 'Jolly',
    description:
      'Stool with comfortable, shaped seat. Made of solid wood, in the Toon Wood type. Height 61 cm. Seat 40x32 cm. Seat height: 61 cm Width at the bottom 47 cm. Mounted.',
    price: 1599,
    id: 'e1',
  },
];
