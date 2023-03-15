import { useState } from "react";
import styled from "styled-components";

export function SizeSelect() {
  const sizes = ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <>
      <SizeLabel htmlFor="size">Size:</SizeLabel>
      <SizeSelectInput
        id="size"
        value={selectedSize}
        onChange={(event) => setSelectedSize(event.target.value)}
      >
        {sizes.map((size) => (
          <option key={size}>{size}</option>
        ))}
      </SizeSelectInput>
    </>
  );
}

const SizeLabel = styled.label`
  margin-right: 10px;
`;

const SizeSelectInput = styled.select`
  height: 3rem;
  margin-top: 10px;
  padding: 10px;
`;
