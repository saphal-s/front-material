import { Container, Icon, Paper,Box } from '@material-ui/core'
import React from 'react'

function Useicons() {
    return (
        <div>
            <Container>
                <Paper component={Box} p={3}>
                    <Icon>
                    home
                    </Icon>
                </Paper>
            </Container>
        </div>
    )
}

export default Useicons
