function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{dynamicDateString}(dinâmico)</div>
            <div>{props.staticoDateString} (estatico)</div>
        </div>
    )
}
export function getStaticProps(){
    const staticoDate = new Date();
    const staticoDateString = staticoDate.toGMTString();
    return{
        props:{
            staticoDateString
        }
    }

}

export default Tempo;