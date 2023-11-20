export default function NotificationCardContainer() {
	return (
		<div className='flex gap-4'>
			{/* see css for styles */}
			<article className='notif-card'>
				<div className='flex justify-between'>
					<span>
						<img src='/bell.svg' alt='bel' />
					</span>
					<span className='font-semibold text-xs cursor-pointer'>Save</span>
				</div>
				<div>We’ll be sending notifications to you here</div>
				<div>
					<input
						type='email'
						name='email'
						id='notif-email'
						className='w-full border border-[#D4D4D4] rounded-md h-[35px] px-2'
					/>
				</div>
			</article>

			{/* card2 */}
			<article className='notif-card'>
				<div className='flex justify-between'>
					<span className=''>
						<img src='/bar-chart-2.svg' alt='bar chart' />
					</span>
					<span>
						{/* <img src='/Checkmark.png' alt='check mark' className='w-full' /> */}
						<input
							type='checkbox'
							name='checkbox'
							id='notif-checkbox-1'
							className='p-2'
						/>
					</span>
				</div>
				<div>Notify me when any wallets move more than</div>
				<div>
					<select className='p-2 rounded-md bg-[#E5E5E680]'>
						<option value='$1000.00'>$1000.00</option>
						<option value='$5000.00'>$5000.00</option>
						<option value='$10,000.00'>$10,000.00</option>
						<option value='$50,000.00'>$50,000.00</option>
					</select>
				</div>
			</article>

			{/* card3 */}
			<article className='notif-card'>
				<div className='flex justify-between'>
					<span className=''>
						<img src='/clock.svg' alt='clock' />
					</span>
					<span>
						{/* <img src='/Checkmark.png' alt='check mark' className='w-full' /> */}
						<input
							type='checkbox'
							name='checkbox'
							id='notif-checkbox-1'
							className='p-2'
						/>
					</span>
				</div>
				<div>
					<div className='mb-2'>Notify me when any wallet dormant for</div>
					<div>
						<select className='p-2 rounded-md bg-[#E5E5E680]'>
							<option value='>30days'>{'>'}30days</option>
							<option value='>60days'>{'>'}60days</option>
							<option value='>120days'>{'>'}90days</option>
						</select>
						<div className='mt-2'>Becomes active</div>
					</div>
				</div>
			</article>
		</div>
	)
}
