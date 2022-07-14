import { useState } from 'react'
import {
  Text,
  Box,
  InfoIcon,
  HStack,
  Button as ButtonBox,
  ChevronRightIcon,
  QuestionIcon,
  CheckIcon,
} from 'native-base'

import { Slide } from './Slide'
import { Bullets } from './Bullets'

export function Slides({ show, onClose }) {
  const [count, setCount] = useState(0)

  const handleClose = () => {
    setCount(0)
    onClose()
  }

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display={show ? 'flex' : 'none'}
      p="32px"
      background="#191A1C"
    >
      {/* Inforation */}
      {count === 0 && (
        <Slide
          number={1}
          title="Lorem, ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati
        consequuntur neque nihil et autem odio sed qui dolore."
          icon={<InfoIcon size="xl" color="#fff" />}
        />
      )}
      {count === 1 && (
        <Slide
          number={2}
          title="Lorem, ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati
        consequuntur neque nihil et autem odio sed qui dolore."
          icon={<QuestionIcon size="xl" color="#fff" />}
        />
      )}
      {count === 2 && (
        <Slide
          number={3}
          title="Lorem, ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati
        consequuntur neque nihil et autem odio sed qui dolore."
          icon={<CheckIcon size="xl" color="#fff" />}
        />
      )}

      {/* Bullets */}
      <HStack justifyContent="space-between" alignItems="center" py="16px">
        {/* Bullets */}
        <Bullets value={count} />

        {/* Navigation */}
        {count <= 1 ? (
          <ButtonBox
            display="flex"
            background="transparent"
            onPress={() => setCount(count + 1)}
          >
            <HStack alignItems="center" space={4}>
              <Text color="#F3F4F6">Continue</Text>
              <ChevronRightIcon color="rgba(243, 244, 246, 0.6)" />
            </HStack>
          </ButtonBox>
        ) : (
          <ButtonBox
            display="flex"
            background="transparent"
            onPress={handleClose}
          >
            <HStack alignItems="center" space={4}>
              <Text color="#F3F4F6">Confirm</Text>
              <ChevronRightIcon color="rgba(243, 244, 246, 0.6)" />
            </HStack>
          </ButtonBox>
        )}
      </HStack>
    </Box>
  )
}
