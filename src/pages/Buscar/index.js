import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';
import ProcurarItem from '../../components/ProcurarItem';

import {
    Container,
    ListaFilmes,
} from './styles';

export default function Buscar() {

    const navigation = useNavigation();
    const route = useRoute();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let isActive = true;

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    query: route.params?.nome,
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            })

            if (isActive) {
                setMovie(response.data.results);
                //console.log(response.data.results);
                setLoading(false);
            }
        }

        if (isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }
    }, [])

    function navigationDetailsPage(item) {
        navigation.navigate('Detalhes', { id: item.id })
    }


    if (loading) {
        <Container>
            <ActivityIndicator size={30} color="#fff" />
        </Container>
    }

    return (
        <Container>
            <ListaFilmes
                data={movie}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ProcurarItem data={item} navigatePage={() => navigationDetailsPage(item)} />}
            />
        </Container>
    );
}