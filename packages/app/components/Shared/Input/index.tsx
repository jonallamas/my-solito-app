import { Input as InputBox, FormControl, Stack } from 'native-base'

export function Input(props) {
  const { label, type, isInvalid } = props
  return (
    <FormControl isRequired isInvalid={isInvalid}>
      <Stack>
        <FormControl.Label>{label}</FormControl.Label>
        <InputBox
          height="56px"
          width="100%"
          py="17.5px"
          px="16px"
          bg="rgba(255, 255, 255, 0.1)"
          fontSize="14px"
          color="rgba(243, 244, 246, 0.6)"
          borderRadius="6px"
          borderColor="transparent"
          {...props}
        />
        {type === 'password' && (
          <FormControl.HelperText>
            Must be between 3 and 8 characters.
          </FormControl.HelperText>
        )}
      </Stack>
    </FormControl>
  )
}
