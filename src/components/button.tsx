import React, { type ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full flex items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
    />
  )
}
