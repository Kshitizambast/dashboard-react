import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
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

  const handleChange = (event: any) => {
    setSelectedSubject(event.target.value)
    const data: any = findDatesBasedOnSubjects(event.target.value)
    seRelativeDates(data)
  }
 
  const handleClick = () => {
   navigate(`/dashboard/${sessionId}`)
  }


  console.log(sessionId);

  return (
    <div className='row'>
      <div>
        <div className='row d-flex'>
          <div className='col py-5'>
            <div className='d-flex justify-content-center align-items-center my-5'>
              {/* Create a form in a cards in middle of the screen using bootstarp 5 */}
              <div className="card rounded shadow-lg" >
                <div className="card-body d-flex p-0">
                  <ProjectInfoCard
                    title={sk?.title}
                    description={sk?.session?.desc}
                  />
                  <div className='m-4 py-3' style={{ width: 400 }}>
                    <h3>{sk?.session?.title}</h3>
                    <Form>
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>{sk?.session?.subject}</Form.Label>
                          <Form.Select className='mb-5' onChange={handleChange}>
                            {
                              uniqueSubjects &&
                              uniqueSubjects.map((value) => {
                                return (
                                  <option key={value} value={value}>{value}</option>
                                )
                              }
                              )
                            }
                          </Form.Select>
                          <Form.Label>{sk?.session?.date}</Form.Label>
                          <Form.Select className='mb-3' onChange={(event) => dispatch(setSessionId(event.target.value))}>

                            {relativeDates &&
                              relativeDates.map((value: any, index: number) => {
                                return (
                                  <option key={index} value={value?.id}>{
                                    dateTime(value?.createdAt)
                                
                                    }</option>
                                )
                              })
                            }
                          </Form.Select>
                        </Form.Group>
                      </>
                    </Form>
                      <button
                       onClick={handleClick}
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                        style={{ width: '100%' }}

                      >
                        <div className='d-flex justify-content-center align-items-center'>
                          <p className='m-2'> {sk?.session?.button}</p>
                          {/* {loading && <p>Loading...</p>} */}
                        </div>
                      </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing