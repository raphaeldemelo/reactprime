import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import {
    Container,
    Banner,
    Title,
    RateContainer,
    Rate,
} from './styles';

export default function ProcurarItem({ data, navigatePage }) {

    function DetalheFilme() {
        if (data.release_date === '') {
            alert('Filme ainda sem data')
            return;
        }

        navigatePage(data);
    }

    return (
        <Container activeOpacity={0.7} onPress={DetalheFilme}>
            {data?.poster_path ? (
                <Banner
                    resizeMethod='resize'
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}` }}
                />
            ) : (
                <Banner
                    resizeMode='contain'
                    source={require('../../assets/semfoto.png')}
                />
            )}

            <Title>{data?.title}</Title>

            <RateContainer>
                <Ionicons name='md-star' size={12} color='#e7a74e' />
                <Rate>{data?.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    );
}