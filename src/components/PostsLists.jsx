import React, { useState } from 'react'
import Item from './Item';

function PostsLists(props) {

  const [value, setValue] = useState();

  return (
    <>
      {props.data.map((item) => {
        return (
          <Item
            key={item.id}
            secret={item.post.secret}
            gender={item.post.gender}
            date={item.date}
            years={item.post.years}
            id={item.id}
          />
        );
      })}
    </>
  )
}

export default PostsLists