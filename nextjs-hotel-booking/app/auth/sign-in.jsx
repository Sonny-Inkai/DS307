import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2-uncensored'
import usersData from './users.json' // Đảm bảo đường dẫn đúng tới tệp users.json

export default function SignIn({ router, handleCreateAccountClick }) {

  const [userId, setUserId] = useState('')
  const [userName, setUserName] = useState('') // Để lưu tên người dùng

  const handleSubmit = (e) => {
    e.preventDefault()

    // Kiểm tra userId trong users.json
    const user = usersData.find(user => user.UserID === parseInt(userId)) // Tìm người dùng theo UserID

    if (user) {
      // Đăng nhập thành công, lưu tên người dùng
      setUserName(user.User)
      Swal.fire({
        icon: 'success',
        text: `Welcome, ${user.User}!`, // Thông báo chào mừng
        showConfirmButton: false,
        timer: 2500
      })

      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('session', JSON.stringify(user))

      // Chuyển hướng đến trang chính
      router.push('/', { scroll: false })
    } else {
      // Đăng nhập không thành công
      Swal.fire({
        icon: 'warning',
        text: 'User ID không hợp lệ.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container fluid>
        <h1 className='fs-3 mb-3'>Please sign in</h1>

        <FloatingLabel controlId='floatingInput' label='User ID' className='mb-1'>
          <Form.Control type='text' placeholder='Enter your User ID' required onChange={(e) => setUserId(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId='floatingPassword' label='Password' className='mb-1'>
          <Form.Control type='password' placeholder='Password' value='1' readOnly />
        </FloatingLabel>

        <Button variant='secondary' className='mt-4' type='submit'>Sign in</Button>
        <Button variant='outline-secondary' className='mt-5' onClick={handleCreateAccountClick}>Create account</Button>
      </Container>
    </Form>
  )
}