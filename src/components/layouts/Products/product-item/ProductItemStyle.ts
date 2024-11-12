import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants'

export const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: 170,
		height: 210,
		backgroundColor: Colors.white,
		borderRadius: 12,
		padding: 8,
	},

	image_container: {
		position: 'relative',
	},

	favorites_container: {
		position: 'absolute',
		zIndex: 1,
		right: 8,
		top: 8,
		alignItems: 'center',
		justifyContent: 'center',
		width: 30,
		height: 30,
		backgroundColor: Colors.white,
		borderRadius: 999,
	},

	favorites_image: {
		width: 20,
		height: 20,
	},

	item_image: {
		width: 140,
		height: 110,
		marginBottom: 8,
	},

	meta_info_container: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 6,
	},

	row_gap4: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},

	price: {
		width: '100%',
		fontSize: 18,
		color: Colors.orange,
		fontWeight: 'bold',
	},
})
