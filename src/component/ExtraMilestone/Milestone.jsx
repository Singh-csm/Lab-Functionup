import React from 'react'
import "../../App.css"

const Milestone = () => {

    const list = [{
        _id : 1,
        title : 'Title 1',
        description : 'Description 1',
        developed_by: "name"
    },{
        _id : 2,
        title : 'Title 2',
        description : 'Description 2',
        developed_by: "name"
    }];

    const leader = [{
        _id : 1,
        name : "name",
        Roll_No : "Roll",
        Score : Math.random() * 100
    },{
        _id : 2,
        name : "name",
        Roll_No : "Roll",
        Score : Math.random() * 100
    }]

  return (
    <div className='milestone'>
        <div className='milestone-1'>
          
            {
                list.map((item, index) => {
                    return (
                        <div className='milestone-item' key={index}>
                            <div className='milestone-item-title'>{item.title}</div>
                            <div className='milestone-item-description'>{item.description}</div>
                            <div className='milestone-item-developer'>{item.developed_by}</div>
                        </div>
                    )
                })
            }
  
        </div>

        <div className='Leaderboard'>
             {
                leader.map((item, index) => {
                    return (
                        <div className='leaderboard-item' key={index}>
                            <div className='leaderboard-item-name'>{item.name}</div>
                            <div className='leaderboard-item-roll'>{item.Roll_No}</div>
                            <div className='leaderboard-item-score'>{item.Score}</div>
                        </div>
                    )
                })
             }
        </div>
    </div>
  )
}

export default Milestone
