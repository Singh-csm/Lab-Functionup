import React from 'react'

const Submission = () => {

const list = [{
    _id: 1,
    title: 'Title 1',
    content: 'Content 1',
    Submitted_on: Date.now()
},
{
    _id: 2,
    title: 'Title 2',
    content: 'Content 2',
    Submitted_on: Date.now()
},
{
    _id: 3,
    title: 'Title 3',
    content: 'Content 3',
    Submitted_on: Date.now()
}
]

  return (
    <div className='submission-1'>

    {
        list.map((item, index) => {
            return (
                <div key={index} className='submission-1-item'>
                    <h3 className='item-11'>{item.title}</h3>
                    <p className='item-11'>{item.content}</p>
                    <p className='item-11'>{item.Submitted_on}</p>
                </div>
            )
        })
    }
      
    </div>
  )
}

export default Submission
