export const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <div className="flex w-full max-w-md md:max-w-lg lg:max-w-xl border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 text-sm text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 focus:outline-none"
          />
          <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M15.75 10.5a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
