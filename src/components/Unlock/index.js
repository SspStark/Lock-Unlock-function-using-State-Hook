import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, toggleLock] = useState(true)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image
          src={
            isLocked
              ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
          }
          alt={isLocked ? 'lock' : 'unlock'}
        />
        <Text>
          {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </Text>
      </ImageAndTextContainer>
      <Button
        type="button"
        onClick={() => toggleLock(prevStatus => !prevStatus)}
      >
        {isLocked ? 'Unlock' : 'Lock'}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock
