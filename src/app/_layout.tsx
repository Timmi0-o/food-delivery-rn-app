import { Stack } from 'expo-router'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { setCustomText, setCustomView } from 'react-native-global-props'

const customTextProps = {
	style: {
		fontFamily: 'Inter-Medium',
		fontSize: 16,
	},
}
setCustomText(customTextProps)

const customViewProps = {
	style: {
		flex: 1,
	},
}
setCustomView(customViewProps)

export const RootLayout = () => {
	return (
		<GestureHandlerRootView>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
		</GestureHandlerRootView>
	)
}
