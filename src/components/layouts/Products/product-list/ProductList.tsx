import React from 'react'
import { View, ViewProps } from 'react-native'
import { ProductItem } from '../product-item/ProductItem'
import { style } from './ProductListStyle'

interface ProductListItemsType extends ViewProps {
	items: any
}

export const ProductList = ({ items, ...props }: ProductListItemsType) => {
	return (
		<View {...props} style={[style.container, props.style]}>
			{items.map((item: any, i: number) => (
				<ProductItem style={{ marginBottom: 15 }} key={i} item={item} />
			))}
		</View>
	)
}
