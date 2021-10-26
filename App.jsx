import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header, TodoItem, TodoForm, Sandbox } from './components';

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
		// <Sandbox />
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c3c3c3',
		paddingTop: 30,
	},
	content: {
		paddingVertical: 30,
		paddingHorizontal: 20,
		flex: 1
	},
	list: {
		flex: 1,
	}
});
