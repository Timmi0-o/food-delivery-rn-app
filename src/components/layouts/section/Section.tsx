import React from 'react'
import { ScrollView, ScrollViewProps } from 'react-native'
import { style } from './SectionStyle'

interface SectionType extends ScrollViewProps {
	children: React.ReactNode
}

export const Section = ({ children, ...props }: SectionType) => {
	return (
		<ScrollView
			contentContainerStyle={[style.container, props.style]}
			{...props}
		>
			{children}
		</ScrollView>
	)
}
