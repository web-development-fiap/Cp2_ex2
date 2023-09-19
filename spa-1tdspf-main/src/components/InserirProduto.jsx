import React, { useState } from 'react';
import { ListaProdutos } from './ListaProdutos';
import styles from './InserirProduto.module.css';

export default function InserirProduto(props) {
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    desc: '',
    preco: 0,
    img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const adicionarProduto = () => {
    const produto = {
      id: ListaProdutos.length + 1,
      ...novoProduto,
    };

    ListaProdutos.push(produto);

    setNovoProduto({
      nome: '',
      desc: '',
      preco: 0,
      img: '',
    });
  };

  return (
    <div className={styles['inserir-produto-container']}>
      <div>
        <h2>Inserir Novo Produto</h2>
        <form>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={novoProduto.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="desc">Descrição</label>
            <input
              type="text"
              name="desc"
              id="desc"
              value={novoProduto.desc}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              name="preco"
              id="preco"
              value={novoProduto.preco}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="img">URL da Imagem</label>
            <input
              type="text"
              name="img"
              id="img"
              value={novoProduto.img}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="button" onClick={adicionarProduto}>
              Inserir Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
