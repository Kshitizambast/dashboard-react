import React, { useEffect } from 'react'


import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { useParams } from 'react-router-dom';

// import { getSessions } from './homeSlice'
import ChartNavigation from '../common/ChartNavigation';
import CardSmall from '../common/CardSmall';
import SmallBarChart from '../components/SmallBarChart';
import SmallLineChart from '../components/SmallLineChart';
import SmallBubbleChart from '../components/SmallBubbleChart';
import SmallPieChart from '../components/SmallPieChart';
import BigLineChart from '../components/BigLineChartForSitAndStand';
import { ChartWithNavigation } from '../common/ChartWithNavigation';
import LongCard from '../common/LongCard';
import SchedulerForm from '../components/SchedulerForm';
import { getSitAndStandData, setSessionId } from './homeSlice';

const Home: React.FC = () => {


  const sitAndStandData = useAppSelector((state) => state.home.sitAndStandData)
  const { id } = useParams();
  

  const dispatch = useAppDispatch()

  const _id: number = parseInt(id);

  

  useEffect(() => {
    dispatch(getSitAndStandData(id))
    
    dispatch(setSessionId(_id))
  }, [])

  // console.log(sitAndStandData);
  
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
      <ChartWithNavigation />
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