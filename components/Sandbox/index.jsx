import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Sandbox = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>One</Text>
			<Text style={styles.boxTwo}>Two</Text>
			<Text style={styles.boxThree}>Three</Text>
			<Text style={styles.boxFour}>Four</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		backgroundColor: '#c3c3c3',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
	},
	boxOne: {
		backgroundColor: 'red',
		padding: 10,
		flex: 1,
	},
	boxTwo: {
		backgroundColor: 'green',
		padding: 20,
		flex: 1,
	},
	boxThree: {
		backgroundColor: 'blue',
		padding: 30,
		flex: 1,
	},
	boxFour: {
		backgroundColor: 'yellow',
		padding: 40,
		flex: 1,
	},
})