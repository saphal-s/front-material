import { Box, Typography,Container } from '@material-ui/core'
import React from 'react'


function Containers() {
    return (
        <div>
            <Container >
                <Box textAlign="center" pt={5}>
                    <Typography variant="h5">
                    This is heading
                    </Typography>
                    <Typography variant="subtitle1">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum pas
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Containers
