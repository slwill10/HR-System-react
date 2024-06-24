import React, { useState, useEffect } from "react";
import '../../index.css';
import wolman from '../../assets/mulher mexendo no celular fundo verde.png';
import api from '../../services/api';

function Home() {
    const [vagas, setVagas] = useState([]);
    const [selectedVaga, setSelectedVaga] = useState(null);
    const [filtroCidade, setFiltroCidade] = useState('');
    const [filtroCargo, setFiltroCargo] = useState('');
    const [vagasFiltradas, setVagasFiltradas] = useState([]);

    useEffect(() => {
        const getVagas = async () => {
            try {
                const response = await api.get('/vagas');
                setVagas(response.data);
                setVagasFiltradas(response.data);
            } catch (error) {
                console.error('There was an error making the request:', error);
            }
        };
        getVagas();
    }, []);

    useEffect(() => {
        const filtrarVagas = () => {
            const filteredVagas = vagas.filter(vaga =>
                (filtroCidade === '' || vaga.localidade.toLowerCase().includes(filtroCidade.toLowerCase())) &&
                (filtroCargo === '' || vaga.nome.toLowerCase().includes(filtroCargo.toLowerCase()))
            );
            setVagasFiltradas(filteredVagas);
        };
        filtrarVagas();
    }, [filtroCidade, filtroCargo, vagas]);

    return (
        <div>
            <div className="bg-custom-green h-auto w-full fixed md:h-64 top-0 left-0">
                <div className="fixed left-0 hidden-above-1395">
                    <img src={wolman} alt="" className=" ml-4 md:ml-32 h-60 mt-4" />
                </div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
                    <h1 className="text-4xl text-white mb-4 md:mb-0 md:mr-80">App RH</h1>
                    <button className="bg-transparent border border-white text-white px-2 py-1 h-13 w-20">Entrar</button>
                    <button className="bg-blue-500 text-white px-12 py-1 h-13 mt-4 md:mt-0">Cadastre-se gratuitamente</button>
                </div>
                <div className="relative mt-3">
                    <hr className="border-solid border-t-1 border-black border-opacity-10 w-10/12 mx-auto md:w-5/12" />
                </div>
                <div className="flex flex-col items-center justify-center mt-8 md:flex-row md:mt-30">
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
                                const filtrarVagas = () => {
                                    const filteredVagas = vagas.filter(vaga =>
                                        (filtroCidade === '' || vaga.localidade.toLowerCase().includes(filtroCidade.toLowerCase())) &&
                                        (filtroCargo === '' || vaga.nome.toLowerCase().includes(filtroCargo.toLowerCase()))
                                    );
                                    setVagasFiltradas(filteredVagas);
                                };
                                filtrarVagas();
                            }}
                        >
                            Achar vaga
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-96 flex ">
                <div className="w-1/2 h-[650px] overflow-y-auto mt-[-120px]">
                    {vagasFiltradas.map(vaga => (
                        <div key={vaga.codigo}
                            className="flex justify-between bg-[#D9D9D9] m-2.5 p-2.5 rounded-xl cursor-pointer"
                            onClick={() => setSelectedVaga(vaga)}>
                            <div>
                                <h1 class="txt-nome text-2xl">{vaga.nome}</h1>
                                <p class="txt-empresa text-[#616161] font-bold"><span>{vaga.empresa}</span></p>
                                <div class="flex mb-3">
                                    <p class="text-base"><span>{vaga.endereco}</span></p>
                                    <p class="text-base text-[#616161] ml-80">{vaga.modalidade}</p>
                                </div>
                                <p class="txt-descricao text-[#616161] text-sm text-justify"><span>{vaga.descricao}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/2 flex items-center justify-center mt-[-120px]">
                    <div className="bg-[#D9D9D9] p-4 rounded-xl shadow-lg max-w-[500px] w-full h-[500px] overflow-y-auto mt-3">
                        {selectedVaga ? (
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{selectedVaga.nome}</h2>
                                <p><strong>Descrição:</strong> {selectedVaga.descricao}</p>
                                <p><strong>Data:</strong> {selectedVaga.data}</p>
                                <p><strong>Salário:</strong> {selectedVaga.salario}</p>
                                <p><strong>Localidade:</strong> {selectedVaga.endereco}</p>
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
