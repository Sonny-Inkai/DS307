'use client'

import { useEffect, useState } from 'react'
import { useAuthContext } from '@/app/context/context'
import axios from 'axios'
import SuitesListContainer from './suites-list-container/suites-list-container'
import styles from './page.module.scss'
import hotelsData from '@/public/hotels.json'
import dynamic from 'next/dynamic'


export default function Prices() {
  const [recommendedHotels, setRecommendedHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const { session } = useAuthContext()

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        if (session?.UserID) {
          const response = await axios.get(`http://localhost:8080/recommend`, {
            params: {
              uid: session.UserID,
              k: 4,
              remove_seen: true
            }
          })
          setRecommendedHotels(response.data.recommendations)
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [session])

  return (
    <main className={`container-fluid ${styles.main}`}>
      <h1 className='fs-2 my-5'>
        {session ? 'Recommended Hotels For You' : 'Popular Hotels'}
      </h1>
      <SuitesListContainer 
        hotels={hotelsData}
        recommendedHotels={recommendedHotels}
        loading={loading}
        isAuthenticated={!!session}
      />
    </main>
  )
}
