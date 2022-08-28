import React from 'react';
import './NewComment.css';
import NewCommentForm from './NewCommentForm';
import { useState } from 'react';



const NewComment = (props) => {

    const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className='view'>
        <div className='write'>What do you think of this portfolio?</div>
    <div className='newcomment'>
    {!isEditing && (<button onClick={startEditingHandler}>Add Comment</button>)}
       {isEditing && (<NewCommentForm  onCancel={stopEditingHandler}/>)}
    </div>
    </div>
  )
}

export default NewComment