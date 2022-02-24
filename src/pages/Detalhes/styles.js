import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #191a30;
padding-bottom: 30px
`;

export const Header = styled.View`
    z-index: 9999;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 15px;
`;

export const HeaderButton = styled.TouchableOpacity`
width: 45px;
height: 45px;
background-color: rgba(25, 26, 48, 0.8)
border-radius: 23px;
justify-content: center;
align-items: center;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 370px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background-color: #e72f49;
    width: 63px;
    height: 63px;
    border-radius: 35px;
    position: absolute;
    top: 300px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const Title = styled.Text`
margin-top: 35px;
color: #fff;
font-weight: bold;
font-size: 20px;
padding: 0 14px; 
`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`;

export const Rate = styled.Text`
color: #Fff;
font-size: 18px;
font-weight: bold;
`;

export const ListGenres = styled.FlatList`
    padding: 14px;
    margin : 8px 0;
    max-height: 55px;
    min-height: 55px;
`;

export const Descricao = styled.Text`
    color: #ddd;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 30px;
    line-height: 20px;
`;