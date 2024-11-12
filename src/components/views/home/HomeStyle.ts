import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants'

export const style = StyleSheet.create({
	section_setting: {
		overflow: 'visible',
		marginBottom: 20,
	},

	find_category_container: {
		marginTop: 20,
		flex: 1,
	},

	find_category_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	see_all_category: {
		color: Colors.orange,
	},

	categories_container: {
		width: 300,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 16,
	},

	category_item_container: {
		width: 59,
		height: 65,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 4,
		borderRadius: 8,
	},

	category_image: {
		width: 24,
		height: 24,
	},

	category_name: {
		fontWeight: '600',
	},
})
