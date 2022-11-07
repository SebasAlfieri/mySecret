import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';



const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height:100px;
  height: fit-content;
  background-color: #fff;
  margin-bottom: 50px;
  border-radius: 25px;
`

const ItemText = styled.div`
  display: flex;
  width: 95%;
  align-self: center;
  height: 100%;
  padding: 10px 0;
  word-break: break-all;
`

const ItemDate = styled.div`
  position: relative;
  width: fit-content;
  left: 35%;
`

const ItemDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  `

const ItemAnon = styled.div`
    font-style: italic;
    font-size: 0.8rem;
    color: gray;
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