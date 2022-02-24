import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    BannerButton,
    Banner,
    SliderMovie,
} from './styles';

import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import SliderItem from '../../components/SliderItem';
import api, { key } from '../../services/api';
import { getListMovies, randomBanner } from '../../utils/movie';

import { useNavigation } from '@react-navigation/native';


export default function Home() {


    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [breveMovies, setBreveMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bannerMovie, setBannerMovie] = useState({});
    const navigation = useNavigation();
    const [input, setInput] = useState('');

    useEffect(() => {
        let isActive = true;
        const ac = new AbortController();

        async function getMovies() {

            const [nowData, popularData, topData, breveData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                api.get('/movie/upcoming', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),


            ])

            if (isActive) {
                const nowList = getListMovies(10, nowData.data.results);
                const popularList = getListMovies(10, popularData.data.results);
                const topList = getListMovies(10, topData.data.results);
                const breveList = getListMovies(10, breveData.data.results);

                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])

                setNowMovies(nowList)
                setPopularMovies(popularList)
                setTopMovies(topList)
                setBreveMovies(breveList)
                setLoading(false)
            }
        }
        getMovies();

        return () => {
            isActive = false
            ac.abort();
        }
    }, [])

    function navigatePaginaDetalhes(item) {
        navigation.navigate('Detalhes', { id: item.id })
    }

    function handleSearchMovies() {

        if (input === '') return;

        navigation.navigate('Buscar', { nome: input })

        setInput('')
    }


    if (loading) {
        return (
            <Container style={{ alignContent: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='#fff' />
            </Container>
        )
    }

    return (
        <Container>
            <Header title='React Prime' />

            <SearchContainer>
                <Input
                    placeholder="Ex Vingadores"
                    placeholderTextColor="#ddd"
                    value={input}
                    onChangeText={(texto) => setInput(texto)}
                />
                <SearchButton onPress={handleSearchMovies}>
                    <Feather name='search' size={30} color='#fff' />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.9} onPress={() => navigatePaginaDetalhes(bannerMovie)}>
                    <Banner
                        resizeMethod='resize'
                        source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
                    />
                </BannerButton>

                <SliderMovie
                    horizontal={true}
                    data={nowMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigatePaginaDetalhes(item)} />}
                    keyExtractor={(item) => item.id}
                />

                <Title>Populares</Title>

                <SliderMovie
                    horizontal={true}
                    data={popularMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigatePaginaDetalhes(item)} />}
                    keyExtractor={(item) => item.id}
                />

                <Title>Mais votados</Title>

                <SliderMovie
                    horizontal={true}
                    data={topMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigatePaginaDetalhes(item)} />}
                    keyExtractor={(item) => item.id}
                />

                <Title>Em breve</Title>

                <SliderMovie
                    horizontal={true}
                    data={breveMovies}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigatePaginaDetalhes(item)} />}
                    keyExtractor={(item) => item.id}
                />

            </ScrollView>

        </Container >
    );
}