import React from 'react'
import { BulletPoints, KeyContainer } from './styles'

function Key() {
  return (
    <KeyContainer>
        <BulletPoints>
            Not Completed
        </BulletPoints>
        <BulletPoints>
            Completed
        </BulletPoints>
    </KeyContainer>
  )
}

export default Key