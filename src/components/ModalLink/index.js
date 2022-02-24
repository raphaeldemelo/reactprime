import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { BackButton, Nome } from './styles';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function ModalLink({ link, title, closeModal }) {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: -60}}>
            <BackButton onPress={closeModal}>
                <Feather name="x" size={35} color="#fff" />
                <Nome numberOfLines={1}>{title}</Nome>
            </BackButton>

            <WebView
                source={{ uri: link }}
            />
        </SafeAreaView>
    );
} 