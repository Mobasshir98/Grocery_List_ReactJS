import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

export default function List({items,removeitem,edititem}) {
  return (
    <div className='grocery-list'>
      {items.map((item)=>{
        const {id,title}=item;
        // console.log(id)
        return <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>
          <div className="btn-container">
            <button type='button'className='edit-btn' onClick={()=>edititem(id)}>
              <FaEdit/>
            </button>
            <button type='button'className='delete-btn' onClick={()=>removeitem(id)}>
            <FaTrash/>
            </button>
          </div>
        </article>
      })}
    </div>
  )
}
