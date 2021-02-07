import Link from 'next/link';

function Home(){
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a >Acessar sobre</a>
        </Link>
        <Link href="/tempo">
            <a >Acessar dinamico</a>
        </Link>


    </div> )
    
    
}
export default Home

