import { Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
        blue:{
            color:"blue",
        }
})
function Typo() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h3" align="center" color="secondary"  display="inline" className={classes.blue}>
               This is heading
            </Typography>
            <Typography display="inline">
            is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum pas
            </Typography>
            
        </div>
    )
}

export default Typo
