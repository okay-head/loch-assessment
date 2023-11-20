import CardContainer from './testimonials/CardContainer'
import NotificationCardContainer from './notifications/NotificationCardContainer'

export default function Content() {
	return (
		<div className='xl:max-w-[768px]'> 
			<section className='section1 relative text-center xl:text-left xl:grid grid-cols-2 gap-8 text-[var(--text-secondary)]'>
				<img src='/Bell(1).svg' alt='bell' className='absolute left-[45%] -top-12 xl:left-0 xl:-top-8' />
				<div className='text'>
					<h2 className='text-2xl xl:text-3xl xl:leading-[var(--line-h-larger)] my-4'>
						Get notified when a highly correlated whale makes a move
					</h2>
					<p className='opacity-[0.7] text-sm xl:text-base font-normal leading-[var(--line-h-normal)] pb-6 xl:pb-0'>
						Find out when a certain whale moves more than any preset amount
						on-chain or when a dormant whale you care about becomes active.
					</p>
				</div>
				<div className='graphic text-[var(--text-primary)] overflow-hidden text-left'>
					<NotificationCardContainer />
				</div>
			</section>

			{/* Exact copy , use multiline */}
			<section className='section2 relative xl:grid grid-cols-2 gap-8 text-[--text-secondary] mt-28 my-[72px] xl:mt-[72px]'>

				<div className='relative text order-2 text-center xl:text-right self-center'>
				<img src='/Eye.svg' alt='eye' className='absolute right-[45%] -top-10 xl:right-0 xl:-top-8' />
					<h2 className='text-2xl xl:text-3xl xl:leading-[var(--line-h-larger)] my-4'>
						Watch what the <span className='hidden xl:block'></span> whales are doing
					</h2>
					<p className='opacity-[0.7] text-sm xl:text-base font-normal leading-[var(--line-h-normal)] pb-6 xl:pb-0'>
						All whales are not equal. Know exactly what the whales impacting
						YOUR <span className='hidden xl:block'></span> portfolio are doing.
					</p>
				</div>
				<div className='graphic order-1'>
					<img
						src='/cohorts.png'
						alt='cohorts image'
						className='rounded-xl w-[90%] mx-auto'
					/>
				</div>
			</section>

			<section className='testimonials relative py-4 mb-16 xl:mb-[unset]'>
				<h2 className='text-xl xl:text-2xl border-b border-[#E5E5E680] font-medium text-[var(--text-secondary)] pb-5  text-center xl:text-right me-6 mb-10'>
					Testimonials
				</h2>
				<span className='absolute -bottom-20 left-[45%] xl:left-10 xl:bottom-0'>
					<img src='/brand-icon.svg' alt='brand icon' className='w-[80%] xl:w-full' />
				</span>
				<CardContainer />
			</section>
		</div>
	)
}
