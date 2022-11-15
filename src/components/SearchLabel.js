const SearchLabel = ({ searchValue, filteredItems }) => {
  return (
    <div className="m-4 bg-gray-100 px-3 py-2 rounded-md dark:bg-primaryGreen-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl dark:text-white text-primaryGreen-600 dark:text-white font-bold">
          {searchValue}
        </h2>
        <span className="text-xs dark:text-gray-200 text-gray-600 flex items-center gap-1 dark:text-gray-200">
          <span className="text-lg text-primaryGreen-500 dark:text-white">
            ({filteredItems.length})
          </span>{" "}
          صنف من نتائج البحث
        </span>
      </div>
    </div>
  )
}

export default SearchLabel
