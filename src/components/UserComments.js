import React from 'react';
import useFetchService from '../services/useFetchService';
import Replies from './Replies';

export default function UserComments() {
  const { userData: users, errorMsg  } = useFetchService('usersComments');

  console.log(users);
  // console.log(loading);
  // console.log(errorMsg);
  function renderComment(c) {
    return (
      <div key={c.id} className="comment">
        <div className="img-wrap">
          <img 
            src={`/images/${c.image}`} 
            alt={c.name}
            className="profile-img"/>
        </div>
        <div className="text-wrap">
          <div className="top">
            <h3>{c.name}</h3>
            <div className="p-wrap">
              <p>{c.position}</p>
            </div> 
            <span>{c.commentTime} minutes ago</span>
          </div>
          <div className="next">
            <p>{c.comment}</p>
          </div>
        </div>
      </div>
    )
  }
  if (errorMsg) throw errorMsg;
  // if (loading) return <Spinner />
  // if (users.length === 0) return <NotFoundPage />
  return (
    <>
      {users.map(renderComment)}
      <Replies />
    </>
  )
}