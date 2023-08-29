import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    border-bottom-width: 1px;
    background-color: rgba(21, 21, 21, 0.8);
    margin-bottom: 10px;
    align-self: center;
    justify-content: center;
`;

export const MainContainer = styled.View`
    padding-left: 60px;
    padding-right: 20px;
`;

export const Name = styled.Text`
    font-weight: 600;
    color: #FFF;
`;

export const Username = styled.Text`
    margin-left: 5px;
    color: #EBEBEB;
`;

export const Content = styled.Text`
    color: #FFF;
    line-height: 20px;
`;

export const ImageContent = styled.Image`
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
`;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`;

export const Footer = styled.View`
    flex-direction: row;
    margin-right: 5px;
    gap: 10px;
    padding-top: 8px;
`;
