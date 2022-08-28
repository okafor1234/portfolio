import React from 'react';
import { useState } from 'react';
import './NewCommentForm.css';
import ErrorModal from './ErrorModal';

const NewCommentForm = (props) => {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  const [error, setError] = useState();


    const fullNameChangeHandler = (event) => {
        setEnteredFullName(event.target.value);
    };


    const companyChangeHandler = (event) => {
        setEnteredCompany(event.target.value);
    };

    const commentChangeHandler = (event) => {
        setEnteredComment(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredFullName.trim().length === 0) {
            setError({
              title: "Invalid input",
              message: "please enter a valid name (non-empty values).",
            });
            return;
          }
          if (enteredCompany.trim().length === 0) {
            setError({
              title: "Invalid input",
              message: "please enter a valid Company name (non-empty values).",
            });
            return;
          }
          if (enteredComment.trim().length === 0) {
            setError({
              title: "Invalid input",
              message: "please enter a valid Comment (non-empty values).",
            });
            return;
          }
          if (enteredFullName.trim().length > 1 || enteredCompany.trim().length > 1 || enteredComment.trim().length > 1) {
            setError({
              title: "Sent!!",
              message: "Thanks so much for your contribution.",
            });
            return;
          }

    const newCommentData = {
        fullName: enteredFullName,
        company: enteredCompany,
        comment: enteredComment,
      };

      console.log (newCommentData);
      setEnteredFullName("");
      setEnteredCompany("");
      setEnteredComment("");
  };
  
  const errorHandler = () => {
    setError(null);
  };

  
  return (
    <>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <form onSubmit={submitHandler}>
      <div className="newcomment__controls">
        <div className="newcomment__control">
          <label>Full Name</label>
          <input
            type="text"
            max="100"
            value={enteredFullName}
            onChange={fullNameChangeHandler}
            
          />
        </div>
        <div className="newcomment__control">
          <label>Company</label>
          <input
            type="text"
            max="100"
            value={enteredCompany}
            onChange={companyChangeHandler}
            
          />
        </div>
        <div className="newcomment__control">
          <label>Comment</label>
          <textarea
            type="text"
            value={enteredComment}
            onChange={commentChangeHandler}
            
          />
        </div>
      </div>
      <div className="newcomment__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )
}

export default NewCommentForm;