'use client'

import { FC, ButtonHTMLAttributes, useState } from 'react'
import Button from './ui/Button'
import { signOut } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { Loader2, LogOut } from 'lucide-react'
import React from 'react'


interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
    const [isSigningOut, setSigningOut] = useState<boolean>(false)


    return (
        <Button 
        {...props} 
        variant='ghost' 
        onClick={async () => {
            setSigningOut(true)
            try {
                await signOut()
            } catch (error) {
                toast.error('Could not sign out')
            } finally {
                setSigningOut(false)}
        }}>
            {isSigningOut ? (
                <Loader2 className='animate-spin h-4 w-4' />
            ) : (
                <LogOut className='w-4 h-4' />
            )}
        </Button>
    )
}

export default SignOutButton