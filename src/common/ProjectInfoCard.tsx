import React from 'react'

interface Props {
    title: string
    description: string
    question?: string
    link?: string
}

const ProjectInfoCard: React.FC<Props> = (props) => {
    return (
        <div className='bg-gradient p-5 rounded shadow-lg' style={{ backgroundImage: "url(../../../assets/images/half-circle.png)" }}>
            <div >
                <h4 className='text-white text-center my-5'>{props?.title}</h4>
                <div className='text-wrap mt-5' style={{ width: 300 }}>
                    <p className='text-white text-center'>{props?.description}</p>
                </div>
                <div style={{ marginTop: 120 }}>
                    <p className='text-white m-0 text-center'>{props?.question}</p>
                    <p className='text-center'>
                        <a href='#' className='text-white m-0 '>{props?.link}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfoCard