function SearchBar({ ...rest }) {
  return (
    <div className="flex  flex-wrap mb-40 items-center w-50 h-12 justify-center ">
      <input
        type="text"
        placeholder="Search Crypto"
        className="bg-blue-700  placeholder-white items-center p-3 rounded-sm outline-none h-full w-60 mt-20"
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
