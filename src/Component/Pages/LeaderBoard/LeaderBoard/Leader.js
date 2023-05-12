import React from 'react'
import Board from './Leader.module.css'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function Leader() {
    return (

        <div className={Board.leader_section}>
            <div className={Board.heading}>
                <div className={Board.update}>
                    <h4>Leaderboard</h4>
                    <p>Last updated on 2023-05-07</p>
                </div>
                <div className={Board.date}>
                    <span>Daily</span>
                    <Switch {...label} size="small" />
                    <span>LifeTime</span>
                    <span className={Board.calender}>
                        <input type="date" />
                    </span>
                </div>
            </div>
            <div className={Board.data}>
                <table>
                    <tr className={Board.fix}>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Roll No.</th>
                        <th>Score</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Chandrashekhar Singh Mourya <sup className={Board.name}>You're here</sup></td>
                            <td>fn-cal-230YF</td>
                            <td>5100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Tushar Jain</td>
                            <td>fn-cal-75KTC</td>
                            <td>4290</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ashish rayalwar</td>
                            <td>fn-cal-64GTN</td>
                            <td>4190</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Piyush Tale</td>
                            <td>fn-cal-76NNW</td>
                            <td>4085</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Bhushan Bhuskade</td>
                            <td>fn-cal-61LUF</td>
                            <td>3989</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pallavi Utekar</td>
                            <td>fn-cal-86VKX</td>
                            <td>3895</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Tushar Gautam</td>
                            <td>fn-cal-22WCT</td>
                            <td>3785</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Ankush Singh</td>
                            <td>fn-cal-87NVT</td>
                            <td>3675</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Anjali Singh</td>
                            <td>fn-cal-63UUO</td>
                            <td>3465</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
