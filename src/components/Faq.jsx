import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const Faq = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="py-1 ">
        <div className="flex justify-between items-center bg-[#303030] rounded mb-[1px] py-5 px-3 relative">
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
          <div>
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes /> : <FaPlus />}
            </button>
          </div>
        </div>
        <p className={`${open ? 'block' : 'hidden'} mt-2 text-md tracking-wide bg-[#303030]  py-5 px-3`}>{description}</p>
      </div>
    </div>
  );
};

export default Faq;
