import Faq from "react-faq-component";
import { Data } from "../data/dataContent";


export function FAQ() {
  const styles = {
    rowContentPaddingLeft: "20px",
    bgColor: "#fff"
  };

  return (
    <div>
      <Faq data={Data} styles={styles} />
      {/* <OrderForm /> */}
    </div>
  );
}
