import styled from 'styled-components';

const Triangle = styled.div.attrs(props => ({
    shape: props.shape,
 }))`
border-color: transparent black;
border-style: solid;
border-width: ${props=>props.shape};
height: 0px;
width: 0px;
`

export default Triangle