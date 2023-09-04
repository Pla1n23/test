import React from 'react';
import './TextButton.css';
/**
 * @param mode - 'primary' | 'secondary'
 */
export const TextButton = ({children, mode, ...props}) => {
  return (
    <button {...props} className='button'>{children}</button>
  )
}
