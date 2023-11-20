import React from 'react'
import Card from './Card'

export default function CardContainer() {
	return (
		<div className='flex overflow-hidden gap-4 xl:ms-[160px]' >
			<Card
				title={'Jack F'}
				subtitle={'Ex Blackrock PM'}
				body={
					'“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
				}
			/>

			<Card
				title={'Yash P'}
				subtitle={'Research, 3poch Crypto Hedge Fund'}
				body={
					'“I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!”'
				}
			/>

			<Card
				title={'Shiv S'}
				subtitle={'Co-Founder Magik Labs'}
				body={
					'“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”'
				}
				classVars='min-w-[510px]'
			/>
		</div>
	)
}
