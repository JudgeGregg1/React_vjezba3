function ConditionalRendering(props) {
    const number = props.number;
    return <>
    
  {!isNaN(number) && (number>5 ? <p>Br veci od pet</p> : <p>Br manji od pet</p>)}
    
    </>;
}

export default ConditionalRendering;