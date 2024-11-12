import { Image } from 'expo-image'
import React from 'react'
import { Text, View, ViewProps } from 'react-native'
import LocationDistance from '../.../../../../../assets/svg/location-distance.svg'
import Favorites from '../../../../assets/svg/favorites.svg'
import RatingStar from '../../../../assets/svg/rating-star.svg'
import { style } from './ProductItemStyle'

interface ProductItemType extends ViewProps {
	item: any
}

export const ProductItem = ({ item, ...props }: ProductItemType) => {
	return (
		<View {...props} style={[style.container, props.style]}>
			<View style={style.image_container}>
				<View style={style.favorites_container}>
					<Favorites style={style.favorites_image} />
				</View>
				<Image style={style.item_image} source={item.img} />
			</View>
			<Text>{item.title}</Text>
			<View style={style.meta_info_container}>
				<View style={style.row_gap4}>
					<RatingStar />
					<Text>{item.rating}</Text>
				</View>
				<View style={style.row_gap4}>
					<LocationDistance />
					<Text>{item.rating}</Text>
				</View>
			</View>
			<Text style={style.price}>{`$ ${item.price}`}</Text>
		</View>
	)
}
