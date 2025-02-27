import React from 'react'
import EvaluationPlans from '@/components/EvaluationPlans'
import Csat from '@/components/Csat'
import ToppersCopies from '@/components/ToppersCopies'
import HomePage from '@/components/HomePage'
const page = () => {
  return (
    <div>
      <HomePage/>
      <EvaluationPlans/>
      <Csat/>
      <ToppersCopies/>
    </div>
  )
}

export default page
