import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#000",
		paddingVertical: 20,
		elevation: 10,

	},
	title: {
		textAlign: 'center',
		fontWeight: '700',
		fontSize: 16,
		color: '#fff',
	}
})