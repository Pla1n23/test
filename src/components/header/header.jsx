import { TextButton } from '../UI';
import { useNavigate } from 'react-router';

export function Header(){

  const navigate = useNavigate()

  return (
    <>
      <TextButton onClick={navigate('/todo')}>Todo</TextButton>
      <TextButton onClick={navigate('/todo')}>Избранное</TextButton>
      <TextButton onClick={navigate('/')}>Выполнено</TextButton>
    </>
  )
}