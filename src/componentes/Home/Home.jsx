import React from "react";
import '../../index.css';

function Home() {
    return (
        <div className="bg-slate-10 min-h-screen">
            <div className="bg-green-300 h-80 flex items-center justify-center px-4">
                <div className="flex px-4 mb-40 ml-60">
                    <h1 className="text-4xl text-white mr-80">App RH</h1>
                    <div className="flex space-x-2">
                        <button type="button" className="bg-transparent border border-white text-white px-2 py-1 h-13 w-20">Entrar</button>
                        <button type="button" className="bg-blue-500 text-white px-12 py-1 h-13">Cadastre-se gratuitamente</button>
                    </div>
                </div>
                <div className="flex items-center"> 
                    <input type="text" className="border border-gray-400 px-2 py-1 mr-2" />
                    <input type="text" className="border border-gray-400 px-2 py-1 mr-2" />
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">Olá</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
