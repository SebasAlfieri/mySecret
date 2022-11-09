import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getItems } from "../services/firebase";
import PostsList from "./PostsLists";
import InputsContainer from "./InputsContainer";

const PostingContainer = styled.div`
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 90%;
  min-width: 350px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 1000px;
  }
`;

function Posting() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getItems()
      .then((respuestaDatos) => setData(respuestaDatos))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <PostingContainer>
      <InputsContainer></InputsContainer>
      <PostsList data={data} />
    </PostingContainer>
  );
}

export default Posting;
