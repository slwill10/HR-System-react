import React, { useState } from 'react';
import '../../index.css';
import googleIcon from '../../assets/google-icon-2048x2048-pks9lbdv.png'; // Importe o ícone do Google aqui


function Login() {
    const [manterConectado, setManterConectado] = useState(false);

    const handleCheckboxChange = () => {
        setManterConectado(!manterConectado);
    };

    return (
        <div className='bg-[rgba(188,188,188,0.62)] w-full h-screen fixed top-0 left-0 flex items-center justify-center'>
            <div className='bg-[#E0E0E0] w-2/3 h-3/4 flex items-center justify-center rounded-lg shadow-lg'>
                <div className="p-6">
                    <h1 className="text-cyan-700 text-2xl font-bold mb-4 text-center">Login</h1>
                    <hr className="border-solid border-t-2 border-gray-400 w-full my-4" />
                    <div className="mb-4">
                        <h1 className="text-lg mb-2">Digite seu email</h1>
                        <input type="text" className="border-gray-300 border rounded-md p-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <h1 className="text-lg mb-2">Senha</h1>
                        <input type="password" className="border-gray-300 border rounded-md p-2 w-full" />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="manterConectado"
                            checked={manterConectado}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label htmlFor="manterConectado">Manter conectado</label>
                    </div>
                    <div className="mb-4">
                        <button className="bg-[#fafafa] text-teal-950 px-6 py-2 rounded-md mb-2 w-full flex items-center justify-center">
                            <img src={googleIcon} alt="Google Icon" className="mr-2 h-6 w-6" />
                            Google
                        </button>
                        <button className="bg-[#007D85] text-white px-6 py-2 rounded-md w-full">Entrar</button>
                    </div>
                    <hr className="border-solid border-t-2 border-gray-400 w-full my-4" />
                    <div className="flex">
                        <h1 className="mr-2 mt-2">Ainda não tem conta?</h1>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">Candidato</button>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Empresa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
