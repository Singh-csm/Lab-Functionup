import React from 'react'
import "../../App.css"

const Notes = () => {

    const list =[{
        key: 1,
        learned_on: 'Title',
        submitted_on: 'Content'
    },{
        key: 2,
        learned_on: 'Title',
        submitted_on: 'Content'
    }]
  return (
    <div className='notes-1'>
       {
        list.map(item => (
            <div key={item.key} className='notes-2'>
                <p className='notes-3'>{item.learned_on}</p>
                <p className='notes-3'>{item.submitted_on}</p>
                
                    <input type='text' placeholder={`Summary Submission for Today's Session`} />
                    <button type='submit'>Submit</button>
               
            </div>
        ))
       }
    </div>
  )
}

export default Notes
