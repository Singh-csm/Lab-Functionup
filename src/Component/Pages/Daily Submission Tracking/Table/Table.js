import React from 'react'
import Leftcomponent from '../../../Left Component/Leftcomponent'
import t from './Table.module.css'
import { Data } from '../Data/Data'
import Table_data from '../Data/Table_data'


export default function Table() {
    return (
        <div className="main_background">
            <Leftcomponent />
            <div className={t.container}>
                <div className={t.main}>
                    <div className={t.heading}><h2>Daily Submission Tracking</h2></div>
                    <div>
                        {Data.map((elm) => {
                            const { id } = elm
                            return (<Table_data key={id} {...elm} />)
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
