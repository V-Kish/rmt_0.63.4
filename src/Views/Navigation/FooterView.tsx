import { baseComponentProps, componentPropsWithModel, TypedBaseComponent } from '../../Core/BaseComponent';

import React from 'react';

import { View, Text, Image } from 'react-native';
import { STYLES } from '../../Styles/Styles';
import { TouchableOpacity } from 'react-native';
import { FooterModel } from '../../Models/Navigation/FooterModel';

import { app } from '../../Core/AppImpl';
import { HistoryScreen } from '../../Screens/HistoryScreen';
import { RecomendationScreen } from '../../Screens/RecomendationScreen';
import { FavouriteScreen } from '../../Screens/FavouriteScreen';
import { UserDashboardScreen } from '../../Screens/UserDashboard';
import { HomeScreen } from '../../Screens/HomeScreen';
import { BlogScreen } from '../../Screens/BlogScreen';
import { SvgUri } from 'react-native-svg';

type footerViewProps = baseComponentProps & {

};

class FooterView extends TypedBaseComponent<footerViewProps, FooterModel>{

    constructor(props: componentPropsWithModel<footerViewProps, FooterModel>) {
        super(props);
    }

    render() {
        
        super.render();
        return(

               
            <View style={STYLES.footerNav.container}>
                 <TouchableOpacity style={ STYLES.footerNav.item } onPress={()=>{
                    app.navigator.navigate("BlogScreen");
                }}>
                    <Image style={ STYLES.footerNav.itemImage } source={require('../../Images/history.png')} />
                    
                    <Text style={ STYLES.footerNav.itemText }>Історія</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ STYLES.footerNav.item } onPress={()=>{
                    app.navigator.navigate("RecomendationScreen")
                }}>
                    <Image style={ STYLES.footerNav.itemImage } source={require('../../Images/recomendations.png')} />
                    <Text style={ STYLES.footerNav.itemText }>Рекомендуємо</Text>
                </TouchableOpacity>


                <View style={ STYLES.footerNav.jetItem }>
                    <TouchableOpacity style={ STYLES.footerNav.jetButton } onPress={()=>{
                        app.navigator.navigate("HomeScreen")
                    }}>
                        {/* <Image style={ STYLES.footerNav.itemImage } source={require('../../Images/jet.png')} /> */}
                        <SvgUri style={ STYLES.footerNav.jetImage } uri="https://svgsilh.com/svg/306889.svg" />
                    </TouchableOpacity>

                    <View style={ STYLES.footerNav.jetCover }>
                    
                    </View>
                </View>

                <TouchableOpacity style={ STYLES.footerNav.item } onPress={()=>{
                    app.navigator.navigate("FavouriteScreen")
                }}>
                    <Image style={ STYLES.footerNav.itemImage } source={require('../../Images/heart.png')} />
                    <Text style={ STYLES.footerNav.itemText }>Вибране</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ STYLES.footerNav.item } onPress={()=>{
                    app.navigator.navigate("UserDashboardScreen")
                }}>
                    <Image style={ STYLES.footerNav.itemImage } source={require('../../Images/userImg.png')} />
                    <Text style={ STYLES.footerNav.itemText }>Кабінет</Text>
                </TouchableOpacity>


            </View>

        );

    }


}





export { FooterView };