import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import categories from "../data"
import Item from "./Item"

const Items = ({ filteredItems, isSubmitted }) => {
  const pagination = {
    el: ".my-custom-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `
        <span class="${className}">
          <span className="text-xs whitespace-nowrap font-semibold">
            ${categories[index]?.title}
          </span>
          <Image
            src=${categories[index]?.image}
            alt=""
            width="24"
            height="24"
            priority
            className='z-10'
          />
        </span>
      `
    },
  }

  return (
    <Swiper
      allowSlideNext={!isSubmitted}
      allowSlidePrev={!isSubmitted}
      autoHeight={true}
      pagination={pagination}
      modules={[Pagination]}
      onSlideChange={() => {
        const activeCat = document.querySelector(
          ".swiper-pagination-bullet-active"
        )
        activeCat?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        })
      }}
    >
      {categories.map((category, i) => (
        <SwiperSlide key={i} className="h-fit">
          <div
            className={`relative space-y-2 flex flex-col justify-center overflow-hidden items-center pb-4 animateItems`}
          >
            <div className="w-full p-4 flex flex-col gap-2 items-center">
              {isSubmitted ? (
                filteredItems.length === 0 ? (
                  <p className="text-center w-full text-3xl font-bold text-gray-600 mt-20 dark:text-gray-200">
                    لا يوجد نتائج
                  </p>
                ) : (
                  filteredItems.map((item, index) => (
                    <Item item={item} key={index} />
                  ))
                )
              ) : (
                category.items?.map((item, index) => (
                  <Item item={item} key={index} />
                ))
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Items
