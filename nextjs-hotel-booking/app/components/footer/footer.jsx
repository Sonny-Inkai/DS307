import { Allison } from 'next/font/google'
import { CCircle } from 'react-bootstrap-icons'
import styles from './footer.module.scss'
import { Container } from 'react-bootstrap'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Footer() {
  return (
    <footer data-bs-theme='dark' className={`py-3 ${styles.footer}`}>
      <Container className='d-flex justify-content-evenly align-content-center'>
        <div className='col-md-4 d-flex flex-column mt-1 text-center'>
          <p className='mb-0'>
            <a>
              DS307 Nhóm 16
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
