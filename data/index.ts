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
      'https://cdn.intersport.se/productimages/220x200/152552201000_10.jpg',
    title: 'Adidas Galaxy 6 M',
    description:
      'Dessa löparinspirerade sneakers från adidas har en ventilerande ovandel i syntet som låter foten andas och känns bekväm redan från första användning. Mellansulan i Cloudfoam tillsammans med Ortholite-inlägg ger en mjuk och härlig känsla hela dagen lång. Yttersulan i gummi ger utmärkt grepp och hållbarhet.',
    price: 599,
    id: 'e1',
  },
];
