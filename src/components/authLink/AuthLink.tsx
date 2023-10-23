"use client"
import React,{useState} from 'react'
import styles from './authLink.module.scss'
import Link from 'next/link'
import avt from "@/assets/imgs/logo/avatar.jpeg"
import Image from 'next/image'
const AuthLink:React.FC = () => {
  const [open,setOpen]= useState<boolean>(false)
  const status="notauthenticated"
  return (
   <>
   {status==="notauthenticated"?(
    <Link href="/login"  className={styles.link}>Login</Link>
   ):(
    <>
    <Image src={avt} alt="avatar" width={25} height={25} className={styles.img}/>
    <span className={styles.link}>Logout</span>
    </>)}
    <div className={styles.burger} onClick={()=>setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {
      open&&(
        <div className={styles.responsiveMenu} >
        <Link href="/" >Home</Link>
        <Link href="/" >Contact</Link>
        <Link href="/" >About</Link>
        <Link href="/">Catrgories</Link>
        {status==="notauthenticated"?(
               <Link href="/login">Login</Link>):(
                <>
                <Link href="/profile">UserName</Link>
                <span className={styles.link}>Logout</span>
                </>)}
        </div>
      )
    }
  </>
  )
  
}

export default AuthLink