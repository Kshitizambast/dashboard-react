import React from 'react'
import { StaticKeyWords } from '../constants/config'
import ChartNavBox from './ChartNavBox'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setActiveNavTab } from '../home/homeSlice'

const TABS = [
    StaticKeyWords?.chartNavStudent?.tab1,
    StaticKeyWords?.chartNavStudent?.tab2,
    StaticKeyWords?.chartNavStudent?.tab3
]



const ChartNavigation: React.FC = () => {
    const activeNavTab = useAppSelector(state => state.home.activeNavTab)
    const dispatch = useAppDispatch()
    return (
            <div className='row' style={{overflow: 'hidden'}}>
                <div className='col mx-0 px-0'>
                    <ul className='nav d-flex px-0 mx-0' style={{justifyContent: 'flex-start'}} >
                        {
                            TABS.map((tab, index) => {
                                return (
                                    <div className='' key={index.toString()} onClick={() => dispatch(setActiveNavTab(index))}>
                                        <ChartNavBox
                                            title={tab?.title}
                                            currentNumber={tab?.currentNumber}
                                            changes={tab?.changes}
                                            styleClass={activeNavTab === index ? 'active-chart-nav' : 'inactive-chart-nav'}
                                        />
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
    )
}



export default ChartNavigation
