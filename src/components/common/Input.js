import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
	const { viewStyle, textStyle, inputStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{label}</Text>
			<TextInput
				style={inputStyle}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				autoCorrect={autoCorrect}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
}

const styles = {
	viewStyle: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center'
	},

	textStyle: {
		flex: 1,
		fontSize: 18,
		marginLeft: 10,
		marginRight: 10
	},

	inputStyle: {
		flex: 2,
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23
	}
};

export { Input };