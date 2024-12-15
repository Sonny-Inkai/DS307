'use client'

import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import styles from './suite.module.scss'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const montserratBold = Montserrat({ subsets: ['latin'], weight: ['400'] })

export default function Suite({ id, image1, name, price }) {
  return (
    <Card className={styles.card}>
      <div>
        <Image
          src={image1}
          alt={name}
          width={300}
          height={300}
          quality={40}
          priority
          className={styles.img}
        />
      </div>

      <h1 className={styles.hotelName} title={name}>
        {name}
      </h1>

      <div className={styles.priceContainer}>
        <h2 className='fs-4 d-flex align-items-center gap-1'>
          {[...Array(Math.floor(price))].map((_, index) => (
            <FaStar key={index} className="text-warning" />
          ))}
          {price % 1 !== 0 && <FaStarHalfAlt className="text-warning" />}
        </h2>
      </div>

      <div className={styles.buttonContainer}>
        <Link href={`/prices/${id}`} className='btn btn-secondary w-100'>
          More information
        </Link>
      </div>
    </Card>
  )
}
