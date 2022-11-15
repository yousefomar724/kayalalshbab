import TopNav from "./components/TopNav"
import SideNav from "./components/SideNav"
import { useRef, useState } from "react"
import categories from "./data"
import SearchLabel from "./components/SearchLabel"
import SearchBar from "./components/SearchBar"
import Items from "./components/Items"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const inputRef = useRef()
  const [sideNav, setSideNav] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [searchValue, setSearchValue] = useState(inputRef.current?.value || "")

  const handleSearch = (e) => {
    e.preventDefault()
    inputRef.current.blur()
    if (inputRef.current?.value.length > 0) {
      setIsSubmitted(true)
      setSearchValue(inputRef.current?.value)
      const items = categories
        .flatMap((c) => c.items)
        .filter((i) => i.title.includes(inputRef.current?.value))

      setFilteredItems(items)
      e.target.reset()
    }
  }

  const close = () => {
    setIsSubmitted(false)
    setFilteredItems([])
  }

  return (
    <div
      className="relative min-h-screen max-w-md mx-auto shadow-2xl transition duration-100 dark:bg-gray-700"
      dir="rtl"
    >
      <Router>
        <TopNav setSideNav={setSideNav} />
        <SearchBar
          handleSearch={handleSearch}
          inputRef={inputRef}
          close={close}
          isSubmitted={isSubmitted}
        />
        {/* Pagination */}
        <div className="my-custom-pagination"></div>
        {isSubmitted && (
          <SearchLabel
            filteredItems={filteredItems}
            searchValue={searchValue}
          />
        )}
        <SideNav sideNav={sideNav} setSideNav={setSideNav} />
        <Routes>
          <Route
            path="/"
            element={
              <Items filteredItems={filteredItems} isSubmitted={isSubmitted} />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
