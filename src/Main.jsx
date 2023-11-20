import React from 'react'
import CardContainer from './testimonials/CardContainer'
import NotificationCardContainer from './notifications/NotificationCardContainer'

export default function Main() {
	return (
		<div id='main' className='min-h-[100vh]'>
			<div className='main-content mx-[var(--page-margin-lr)] pt-[var(--page-margin-t)] pb-[var(--page-margin-b)]   '>

				<section className='section1 relative grid grid-cols-2 gap-8 text-[var(--text-secondary)]'>
					<img src="/Bell(1).svg" alt="bell" className='absolute left-0 -top-8'/>
					<div className='text'>
						<h2 className='text-3xl leading-[var(--line-h-larger)] my-4'>
							Get notified when a highly correlated whale makes a move
						</h2>
						<p className='opacity-[0.7] text-base font-normal leading-[var(--line-h-normal)]'>
							Find out when a certain whale moves more than any preset amount
							on-chain or when a dormant whale you care about becomes active.
						</p>
					</div>
					<div className='graphic text-[var(--text-primary)] overflow-hidden'>
						<NotificationCardContainer />
					</div>
				</section>


        {/* Exact copy , use multiline */}
				<section className='section2 relative grid grid-cols-2 gap-8 text-[--text-secondary] my-[72px]'>
				<img src="/Eye.svg" alt="bell" className='absolute right-0 -top-8'/>

					<div className='text order-2 text-right'>
						<h2 className='text-3xl leading-[var(--line-h-larger)] my-4'>
            Watch what the whales are doing
						</h2>
						<p className='opacity-[0.7] text-base font-normal leading-[var(--line-h-normal)]'>
            All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
						</p>
					</div>
					<div className='graphic order-1'>
            <img src="/cohorts.png" alt="cohorts image" className='rounded-xl w-[90%]' />
          </div>
				</section>


		<section className='testimonials relative py-4'>
			<h2 className="text-2xl border-b border-[#E5E5E680] font-medium text-[var(--text-secondary)] pb-5 text-right me-6 mb-10">Testimonials</h2>
			<span className='absolute left-0 top-10'>icon</span>
			<CardContainer />
		</section>
			</div>
		</div>
	)
}
