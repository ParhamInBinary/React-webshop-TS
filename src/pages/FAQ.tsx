import Faq from "react-faq-component";
import { OrderForm } from "../components/OrderForm";
import { Data } from "../data/dataContent";


export function FAQ() {
  const styles = {
    rowContentPaddingLeft: "20px",
    bgColor: "#f8f9fa"
  };

  return (
    <div>
      <Faq data={Data} styles={styles} />
      {/* <OrderForm /> */}
    </div>
  );
}
