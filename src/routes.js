import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const appStack = createNativeStackNavigator();

import screen1 from './screens/screen1/index';
import screen2 from './screens/screen2/index';

export default function Routes(){

    return(
    /**NavigationContainer é o Container que engloga toda a aplicação*/
    /**appStack.Navigator serve para informar o tipo de navegação que estou usando = Stack */
    /**component={screen2} é a variável que importei na linha 9 e o name='screen2' é o que vou usar para chamar essa navegação*/
    /**initialRouteName='screen1' serve para dizer qual tela vai aparecer primeiro*/
        <NavigationContainer> 
            <appStack.Navigator initialRouteName='screen1'>
                <appStack.Screen name='screen1' component={screen1} />
                <appStack.Screen name='screen2' component={screen2} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}