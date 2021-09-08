import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    background-color: white;
    text-align: center;
    font-size: 13px;
    color: #448AFF;
    padding: 8px 25px;
    padding-left: 70px;
    padding-right: 70px;
    margin-bottom: 1000px;
    outline: 0;
    border-radius: 10px;
    position: absolute;
    cursor: pointer;
    margin-left: 550px;
    border-color: #448AFF;
    

    


`
// background-color: #448AFF;


export default function Btn() {
    return (
        <div>
         <a href='/destination'> <Button>View All</Button></a>
        </div>
    )
}
