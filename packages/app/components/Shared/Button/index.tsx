import { Button as ButtonBox } from 'native-base'

export function Button(props) {
  const { children } = props

  return (
    <ButtonBox
      width="100%"
      height="56px"
      py="16px"
      px="20px"
      bg="#16A34A"
      color="#F3F4F6"
      variant="primary"
      {...props}
    >
      {children}
    </ButtonBox>
  )
}
