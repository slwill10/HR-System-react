import React, { useState, useEffect } from 'react';
import '../../index.css';
import wolman from '../../assets/mulher mexendo no celular fundo verde.png';
import { getVagas } from '../../services/api';

function Home() {
    const [vagas, setVagas] = useState([]);
    const [selectedVaga, setSelectedVaga] = useState(null);
    const [filtroCidade, setFiltroCidade] = useState('');
    const [filtroCargo, setFiltroCargo] = useState('');
    const [vagasFiltradas, setVagasFiltradas] = useState([]);

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const data = await getVagas();
                setVagas(data);
                setVagasFiltradas(data);
            } catch (error) {
                console.error('Houve um erro ao fazer a requisição:', error);
            }
        };

        fetchVagas();
    }, []);

    return (
        <div>
            <div className="bg-custom-green h-auto w-full fixed h-44 md:h-64 top-0 left-0 ">
                <div className="fixed left-0 hidden-above-1395">
                    <img src={wolman} alt="" className=" ml-4 md:ml-32 h-60 mt-4" />
                </div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
                    <h1 className="text-4xl text-white mb-4 mt-[-34px] md:mb-0 md:mr-80">App RH</h1>
                    <button className="bg-transparent border border-white text-white px-2 py-1 h-13 w-20">Entrar</button>
                    <button className="bg-blue-500 text-white px-12 py-1 h-13 mt-4 md:mt-0">Cadastre-se gratuitamente</button>
                </div>
                <div className="relative mt-3">
                    <hr className="border-solid border-t-1 border-black border-opacity-10 w-10/12 mx-auto md:w-5/12" />
                </div>
                <div className="flex flex-col items-center justify-center md:flex-row md:mt-20">
                    <input
                        type="text"
                        className="border border-gray-400 px-2 py-1 rounded-lg h-14 w-full md:w-96"
                        placeholder="Digite um estado ou cidade"
                        value={filtroCidade}
                        onChange={(e) => setFiltroCidade(e.target.value)}
                    />
                    <div className="h-12 border border-black hidden md:block"></div>
                    <div className="relative flex items-center w-full md:w-auto">
                        <input
                            type="text"
                            className="border border-gray-400 px-2 py-1 rounded-lg h-14 w-full md:w-96 pr-32"
                            placeholder="Digite o cargo"
                            value={filtroCargo}
                            onChange={(e) => setFiltroCargo(e.target.value)}
                        />
                        <button
                            className="absolute right-2 bg-blue-500 text-white px-4 py-1 rounded-3xl h-12 border"
                            onClick={() => {
                                const filteredVagas = vagas.filter(vaga =>
                                    (!filtroCidade || (vaga.localidade && vaga.localidade.toLowerCase().includes(filtroCidade.toLowerCase()))) &&
                                    (!filtroCargo || (vaga.nome && vaga.nome.toLowerCase().includes(filtroCargo.toLowerCase())))
                                );
                                setVagasFiltradas(filteredVagas);
                            }}
                        >
                            Achar vaga
                        </button>
                    </div>
                </div>

            </div>
            <div className="pt-96 flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-[650px] overflow-y-auto mt-[-120px] md:mt-[-120px]">
                    {vagasFiltradas.map(vaga => (
                        <div key={vaga.codigo}
                            className="flex justify-between bg-[#D9D9D9] m-2.5 p-2.5 rounded-xl cursor-pointer"
                            onClick={() => setSelectedVaga(vaga)}>
                            <div>
                                <h1 className="txt-nome text-2xl">{vaga.nome}</h1>
                                <p className="txt-empresa text-[#616161] font-bold"><span>{vaga.empresa}</span></p>
                                <div className="flex mb-3">
                                    <p className="text-base"><span>{vaga.endereco}</span></p>
                                </div>
                                <div className="mt-[-40px] mb-5 ml-20">
                                    <p className="text-base text-[#616161] ml-80 ">{vaga.modalidade}</p>
                                </div>
                                <p className="txt-descricao text-[#616161] text-sm text-justify"><span>{vaga.descricao}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`fixed md:relative inset-0 md:inset-auto flex items-center justify-center bg-black bg-opacity-50 md:bg-transparent ${selectedVaga ? "block" : "hidden"} md:ml-[20%] md:mt-[-10%]`}>
                    <div className="bg-[#D9D9D9] p-4 rounded-xl shadow-lg max-w-[500px] w-full h-[500px] overflow-y-auto mt-3">
                        {selectedVaga ? (
                            <div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-2xl font-bold mb-2 text-center">{selectedVaga.nome}</h2>
                                    <p className="txt-empresa text-[#616161] font-bold mt-1">{selectedVaga.empresa}</p>
                                    <p className="txt-empresa text-[#616161] font-bold mt-1">R${selectedVaga.salario},00 (Bruto mensal)</p>
                                    <hr className="border-solid border-t-2 #6b7280 w-full my-4" />
                                </div>
                                <div className="max-w-[600px]">
                                    <p className='text-left'><b>Vagas: </b>{selectedVaga.numDeVagas}</p>
                                    <p><b>Formação acadêmica:</b></p>
                                    <p className="break-words">{selectedVaga.formacaoAcademica}</p>
                                    <p><b>Responsabilidades e atribuições:</b></p>
                                    <p className="break-words">{selectedVaga.responsabiidadesEAtribuicoes}</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <button className="bg-blue-500 text-white px-12 py-1 h-13 mt-4 md:mt-32">candidatar-me</button>
                                </div>
                            </div>
                        ) : (
                            <h1 className="text-xl">Selecione uma vaga para ver os detalhes</h1>
                        )}
                        <button className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded md:hidden" onClick={() => setSelectedVaga(null)}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
