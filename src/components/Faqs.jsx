import faqs from '../content/faq.json';
import Faq from './Faq';
const Faqs = () => {
  return (
    <div className="max-w-2xl container">
      <h1 className="text-4xl mb-6 font-semibold text-center">Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <Faq key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default Faqs;
