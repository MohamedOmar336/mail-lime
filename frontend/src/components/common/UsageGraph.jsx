import React from 'react'
import { Progress, ConfigProvider, Badge } from 'antd'
import '../../styles/components/common/UsageGraph.css'
const UsageGraph = () => {
  let totalCredits = 100;
  let usedCredits = 60;
  return (
      <div className='bs-container bs-mb-4'>
        <div className='bs-row bs-p-3' style={{ backgroundColor: '#ffffff', borderRadius: '0.25rem' }}>
          <h3 className='plan-usage'>Credits Usage</h3>
          <p className='secondary-text'>This is the current usage of credits. you can purchase for more if needed.</p>
            <p className='bs-ps-0 bs-mb-2 credits-usage'>Used Credits: <span>{usedCredits}</span></p>
            <p className='bs-ps-0 bs-mb-2 credits-usage'>Total Credits: <span>{totalCredits}</span></p>
            <p className='plan-usage-field'>Metric:</p>
            <Progress className='bs-px-0 bs-mb-3' percent={usedCredits/totalCredits*100} size={[300, 8]} status="active"  />
        </div>
      </div>
  )
}

export default UsageGraph