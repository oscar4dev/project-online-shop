import React, { useState } from 'react'
import { getMenu } from '../services/shoppingApi'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import MenuItem from './MenuItem'
import { IoFilter } from "react-icons/io5";

import FilterBtn from './FilterBtn';
import StyledSection from '../styles/StyledSection';
import styled from 'styled-components';

const StyledContainer1 = styled.div`
   display: flex;
   justify-content: end;
`

const FilterBtnContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.2em;
   margin: 1em 0 2em 0;
   flex-wrap: wrap;
`

const StyledFilterButton = styled.button`
   text-transform: uppercase;
   font-size: 0.7rem;
   font-weight: bold;
   letter-spacing: 1.5px;
   padding: 0.4em 0.6em;
   background-color: #bfdbfe;
   color: #2563eb;
   border: none;
   display: flex;
   align-items: center;
   gap: 0.5em;

   &:hover {
      background-color: #93c5fd;
   }
`

const StyledUList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 1em;
   justify-content: center;
   margin-top: 1em;
`

function Menu() { 

   const menu = useLoaderData()
   const [searchParams, setSearchParams] = useSearchParams()
   const [open, setOpen] = useState(false)

   const categoryFilter = searchParams.get('category')
   const filtered = categoryFilter ? menu.filter((item) => {
      return item.category === categoryFilter
   }) : menu

   function toggleOpen () {
      setOpen((cur) => {
         return !cur
      })
   }

   return (
      <StyledSection>

         <StyledContainer1>
            <StyledFilterButton onClick={ toggleOpen }>
               <span><IoFilter /></span>
               <span>filter</span>
            </StyledFilterButton>
         </StyledContainer1>

         <div>
            { 
               open 
                  && <FilterBtnContainer>
                     <FilterBtn
                        onClick={ () => setSearchParams({ category: "sneakers" }) }
                     >Sneakers</FilterBtn>

                     <FilterBtn
                        onClick={ () => setSearchParams({ category: "flats" }) }
                     >flats</FilterBtn>

                     <FilterBtn
                        onClick={ () => setSearchParams({ category: "sandals" }) }
                     >sandals</FilterBtn>
                     
                     <FilterBtn
                        onClick={ () => setSearchParams({ category: "heels" }) }
                     >heels</FilterBtn>

                     { 
                        categoryFilter && <FilterBtn
                           onClick={ () => setSearchParams({  }) }
                        >all</FilterBtn>
                     }
                  </FilterBtnContainer> 
            }
         </div>
         <StyledUList>
            { filtered.map((item) => {
               return <MenuItem
                  key={ item.id }
                  item={ item }
               />
            }) }
         </StyledUList>
      </StyledSection>
   )
}

export async function loader () {
   const menu = await getMenu()
   return menu
}

export default Menu