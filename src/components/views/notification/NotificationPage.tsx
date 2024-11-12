import { MaterialIcons } from '@expo/vector-icons/'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Padding } from '../../layouts/Padding'
import { style } from './NotificationStyle'

export const NotificationPage = () => {
	const router = useRouter()
	return (
		<Padding>
			<View style={style.navigation}>
				<View style={style.back_arrow}>
					<MaterialIcons
						onPress={() => router.back()}
						name='arrow-back-ios'
						size={24}
						color='black'
					/>
				</View>
				<Text>Your notifications</Text>
			</View>
		</Padding>
	)
}
