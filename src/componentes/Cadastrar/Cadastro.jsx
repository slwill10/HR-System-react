import React, { useState } from 'react';
import '../../index.css';
import reuniao from '../../assets/reunião.png';
import googleIcon from '../../assets/google-icon-2048x2048-pks9lbdv.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import AppleIcon from '../../assets/apple icon.png';
import MicrosoftIcon from '../../assets/microsoft-icon.png';

function Cadastro() {
    const [manterConectado, setManterConectado] = useState(false);

    const handleCheckboxChange = () => {
        setManterConectado(!manterConectado);
    };

    return (
        <div className='bg-[rgba(188,188,188,0.62)] w-full h-screen fixed top-0 left-0 flex items-center justify-center'>
            <div className="flex w-full h-full">
                <div className="w-1/3 h-full flex items-center justify-center">
                    <img src={reuniao} alt="Reunião" className="h-full w-full object-cover" />
                </div>
                <div className="w-2/3 h-full flex flex-col items-center justify-center p-4 bg-gray-300">
                    <h1 className="text-2xl font-bold mb-6">Entre e comece a se candidatar:</h1>
                    <div className="w-full flex flex-col items-center mb-3">
                        <button className="bg-[#fafafa] text-teal-950 px-6 py-2 rounded-3xl mb-2 w-1/2 flex items-center justify-center">
                            <img src={googleIcon} alt="Google Icon" className="mr-2 h-6 w-6 " />
                            Google
                        </button>
                    </div>
                    <div className='flex justify-between space-x-20 mb-5'>
                        <button className="bg-[#fafafa] text-teal-950 px-6 py-2 rounded-3xl mb-2 w-3/4 flex items-center justify-center">
                            <img src={linkedinIcon} alt="Linkedin Icon" className="mr-2 h-6 w-6" />
                            LinkedIn
                        </button>
                        <button className="bg-[#fafafa] text-teal-950 px-6 py-2 rounded-3xl mb-2 w-3/4 flex items-center justify-center">
                            <img src={AppleIcon} alt="Apple Icon" className="mr-2 h-6 w-6" />
                            Apple
                        </button>
                        <button className="bg-[#fafafa] text-teal-950 px-6 py-2 rounded-3xl mb-2 w-3/4 flex items-center justify-center">
                            <img src={MicrosoftIcon} alt="Microsoft Icon" className="mr-2 h-6 w-6" />
                            Microsoft
                        </button>
                    </div>
                    <h1 className="text-xl font-bold mb-6">Ou continue com seu e-mail:</h1>
                    <div className="w-full flex flex-col items-center">
                        <input type="text" placeholder="Nome e sobrenome" className="border-gray-300 border rounded-3xl p-2 mb-4 w-1/2 text-center" />
                    </div>
                    <div className='flex justify-between space-x-52'>
                        <input type="email" placeholder="E-mail" className="border-gray-300 border rounded-3xl p-2 w-1/2 m-0 mb-2 text-center" />
                        <input type="password" placeholder="Senha" className="border-gray-300 border rounded-3xl p-2 w-1/2 m-0 mb-2 text-center" />
                    </div>
                    <div className='flex justify-between space-x-52'>
                        <input type="text" placeholder="CEP" className="border-gray-300 border rounded-3xl p-2 w-full m-0 mb-2 text-center" />
                        <input type="text" placeholder="Cargo desejado" className="border-gray-300 border rounded-3xl p-2 w-full m-0 mb-2 text-center" />
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="manterConectado"
                            checked={manterConectado}
                            onChange={handleCheckboxChange}
                            className="mr-2 mt-10"
                        />
                        <label htmlFor="manterConectado" className='mt-10 mb-2'>Li e aceito as <u>Condições Legais </u>e a <u>Política de Privacidade</u>.</label>
                    </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-2xl w-96">Cadastrar</button>
                    <h1 className='mt-32'>Você é uma empresa? <u className='text-blue-500'>Cadastre-se grátis aqui</u></h1>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
