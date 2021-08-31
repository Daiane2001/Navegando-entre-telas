import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles'; //importando o arquivo styles para poder usar na formatação dessa tela()

export default function screen2(){
    //Aula02 Programação Para Dispositivos Móveis min 50:38 ------> https://youtu.be/_XgmqPxFNvg

    const navi = useNavigation();//navi é um objeto para fazer a navegação

    function naviToScreen1(){
        /**Navegar para a tela 2 */
        navi.navigate('screen1');//falando para qual tela quero ir

    }

    return(
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.button} onPress={naviToScreen1}
            >
                <Text
                    style={styles.textButton}
                >
                    Tela 1
                </Text>
            </TouchableOpacity>
        </View>
    );
}