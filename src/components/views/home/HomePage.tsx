import * as Haptics from 'expo-haptics'
import { Image } from 'expo-image'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import BurgerImg from '../../../assets/burger.png'
import DrinkImg from '../../../assets/drink.png'
import PizzaImg from '../../../assets/pizza.png'
import TacoImg from '../../../assets/taco.png'
import { Header } from '../../layouts/header/Header'
import { Padding } from '../../layouts/Padding'
import { ProductList } from '../../layouts/Products/product-list/ProductList'
import { Section } from '../../layouts/section/Section'
import BurgerItemImage1 from './../../../assets/burger-item.png'
import BurgerItemImage2 from './../../../assets/burger-item2.png'
import BurgerItemImage3 from './../../../assets/burger-item3.png'
import BurgerItemImage4 from './../../../assets/burger-item4.png'
import { style } from './HomeStyle'

export const HomePage = () => {
	const [categoryIsSelect, setCategoryIsSelect] = useState<number>(0)

	const handlePress = (index: number) => {
		setCategoryIsSelect(index)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
	}

	return (
		<Section style={style.section_setting}>
			{/* STATUS BAR  */}
			<ExpoStatusBar style='light' />
			{/* HEADER  */}
			<Header />
			{/* FIND CATEGORY  */}
			<Padding style={style.find_category_container}>
				<View style={style.find_category_header}>
					<Text>Find by Category</Text>
					<Text style={style.see_all_category}>See All</Text>
				</View>
				{/* CATEGORIES  */}
				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={style.categories_container}
					data={categories}
					renderItem={({ item, index }) => (
						<Pressable onPress={() => handlePress(index)}>
							<View
								style={[
									style.category_item_container,
									{
										backgroundColor:
											categoryIsSelect === index ? '#FE8C00' : 'white',
									},
								]}
							>
								<Image style={style.category_image} source={item.img} />
								<Text
									style={[
										style.category_name,
										{
											color: categoryIsSelect === index ? 'white' : 'black',
										},
									]}
								>
									{item.title}
								</Text>
							</View>
						</Pressable>
					)}
					keyExtractor={(item) => item.title}
				/>
				{/* PRODUCTS  */}
				<ProductList
					items={[...products, ...products, ...products, ...products]}
				/>
			</Padding>
		</Section>
	)
}

const categories = [
	{ title: 'Burger', img: BurgerImg },
	{ title: 'Taco', img: TacoImg },
	{ title: 'Drink', img: DrinkImg },
	{ title: 'Pizza', img: PizzaImg },
]

const products = [
	{
		title: 'Ordinary Burgers',
		rating: '4.9',
		locationDistance: '190',
		price: '17,240',
		img: BurgerItemImage1,
	},
	{
		title: 'Burger With Meat',
		rating: '4.9',
		locationDistance: '190',
		price: '17,240',
		img: BurgerItemImage2,
	},
	{
		title: 'Burger With Meat2',
		rating: '4.9',
		locationDistance: '190',
		price: '17,240',
		img: BurgerItemImage3,
	},
	{
		title: 'Burger With Meat3',
		rating: '4.9',
		locationDistance: '190',
		price: '17,240',
		img: BurgerItemImage4,
	},
]
