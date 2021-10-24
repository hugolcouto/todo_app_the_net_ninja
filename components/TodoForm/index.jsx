import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export const TodoForm = ({ list, setList }) => {
	const [todoItem, setTodoItem] = useState('');

	const addItemHandler = () => {
		return new Promise((resolve, reject) => {
			setList([...list, {
				id: list.length + 1,
				item: todoItem
			}]);
			resolve()
		}).then(() => {
			setTodoItem('');
		})
	}

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder="Insira um valor"
				onChangeText={value => setTodoItem(value)}
				value={todoItem}
			/>
			<TouchableOpacity style={styles.button} onPress={addItemHandler}>
				<Text style={styles.label}>Adicionar &#x2b;</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		marginBottom: 20,
		paddingBottom: 10,
	},
	input: {
		borderColor: '#000',
		borderRadius: 8,
		borderWidth: 1,
		padding: 10,
		backgroundColor: '#d3d3d3',
		elevation: 1,
	},
	button: {
		backgroundColor: '#000',
		borderRadius: 8,
		marginTop: 10,
		elevation: 1,
	},
	label: {
		color: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 20,
		textAlign: 'center',
	}
})
