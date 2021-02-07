function Tempo(props){
    console.log('> Passando pelo Frontend')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{dynamicDateString}(dinâmico)</div>
            {/* congela a data ou ovalor no momento que a pag é aberta */}
            <div>{props.staticoDateString} (estatico)</div>
        </div>
    )
}
export function getStaticProps(){
    console.log('> Passando pelo getStaticProps();')
    const staticoDate = new Date();
    const staticoDateString = staticoDate.toGMTString();
    return{
        props:{
            staticoDateString
        },
        revalidate: 1
    }

}

export default Tempo;