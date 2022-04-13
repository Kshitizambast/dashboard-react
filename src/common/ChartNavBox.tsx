import React, { useState } from 'react'

interface NavBoxData {
    title: string
    currentNumber: string
    changes: string
    styleClass: string
}



const ChartNavBox: React.FC<NavBoxData> = (props) => {
    return (
        <div className='mx-0'>
            <li className={"nav-item px-0 mx-0 " + (props.styleClass)} style={{ width: 150 }}>
                <a className="nav-link mb-0 active" id="users-tab" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="true">
                    <div className="justify-content-center align-content-center">
                        <h6 className="text-nowrap" style={{ fontSize: 15 }}>{props.title}</h6>
                        <h5 className="text-nowrap" style={{ fontSize: 15 }}>{props.currentNumber}</h5>
                        <div className="">
                            <h6 className="fs--2 mb-0 ms-2 text-success" style={{ fontSize: 12 }}>{props?.changes}</h6>
                        </div>
                    </div>
                </a>
            </li>

        </div>
    )
}

export default ChartNavBox