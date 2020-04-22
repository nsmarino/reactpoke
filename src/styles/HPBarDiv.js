import styled from 'styled-components';

const HPBarDiv = styled.div`
  display: flex;
  > h2 {
    font-size: .75em;
    padding-left: .25em;
    font-weight: normal;
    color: goldenrod;
    background: black;
    margin: 0em; 
    width: 2.5em;
  }
  > .bar {
    display: flex;
    align-items: center;
    border-bottom: 3px solid black;
    border-right: 9px solid black;
    width: 100px;
    height: .75em;
  }
`
export default HPBarDiv