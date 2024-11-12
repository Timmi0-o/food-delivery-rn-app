import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		height: 229,
	},
	banner: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		transform: [{ scale: 1.7 }],
	},
	headerInfo: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	locationContainer: {
		gap: 10,
	},
	selectLocation: {
		flexDirection: 'row',
		gap: 8,
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	actionButtons: {
		flexDirection: 'row',
		gap: 16,
	},
	circ: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 40,
		height: 40,
		borderRadius: 9999,
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid',
	},
})
