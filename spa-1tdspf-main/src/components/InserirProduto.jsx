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