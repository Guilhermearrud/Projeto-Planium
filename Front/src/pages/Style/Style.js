import styled from 'styled-components'

export const StyledBox = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 10px;
        padding: 10px;
        flex-wrap: wrap;
        row-gap: 20px;
`

export const BoxOrganization = styled.div`
        display: flex;
        flex-direction: column;

        input {
                width: 200px;
        }

        select {
                width: 200px;
        }

        button {
                width: 250px;
        }
`