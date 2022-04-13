import React from 'react'

import ProjectInfoCard from '../../common/ProjectInfoCard'
import { StaticKeyWords as sk } from '../../constants/config'

const Signup: React.FC = () => {
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = () => {
        setLoading(!loading)
    }
    return (
        <div>
            <div className='row d-flex'>

                <div className='col py-5'>
                    <div className='d-flex justify-content-center align-items-center my-5'>
                        {/* Create a form in a cards in middle of the screen using bootstarp 5 */}
                        <div className="card rounded shadow-lg" >
                            <div className="card-body d-flex p-0">
                                <ProjectInfoCard
                                    title={sk?.title}
                                    description={sk?.appDesc}
                                    question={sk?.auth?.signup?.loginDesc}
                                    link={sk?.auth?.signup?.loginButton}
                                />
                                <div className='m-4 py-3' style={{ width: 400 }}>
                                    <h3>{sk?.auth?.signup?.title}</h3>
                                    <form>
                                        <div className="form-group mb-5 mt-3">
                                            <label htmlFor="exampleInputEmail1">{sk?.auth?.signup?.email}</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">{sk?.auth?.signup?.emailDesc}</small>
                                        </div>
                                        <div className="form-group mt-4 mb-3">
                                            <label htmlFor="exampleInputPassword1">{sk?.auth?.signup?.password}</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group form-check mb-5 m-4">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">{sk?.auth?.signup?.checkbox}</label>
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
                                       {   loading &&  <p>Loading...</p>}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup