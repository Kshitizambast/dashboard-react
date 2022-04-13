import React from 'react'


import { StaticKeyWords as sk } from '../../constants/config'
import Home from '../../home/Home'
import SideNavigation from '../../navigation/SideNavigation'
import ProjectInfoCard from '../../common/ProjectInfoCard'



const Landing: React.FC = (props) => {

  const [loading, setLoading] = React.useState(false)

  const handleSubmit = () => {
    setLoading(!loading)
  }
  return (
    <div className='row mt-5'>
      <div>
        <div className='row d-flex'>
          <div className='col py-5'>
            <div className='d-flex justify-content-center align-items-center my-5'>
              {/* Create a form in a cards in middle of the screen using bootstarp 5 */}
              <div className="card rounded shadow-lg" >
                <div className="card-body d-flex p-0">
                  <ProjectInfoCard
                    title={sk?.title}
                    description={sk?.schedular?.desc}
                    question={sk?.auth?.signup?.loginDesc}
                    link={sk?.auth?.signup?.loginButton}
                  />
                  <div className='m-4 py-3' style={{ width: 400 }}>
                    <h3>{sk?.schedular?.title}</h3>
                    <form>
                      <div className="form-group mb-5 mt-3">
                        <label htmlFor="exampleInputEmail1">{sk?.schedular?.subject}</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <small id="emailHelp" className="form-text text-muted">{sk?.schedular.subjectDesc}</small>
                      </div>
                      <div className="form-group mt-4 mb-3">
                        <label htmlFor="exampleInputPassword1">{sk?.schedular?.date}</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>

                    </form>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-2"
                      style={{ width: '100%' }}
                      onClick={handleSubmit}
                    >

                      <div className='d-flex justify-content-center align-items-center'>
                        <p className='m-2'> {sk?.auth?.signup?.button}</p>
                        {loading && <p>Loading...</p>}
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