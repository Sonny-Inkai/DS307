'use client'

import { useAuthContext } from '@/app/context/context'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Loading from '../loading/loading'

export default function UserButton() {
  const { session, loading, setSession } = useAuthContext()

  const handleSignOut = () => {
    localStorage.removeItem('session')
    setSession(null)
  }

  if (loading) {
    return <Loading className='text-white' />
  } else {
    if (session) {
      return (
        <DropdownButton
          as={ButtonGroup}
          key='down-centered'
          drop='down-centered'
          align='end'
          variant='light'
          data-bs-theme='dark'
          title={
            session.User.length <= 15
              ? session.User
              : `${session.User.slice(0, 15)}...`
          }
        >
          <li>
            <Link href='/profile' className='dropdown-item my-3 link-light'>
              Profile
            </Link>
          </li>
          <li>
            <Button
              onClick={handleSignOut}
              className='dropdown-item my-3 link-light'
            >
              Sign out
            </Button>
          </li>
        </DropdownButton>
      )
    } else {
      return (
        <Link href='/auth' className='btn btn-outline-light'>
          Sign in
        </Link>
      )
    }
  }
}
