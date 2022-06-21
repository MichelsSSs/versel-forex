import {useState} from 'react';

function Home(){
return <div><h1>Hone</h1><Contador/></div>

}

function Contador(){
    const [contador,setContador]=useState(0);

function adicionarContador(){

    setContador(contador+1);
}
function deletarContador(){

    setContador(contador==0?contador:contador-1);
}

    return(
<div>
<div>{contador}</div>
<button onClick={adicionarContador}>adicionar</button>
<button onClick={deletarContador}>deletar</button>
</div>
    )
}

export default Home
