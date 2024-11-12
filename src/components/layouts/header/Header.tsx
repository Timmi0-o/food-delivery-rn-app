import { Ionicons, Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BannerImage from '../../../assets/home-banner.png'
import { Padding } from '../Padding'
import { style } from './HeaderStyle'

export const Header = () => {
	const { top } = useSafeAreaInsets()
	return (
		<View>
			<Image
				style={[style.banner, { marginTop: -top * 1.65 }]}
				source={BannerImage}
			/>
			<Padding>
				<View style={style.container}>
					<View style={style.headerInfo}>
						<View style={style.locationContainer}>
							<View style={style.selectLocation}>
								<Text style={{ color: 'white' }}>Your Location</Text>
								<SimpleLineIcons name='arrow-down' size={16} color='white' />
							</View>
							<View style={style.location}>
								<SimpleLineIcons name='location-pin' size={24} color='white' />
								<Text style={{ color: 'white' }}>New York City</Text>
							</View>
						</View>
						<View style={style.actionButtons}>
							<Link href={'/notification'}>
								<View style={style.circ}>
									<Octicons name='search' size={20} color='white' />
								</View>
							</Link>
							<Link href={'/notification'}>
								<View style={style.circ}>
									<Ionicons
										name='notifications-outline'
										size={20}
										color='white'
									/>
								</View>
							</Link>
						</View>
					</View>
					<Text
						style={{
							color: 'white',
							marginTop: 24,
							fontSize: 32,
							fontWeight: 600,
						}}
					>
						Provide the best food for you
					</Text>
				</View>
			</Padding>
		</View>
	)
}
