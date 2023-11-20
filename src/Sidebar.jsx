export default function Sidebar() {
	return (
		<div className='bg-white'>
			<div className='h-screen grid place-items-center'>
				<div className=' flex flex-col max-w-[340px] mx-auto gap-6 fixed'>
					<h1 className='text-4xl text-[#B0B1B3] pb-2'>
						Sign up for exclusive access
					</h1>
					<input
						placeholder='Your email address'
						className='input-shadow rounded-md py-3 px-6 border border-[#E5E5E6]'
					></input>
					<button className='rounded-md bg-[var(--text-primary)] w-full text-white py-3 px-6'>
						Get started
					</button>
					<div className='font-semibold absolute -bottom-20 -left-2 w-[360px]'>
						You'll recieve an email with an invite link to join
					</div>
				</div>
			</div>
		</div>
	)
}
