import { useEffect, useState } from "react";
import { CartItem } from "../../data";

export function useLocalStorage(key: string, defaultValue: CartItem[] = []) {
  const [value, setValue] = useState<CartItem[]>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}