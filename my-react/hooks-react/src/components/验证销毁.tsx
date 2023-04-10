import React, { useState } from 'react'
import {useEffect} from 'react'

export default function Validation() {
  useEffect(() => {
    return () => {
        console.log('销毁前')
    }
  })
    return (
        <div>123</div>
    )
}