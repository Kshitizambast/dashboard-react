import React from 'react'
import SmallBarChart from '../components/SmallBarChart'

interface Props {
  children: React.ReactNode
  title: string
  currentNumber: string
  changes: string
}

const CardSmall: React.FC<Props> = (props) => {
  return (
    <div className="card  shadow-lg mb-2 bg-body rounded" >
      <div className="card-body">
        <div className='row'>
          <div className='col m-0 text-start'>
            <h5 className="text-primary fw-normal mt-0" title="Number of Customers">{props.title}</h5>
            <h3 className="mt-3 mb-3">{props.currentNumber}</h3>
            <p className="mb-0 text-muted">
              <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> {props.changes}%</span>
              <br />
              <span className="text-nowrap">Since last month</span>
            </p>

          </div>
          <div className='col px-3 m-3'>
            <div style={{width: 250}}>
              {props.children}
            </div>  
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardSmall