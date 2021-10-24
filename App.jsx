import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header, TodoItem, TodoForm } from './components';

export default function App() {
	const [list, setList] = useState([
		{
			item: 'Coffee',
			id: 1
		},
		{
			item: 'Mocha',
			id: 2
		},
		{
			item: 'Cappuccino',
			id: 3
		}
	])

	const pressHandler = (id) => {
		setList(list.filter(item => item.id !== id));
	}

	return (
		<View style={styles.container}>
			<Header title="Todo app" />
			<View style={styles.content}>
				<TodoForm setList={setList} list={list} />
				<View style={styles.list}>
					<FlatList
						keyExtractor={(item) => item.id}
						data={list}
						renderItem={({ item }) => (
							<TodoItem
								label={item.item}
								onPress={() => pressHandler(item.id)}
							/>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c3c3c3',
		paddingTop: 30,
	},
	content: {
		marginTop: 30,
		paddingTop: 0,
		paddingHorizontal: 20
	},
	list: {
		// 
	}
});
