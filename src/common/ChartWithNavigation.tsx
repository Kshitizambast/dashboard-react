import React, { useEffect } from 'react'

import ChartNavigation from './ChartNavigation'
import BigLineChart from '../components/BigLineChart'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getInstructorMovementData, setActiveNavTab, setInstructorMovementData } from '../home/homeSlice'
import BigBarChart from '../components/BigBarChart'
import BigBubbleChart from '../components/BigBubbleChart'
import BigScatterChart from '../components/BigScatterChart'


function sitAndStandModification(sitAndStand: Array<any>){
   let modifiedData = []
   let frequency: any = {}
   sitAndStand.forEach(element => {
      if(frequency[element.timeDiff.seconds]){
         frequency[element.timeDiff.seconds] += 1
      }else{
         frequency[element.timeDiff.seconds] = 1
      }
   })
   let timeDiffs = []
   for(let key in frequency){
      let diff = 1 / frequency[key]
      for(let i = 0; i < frequency[key]; i++){
         timeDiffs.push(parseFloat(key) + diff * i)
      }
   }
    
   // add timeDiffs to sitAndStand
    for(let i=0; i<timeDiffs.length; i++){
      let timeDiff = timeDiffs[i]
      var o = Object.assign({}, sitAndStand[i])
      o.timeDiff = {seconds: timeDiff}
      modifiedData.push(o)
    }
      


    return modifiedData
   
}

export const ChartWithNavigation = () => {

  const [timeDiffs, setTimeDeffs] = React.useState<any>([])
  const [sitData, setSitData] = React.useState<any>([])
  const [standData, setStandData] = React.useState<any>([])

  const activeNavTab = useAppSelector(state => state.home.activeNavTab)
  const sitAndStandData = useAppSelector((state) => state.home.sitAndStandData)
  const instructorMovementData = useAppSelector((state) => state.home.instructorMovementData)
  const sessionId = useAppSelector((state) => state.home.sessionId)

  console.log('sitAndStand', sitAndStandData);
  const modifiedSitAndStand = sitAndStandModification(sitAndStandData)
  console.log('modifiedSitAndStand', modifiedSitAndStand);


  useEffect(() => {
    //dispatch(setActiveNavTab('sit'))
    dispatch(getInstructorMovementData('61921e8f94d0b4233d7ca210'))

    return () => {
      dispatch(setInstructorMovementData([]))
    }

  }, [activeNavTab])



  console.log('timeDiffs', timeDiffs);
  console.log('sit',sitData);
  console.log('stand', standData);
  
  // const timeDeffs = 
  
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

            </div>
          </div>
          {
            activeNavTab === 0 ?
                <BigLineChart sitAndStandData={modifiedSitAndStand}  />
              : activeNavTab === 1 ?
                  <BigScatterChart instructorMovementData={instructorMovementData} />
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
