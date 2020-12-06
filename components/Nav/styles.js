import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({mobile}) => mobile ? '@media screen and (min-width: 600px) { display: none}' : '@media screen and (max-width: 600px) { display: none}' };
    
`

