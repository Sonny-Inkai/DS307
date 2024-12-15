'use client'

import { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import styles from './suite-detail.module.scss'

export default function CarouselComponent({ suite }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Carousel className={styles.carousel}>
      {suite.images.map((image, index) => {
        const imagePath = Object.values(image)[0]

        return (
          <Carousel.Item key={`${suite.id}-${index}`}>
            <Image
              src={imagePath}
              alt={`${suite.name} - Ảnh ${index + 1}`}
              width={700}
              height={500}
              quality={100}
              priority={true}
              className={styles.img}
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
