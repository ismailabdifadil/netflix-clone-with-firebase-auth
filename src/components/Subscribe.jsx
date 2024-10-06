const Subscribe = () => {
  return (
    <div className="container mt-12 max-w-screen-sm mx-auto">
      <div>
        <h4 className="text-md text-center mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className="m-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0">
          <input
            placeholder="Email address"
            className="w-full sm:min-w-[360px] bg-white px-24 py-4 text-black outline-none sm:px-3"
          />
          <button className="flex w-full items-center justify-center bg-[#e50914] py-4 text-xl sm:py-0 sm:px-8 text-white">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
