import React, { useEffect, useState } from 'react';

import {
  Container,
  ListaFilme,
} from './styles';

import Header from '../../components/Header';
import FavoritoItem from '../../components/FavoritoItem';
import { getFilmesSalvos, deleteFilme } from '../../utils/storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';

console.disableYellowBox = true;

export default function Filmes() {

  const [filmes, SetFilmes] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getFilmesFavoritos() {
      const resultado = await getFilmesSalvos('@primereact')

      if (isActive) {
        SetFilmes(resultado);
      }
    }

    if (isActive) {
      getFilmesFavoritos();
    }

    return () => {
      isActive = false;
    }
  }, [isFocused])

  async function handleDelete(id) {
    const resultado = await deleteFilme(id);
    setFilmes(resultado);
  }

  function navigateDetailPage(item) {
    navigation.navigate('Detalhes', { id: item.id })
  }

  return (
    <Container>
      <Header title='Meus Filmes' />

      <ListaFilme
        showsVerticalScrollIndicator={false}
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <FavoritoItem
            data={item}
            deleteFilme={handleDelete}
            navigatePage={() => navigateDetailPage(item)}
          />
        )}
      />

    </Container>
  );
}