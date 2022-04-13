import React from 'react'


interface ArmPose {
    handRaised: number
    armCrossed: number
    handOnFace: number
    error: number
    other: number
}

interface Props {
    timeDiff: number
    armPoseCount: ArmPose
}

const PieChart: React.FC = () => {
  return (
    <div>PieChart</div>
  )
}

export default PieChart