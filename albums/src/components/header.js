import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    const {headerText} = props;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {headerText}
            </Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: "#f8f8f8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        paddingTop: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .2,
        shadowColor: "#000",
        elevation: 2,
        position: "relative"
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}

export default Header;
