import React from 'react'
import { Link, Route } from 'react-router-dom'
import {FiHome, FiTv, FiUser, FiBook, FiClipboard , FiCpu } from 'react-icons/fi'


import { StaticKeyWords } from '../constants/config'



const BUTTONS = [
    StaticKeyWords?.sidebar?.dashboard,
    StaticKeyWords?.sidebar?.class,
    StaticKeyWords?.sidebar?.teacher,
    StaticKeyWords?.sidebar?.student,
    StaticKeyWords?.sidebar?.course,
    StaticKeyWords?.sidebar?.meta,
]


const SideNavigation: React.FC = () => {
    const [active, setActive] = React.useState(0)
    

    const handleTabs = (index: number) => {
        setActive(index)
    }
    return (
        <div>
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
              {
                  BUTTONS.map((button, index) => {
                      return (
                        <li className="nav-item"  key={index.toString()} onClick={() => handleTabs(index)}>
                            <Link to={button?.path} className="nav-link">
                            <a className={"nav-link " + (active === index && "active")} aria-current="page" href="#">
                            <p className=''> 
                            <span className='mx-1' >
                             <i className={button?.icon}></i>
                              
                            </span>
                              {button?.title} 
                            </p>
                            </a>
                            </Link>
                        </li>
                      )
                  })

              }
           
          </ul>
    
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
         
        </div>
      </nav>
      </div>
    )
}

export default SideNavigation