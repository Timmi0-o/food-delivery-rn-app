import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function TabLayout() {
	const insets = useSafeAreaInsets()
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					height: 50,
					justifyContent: 'center',
					alignContent: 'center',
					borderTopColor: 'transparent',
					top: 10,
					paddingBottom: 8,
					marginHorizontal: 40,
					borderRadius: 8,
				},
				tabBarShowLabel: false,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<Entypo
							name='home'
							size={focused ? 32 : 28}
							color={focused ? '#FE8C00' : '#C2C2C2'}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ focused }) => (
						<Feather
							name='user'
							size={focused ? 32 : 28}
							color={focused ? '#FE8C00' : '#C2C2C2'}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
