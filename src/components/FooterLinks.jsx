const FooterLinks = ({ data }) => {
  return (
    <div className="flex flex-col space-y-2 my-4">
      {data.map((link) => (
        <a className="text-sm text-[#6c6c6c]" href="#">
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
