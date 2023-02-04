import React from 'react'
import imgAvatar from './avatar.png'
import { Image } from 'react-bootstrap'
export default function Avatar() {
  return (
    <Image src={imgAvatar} style={{width:"400px"}} className='mt-5 position-absolute bottom-0'/>
  )
}
