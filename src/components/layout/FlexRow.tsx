import styled from 'styled-components'

export const FlexRow = styled.div`
    flex-direction: row;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const FlexCol = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
    flex-basis: 100%;
    padding: 5px;
`

export const FlexColTextCenter = styled(FlexCol)`
    text-align: center;
`
