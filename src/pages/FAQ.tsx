import Faq from 'react-faq-component';
import { Data } from '../data/dataContent'

export function FAQ() {
  return (
    <div>
      <Faq data={Data} />
    </div>
  );
}
