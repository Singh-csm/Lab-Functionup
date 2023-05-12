import React from 'react'
import logo from '.././Left Component/whatsapp.png'
import t from './Top.module.css'

export default function Top() {
  return (
    <div className={t.main}>
      <p className={t.ptag}>You Know someone who wants to learn Tech and start their career.</p>
      <button className={t.btn}>
        <img src={logo} alt="whatsapp logo" />
        <p> Refer them</p>
      </button>

    </div>
  )
}
