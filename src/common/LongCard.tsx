import React from 'react'

interface Props {
    children: React.ReactNode
    title: string
}


const LongCard: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="card  shadow-lg mb-2 bg-body rounded" >
            <div className='card-header'>
                <h4>{props.title}</h4>
            </div>
                <div className="card-body">
                    {props.children}
                    <hr />
                    <div className='d-flex justify-content-between flex-row'>
                        <p>Student</p>
                        <p>25%</p>
                        <p>25</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LongCard