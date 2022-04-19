import React from 'react'

import ChartNavigation from './ChartNavigation'
import BigLineChart from '../components/BigLineChart'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setActiveNavTab } from '../home/homeSlice'
import BigBarChart from '../components/BigBarChart'
import BigBubbleChart from '../components/BigBubbleChart'

export const ChartWithNavigation = () => {

  const activeNavTab = useAppSelector(state => state.home.activeNavTab)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className='card mt-3 overflow-hidden shadow-lg  bg-body' style={{ height: 550 }}>
        <div className='card-header py-0 px-0 pr-0' style={{ backgroundColor: '#F8FAFC' }}>
          <ChartNavigation />
        </div>
        <div className='card-body p-3 m-3'>
          <div className="jumbotron jumbotron-fluid">
            <div className="container bg-light ">
              <div className='row'>
                <div className='col'>
                  <h3 className='display-6'>Last Week</h3>
                  <h4>848</h4>

                </div>
                <div className='col'>
                  <h3 className='display-6'>This Week</h3>
                  <h4>1848</h4>
                </div>
              </div>
            </div>
          </div>
          {
            activeNavTab === 0 ?
                <BigLineChart />
              : activeNavTab === 1 ?
                  <BigBarChart />
                : <BigBubbleChart />
          }
          {/* <BigLineChart /> */}
          <hr />
          <div>
            <a href="#" className="card-link" style={{ float: 'left' }}>Card link</a>
            <a href="#" className="card-link" style={{ float: 'right' }}>Another link</a>
          </div>
        </div>

      </div>
    </div>
  )
}
