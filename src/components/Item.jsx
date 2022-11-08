import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height:100px;
  height: fit-content;
  background-color: #fff;
  margin-bottom: 50px;
  border-radius: 25px;
  
  @media (min-width: 768px) {
    width: 80%;
  }
`

const ItemText = styled.div`
  display: flex;
  width: 95%;
  align-self: center;
  height: 100%;
  padding: 10px 10px;
  word-break: break-all;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 15px 0;
  }
`

const ItemDate = styled.div`
  position: relative;
  width: fit-content;
  left: 35%;
  color: gray;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 15px 0;
  }
`

const ItemDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  font-size: 0.9rem;
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
  `

const ItemAnon = styled.div`
  font-style: italic;
  color: gray;
  font-size: 0.45rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  
`

const ItemEdad = styled.div`
display: flex;
align-items: center;
`


function Item(props) {
  let { secret, date, gender, years, id } = props;

  const [male, setMale] = useState(false);

  useEffect(() => {
    if (gender == "male") {
      setMale(true)
    } 
  }, []);


  return (
  <>
    <ItemDate>{date}</ItemDate>
    <ItemContainer key={id}>
      <ItemDataContainer className={gender}>
        <ItemEdad>{male ? <FaMale style={{fontSize:"1.5rem", color: "#2F6A8A"}}/> : <FaFemale style={{fontSize:"1.5rem", color: "B15878"}}/>}{years} years old</ItemEdad>
        <ItemAnon>Anonymous<span> #{id}</span></ItemAnon>
      </ItemDataContainer>

      <ItemText>{secret}</ItemText>
    </ItemContainer>
  </>
  )
}

export default Item