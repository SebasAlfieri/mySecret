import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getItems } from "../services/firebase"
import PostsList from "./PostsLists"
import InputsContainer from './InputsContainer'

const PostingContainer = styled.div`
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 1000px;
  height: fit-content;
`



function Posting() {

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);


  useEffect(() => {
    setIsLoading(true);
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
  }, []);





  console.log(getItems())
  return (
    <PostingContainer>
      <InputsContainer>
  
      </InputsContainer>
        <PostsList data={data} />
    </PostingContainer>
  )
}

export default Posting