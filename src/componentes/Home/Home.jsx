import React, { useState } from "react";
import '../../index.css';
import wolman from '../../assets/mulher mexendo no celular fundo verde.png';
// import x from '../../assets/Xparasair.png';

function Home() {
    const vagas = [{
        id: '21312321',
        nome: 'Desenvolvedor java',
        descricao: 'Estamos buscando um(a) Desenvolvedor(a) Junior Java para se juntar à nossa equipe dinâmica e colaborativa.' +
            'Essa é uma ótima oportunidade para você iniciar sua carreira em desenvolvimento de software e aprender com profissionais experientes.',
        data: '20-02-12',
        salario: 4200
    },
    {
        id: '2131eqweqwe2321',
        nome: 'desenvolvedor full-stack',
        descricao: 'Vaga de desenvolvedor sênior',
        data: '02-01-21',
        salario: 10000
    }];

    const [selectedVaga, setSelectedVaga] = useState(null);

    return (
        <div>
            <div className="bg-custom-green h-auto w-full fixed md:h-96 top-0 left-0">
                <div className="fixed left-0 hidden-above-1395">
                    <img src={wolman} alt="" className="mt-3 ml-4 md:ml-32" />
                </div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
                    <h1 className="text-4xl text-white mb-4 md:mb-0 md:mr-80">App RH</h1>
                    <button className="bg-transparent border border-white text-white px-2 py-1 h-13 w-20">Entrar</button>
                    <button className="bg-blue-500 text-white px-12 py-1 h-13 mt-4 md:mt-0">Cadastre-se gratuitamente</button>
                </div>
                <div className="relative mt-3">
                    <hr className="border-solid border-t-1 border-black border-opacity-10 w-10/12 mx-auto md:w-5/12" />
                </div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:mt-32">
                    <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg h-14 w-full md:w-96" placeholder="Digite um estado ou cidade" />
                    <div className="h-12 border border-black hidden md:block"></div>
                    <div className="relative flex items-center w-full md:w-auto">
                        <input type="text" className="border border-gray-400 px-2 py-1 rounded-lg h-14 w-full md:w-96" placeholder="Digite o cargo" />
                        <button className="ml-10 bg-gray-300 text-black px-4 py-1 rounded h-14 mt-4 md:mt-0">Achar vaga</button>
                    </div>
                </div>
            </div>

            <div className="pt-96 flex">
                <div className="w-1/2">
                    {vagas.map(vaga => (
                        <div key={vaga.id}
                            className="flex justify-between bg-[#D9D9D9] m-2.5 p-2.5 rounded-xl cursor-pointer"
                            onClick={() => setSelectedVaga(vaga)}>
                            <div>
                                <p><strong>Nome:</strong> <span>{vaga.nome}</span></p>
                                <p><strong>Descrição:</strong> <span>{vaga.descricao}</span></p>
                                <p><strong>Data:</strong> <span>{vaga.data}</span></p>
                                <p><strong>Salário:</strong> <span>{vaga.salario}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <div className="bg-[#D9D9D9] p-4 rounded-xl shadow-lg max-w-[900px] w-full h-[500px] overflow-y-auto mt-2">
                        {selectedVaga ? (
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{selectedVaga.nome}</h2>
                                <p><strong>Descrição:</strong> {selectedVaga.descricao}</p>
                                <p><strong>Data:</strong> {selectedVaga.data}</p>
                                <p><strong>Salário:</strong> {selectedVaga.salario}</p>
                            </div>
                        ) : (
                            <h1 className="text-xl">Selecione uma vaga para ver os detalhes</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
