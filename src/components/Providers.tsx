'use client'

import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import React from 'react'

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <>
    <Toaster position='top-center' reverseOrder={false}/>
    {children}

  </>
}

export default Providers