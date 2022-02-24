import AsyncStorage from '@react-native-async-storage/async-storage';

// buscar os filmes salvos
export async function getFilmesSalvos(key) {
    const meusFilmes = await AsyncStorage.getItem(key)
    let filmesSalvo = JSON.parse(meusFilmes) || [];
    return filmesSalvo;
}


// salvar um novo filme
export async function salvarFilme(key, novoFilme) {
    let filmesStored = await getFilmesSalvos(key) // achar todos os filmes

    //se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar
    const hasFilme = filmesStored.some(item => item.id === novoFilme.id)

    if (hasFilme) {
        console.log('ESSE FILME JÁ EXISTE NA SUA LISTA')
        return;
    }

    filmesStored.push(novoFilme);

    await AsyncStorage.setItem(key, JSON.stringify(filmesStored))
    console.log('FILME SALVO COM SUCESSO')

}

// deletar algum filme específico

export async function deleteFilme(id) {
    let filmesStored = await getFilmesSalvos('@primereact')

    let meusFilmes = filmesStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(meusFilmes))
    console.log('FILME DELETADO COM SUCESSO')
    return meusFilmes;
}


// filtrar algum filme se já está salvo na lista

export async function hasFilme(movie) {
    let filmesStored = await getFilmesSalvos('@primereact')

    const hasFilme = filmesStored.find(item => item.id === movie.id)

    if (hasFilme) {
        return true;
    }
    return false;
}