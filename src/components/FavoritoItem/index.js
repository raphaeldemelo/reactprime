import React from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Titulo,
    RateContainer,
    Rate,
    ActionContainer,
    DetailButton,
    DeleteButton,

} from './styles';

import { Ionicons, Feather } from '@expo/vector-icons';

export default function FavoritoItem({ data, deleteFilme, navigatePage }) {
    return (
        <Container>
            <Titulo size={22}>{data.title}</Titulo>
            <RateContainer>
                <Ionicons name='md-star' size={12} color='#e7a74e' />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <Titulo size={14}>Ver detalhes</Titulo>
                </DetailButton>

                <DeleteButton onPress={() => deleteFilme(data.id)}>
                    <Feather name='trash' size={24} color='#fff' />
                </DeleteButton>
            </ActionContainer>

        </Container >
    );
}