import { BsSearch, BsX } from "react-icons/bs"

const SearchBar = ({ handleSearch, inputRef, close, isSubmitted }) => {
  return (
    <form
      name="myForm"
      className="mx-4 mt-4 flex gap-2"
      onSubmit={handleSearch}
    >
      <input
        ref={inputRef}
        autoComplete="off"
        type="text"
        placeholder="ابحث..."
        name="search"
        className="outline-none border border-gray-200 focus:border-primaryGreen-500 p-1.5 flex-grow rounded-md bg-white focus:bg-white dark:bg-gray-700 dark:placeholder:text-white dark:text-white"
      />
      {isSubmitted ? (
        <button
          className="w-10 h-10 flex items-center justify-center rounded-md text-white bg-primaryGreen-500 hover:bg-primaryGreen-600 dark:bg-gray-100 dark:text-gray-900"
          onClick={close}
          title="انهاء البحث"
        >
          <BsX className="text-2xl" />
        </button>
      ) : (
        <button
          className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-primaryGreen-600 text-gray-900 hover:bg-gray-200 dark:bg-gray-100 dark:text-gray-900"
          title="البحث"
          type="submit"
        >
          <BsSearch />
        </button>
      )}
    </form>
  )
}

export default SearchBar
