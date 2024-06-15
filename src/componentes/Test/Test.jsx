import React from "react";
import '../../index.css';

function Test() {
    return (
        <div className="h-96 w-full bg-custom-green fixed">
            <div className="inline-block flex items-center justify-center mt-8 space-x-2">
                <h1 className="text-4xl text-white mr-80">App RH</h1>
                <button className="bg-transparent border border-white text-white px-2 py-1 h-13 w-20">Entrar</button>
                <button className="bg-blue-500 text-white px-12 py-1 h-13">Cadastre-se gratuitamente</button>
            </div>
            <div className="relative mt-3">
                <hr className="border-solid border-t-1 border-black border-opacity-10 w-5/12 absolute left-0 right-0 mx-auto" />
            </div>
            <div className="flex items-center justify-center mt-32">
                <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg h-14 w-96" placeholder="Digite um estado ou cidade"/>
                <div className="h-12 border border-black "></div>
                <div className="relative flex items-center">
                    <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg h-14 w-96" placeholder="Digite o cargo"/>
                    <button className="bg-gray-300 text-black px-4 py-1 rounded h-14">Achar vaga</button>
                </div>
            </div>

        </div>
    );
}

export default Test;
