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
          </div>
        </form>
      </div>
    </div>
  );
}
