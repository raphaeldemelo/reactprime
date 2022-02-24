import React from 'react';
import {
    Container,
    Nome,
} from './styles';

export default function Genres({ data }) {
    return (
        <Container>
            <Nome>{data.name}</Nome>
        </Container>
    );
}