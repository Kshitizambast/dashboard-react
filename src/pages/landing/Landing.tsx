import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment'

import { StaticKeyWords as sk } from '../../constants/config'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

import { getSessions, setSessionId } from './landingSlice'
import SideNavigation from '../../navigation/SideNavigation'
import ProjectInfoCard from '../../common/ProjectInfoCard'
import { Link, useNavigate } from 'react-router-dom'
import { dateTime } from '../../utils/formatTime'


const Landing: React.FC = (props) => {

  const _sessions = useAppSelector((state) => state.landing.sessions)
  const loading = useAppSelector((state) => state.landing.loading)
  // const activeTab = useAppSelector((state) => state.landing.activeNavTab)su
  const [selectedSubject, setSelectedSubject] = useState('')
  const [relativeDates, seRelativeDates] = useState([])
  const [activeTab, setActiveTab] = useState<number>(-1)
  const [selectedTime, setSelectedTime] = useState<number>(-1)
  const [searchString, setSearchString] = useState('')

  let navigate = useNavigate()

  const dispatch = useAppDispatch()

  const sessionId = useAppSelector((state) => state.landing.sessionId)

  const subOptions: string[] = []


  useEffect(() => {
    dispatch(getSessions())

  }, [])

  _sessions.forEach((session) => {
    subOptions.push(`${session.keyword}`)
  })

  const uniqueSubjects = [...new Set(subOptions)]

  const findDatesBasedOnSubjects = (subject: string) => {
    const data = _sessions.filter((session) => session.keyword === subject)
    return data
  }

  const handleChange = (index: any) => {
    setActiveTab(index)
    setSelectedSubject(uniqueSubjects[index])
    const data: any = findDatesBasedOnSubjects(uniqueSubjects[index])
    seRelativeDates(data)
    console.log('data', data);


  }

  const handleClick = (index) => {
    // setSelectedTime(index)
    const _data = relativeDates[selectedTime]
    navigate(`/dashboard/${_data?.id}`)
  }


  console.log(relativeDates);

  return (
    <div className='row d-flex mt-4' style={{ marginBottom: 80 }}>
      <div className='col-md-5'>
        <div className="card my-2 shadow-lg" style={{ height: 500 }}>
          <div className="card-header">
            Select Class
          </div>
          <input
            className="form-control form-control-lg m-3"
            onChange={(e) => setSearchString(e.target.value)}
            value={searchString}
            type="text"
            placeholder="Search class"
            aria-label=".form-control-lg example"
            style={{ width: 400 }} />
          <Scrollbars style={{ height: 300 }}>
            <div className="card-body ">

              {
                uniqueSubjects.map((subject, index) => {
                  return (
                    <div className={"card m-2 " + (activeTab === index && "bg-primary text-white")} key={index} onClick={() => handleChange(index)} style={{ cursor: 'pointer' }}>
                      <div className="card-body">
                        <h6>{subject}</h6>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </Scrollbars>
        </div>
      </div>
      <div className='col-md-7'>
        <div className="card my-2 card my-2 shadow-lg">
          <div className="card-header">
            Select Time
          </div>
          <Scrollbars style={{ height: 400 }}>
          <div className="card-body" style={{ minHeight: 450, maxHeight: 400 }}>
            {
              relativeDates.length > 0 ? relativeDates.map((session, index) => {
                return (
                  <div className={"card m-2 " + (selectedTime === index && "bg-primary text-white")} key={index} onClick={() => setSelectedTime(index)} style={{ cursor: 'pointer' }}>
                    <div className="card-body">
                      <h6>{dateTime(session?.createdAt)}</h6>
                    </div>
                  </div>
                )
              })
                : <h6>Please select the classroom</h6>
            }
          </div>
          </Scrollbars>
          <button className='btn btn-primary m-2' onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>



      {/* {
            uniqueSubjects.map((subject, index) => {
              return (
                <div className='col-md-3 m-3' key={index}>
                  <div className="card">
                    <div className="card-body">
                      {subject}
                    </div>
                  </div>
                </div>
              )
            })
          } */}
    </div>

  )
}

export default Landing