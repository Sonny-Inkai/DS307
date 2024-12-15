import { Montserrat } from 'next/font/google'
import Container from 'react-bootstrap/Container'
import CarouselComponent from './carousel-component'
import ButtonContainer from './button-container/button-container'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'

const montserratBold = Montserrat({ subsets: ['latin'], weight: ['400'] })

export default function SuiteDetail({ suite }) {
  return (
    <Container className='row'>
      <div className='col-12 col-md-6 mt-2 mt-md-0 p-0 align-self-center'>
        <CarouselComponent suite={suite} />
      </div>

      <div className='col-12 col-md-6 my-4 p-0 ps-md-4'>
        <h1 className={`${montserratBold.className} mb-3`}>{suite.name}</h1>
        
        <div className='d-flex align-items-center mb-3'>
          <FaMapMarkerAlt size={20} className="me-2 text-primary"/>
          <p className='m-0'>{suite.address}</p>
        </div>

        <div className='d-flex align-items-center mb-4'>
          <FaStar size={20} className="me-2 text-warning"/>
          <p className='m-0'>{suite.rating} / 5.0</p>
        </div>

        <div className='mb-4'>
          <h2 className='fs-4 mb-3'>Mô tả</h2>
          <p className='text-muted'>{suite.description}</p>
        </div>

        <div className='mb-4'>
          <h2 className='fs-4 mb-3'>Địa điểm</h2>
          <p className='text-muted'>{suite.location}</p>
        </div>

        <div className='d-flex justify-content-between align-items-center mt-5'>
          <ButtonContainer suite={suite} />
        </div>
      </div>
    </Container>
  )
}
