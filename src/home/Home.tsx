import React, { useEffect } from 'react'


import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { getSessions } from './homeSlice'
import ChartNavigation from '../common/ChartNavigation';
import CardSmall from '../common/CardSmall';
import SmallBarChart from '../components/SmallBarChart';
import SmallLineChart from '../components/SmallLineChart';
import SmallBubbleChart from '../components/SmallBubbleChart';
import SmallPieChart from '../components/SmallPieChart';
import BigLineChart from '../components/BigLineChart';
import { LineChartWithNavigation } from '../common/LineChartWithNavigation';
import LongCard from '../common/LongCard';
import SchedulerForm from '../components/SchedulerForm';

const Home: React.FC = () => {

  const sessions = useAppSelector((state) => state.home.sessions)
  const activeTab = useAppSelector((state) => state.home.activeNavTab)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(getSessions())
  }, [])

  // console.log(sessions);

  return (
    <div>
      <div className='row pr-5 m pt-3' >
        <div className='col'>
          <CardSmall title='Session' currentNumber='4.5K' changes='1.5'>
            <SmallBarChart />
          </CardSmall>
        </div>
        <div className='col'>
          <CardSmall title='Session' currentNumber='4.5K' changes='1.5'>
            <SmallLineChart />
          </CardSmall>
        </div>
      </div>
      <div className='row '>
        <div className='col'>
          <CardSmall title='Session' currentNumber='4.5K' changes='1.5'>
            <SmallBubbleChart />
          </CardSmall>
        </div>
        <div className='col'>
          <CardSmall title='Session' currentNumber='4.5K' changes='1.5'>
            <SmallBarChart />
          </CardSmall>
        </div>
      </div>
      {/* Build a card in bootstarp */}
      <LineChartWithNavigation />
      {/* Make Cards in one row with two equal columns */}
      <div className='row mt-3'>
        <div className='col'>
          <LongCard title='Sessions'>
            <SmallPieChart />
          </LongCard>
        </div>
        <div className='col'>
        <LongCard title='Sessions'>
            <SmallBarChart />
          </LongCard>
        </div>
      </div>
    </div>
  )
}

export default Home