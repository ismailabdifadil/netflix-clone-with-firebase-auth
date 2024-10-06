import footerData from '../content/footerLinks.json';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <div className="container mt-12 mb-16 sm:mx-auto sm:max-w-screen-lg">
      <h1 className="text-[#6c6c6c]">Questions? Contact us</h1>
      <div className="mx-10 grid grid-cols-2 sm:grid-cols-4">
        {footerData.columns.map((data) => (
          <FooterLinks key={data} data={data} />
        ))}
      </div>
      <p className="text-[#6c6c6c] my01">Netflix in Somali</p>
    </div>
  );
};

export default Footer;
