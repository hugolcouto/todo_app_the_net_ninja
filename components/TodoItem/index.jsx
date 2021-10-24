import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoItem = ({ label, onPress }) => {
	return (
		<TouchableOpacity style={styles.listItem} onPress={onPress}>
			<Text>{label}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: '#d3d3d3',
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.2)',
		borderStyle: 'dashed',
		elevation: 1,
		marginBottom: 10,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 8
	}
})