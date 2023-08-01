import { Box } from '@material-ui/core'
import React, { Component } from 'react'

function Boxs() {
    return (
        <div>
            <Box width={500} boxShadow={1} p={10}> 
               <h1>Get started</h1> 
               <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum pas</p>
            </Box>
        </div>
    )
}

export default Boxs
