'use client'

import Suite from './suite/suite'

export default function SuitesListContainer({ hotels, recommendedHotels, loading, isAuthenticated }) {
  // Nếu user đã đăng nhập và có recommendations
  if (isAuthenticated && !loading && recommendedHotels.length > 0) {
    // Lọc hotels theo recommendedHotels IDs
    const recommendedHotelsList = hotels.filter(hotel => 
      recommendedHotels.includes(hotel.id.toString())
    )

    return (
      <div className='d-flex flex-wrap justify-content-evenly'>
        {recommendedHotelsList.map((hotel) => (
          <Suite
            key={hotel.id}
            id={hotel.id}
            image1={hotel.images[0].image1}
            name={hotel.name}
            price={hotel.rating}
          />
        ))}
      </div>
    )
  }

  // Lấy 4 hotels có rating cao nhất
  const defaultHotels = [...hotels]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)

  return (
    <div className='d-flex flex-wrap justify-content-evenly'>
      {defaultHotels.map((hotel) => (
        <Suite
          key={hotel.id}
          id={hotel.id}
          image1={hotel.images[0].image1}
          name={hotel.name}
          price={hotel.rating}
        />
      ))}
    </div>
  )
}
