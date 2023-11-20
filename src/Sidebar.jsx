export default function Sidebar() {
	const submitHandler = (e) => {
		e.preventDefault()
		window.open('https://app.loch.one/welcome')
	}
	return (
		<div className='bg-white hidden xl:block z-10'>
			<div className='h-screen grid place-items-center'>
				<div className=' flex flex-col max-w-[340px] mx-auto gap-6 fixed'>
					<h1 className='text-4xl text-[#B0B1B3] pb-2'>
						Sign up for exclusive access
					</h1>
					<form
						id='sidebar-form'
						onSubmit={(e) => {
							submitHandler(e)
						}}
					>
						<input
							type='email'
							name='email'
							placeholder='Your email address'
							className='w-full input-shadow rounded-md py-3 px-6 border border-[#E5E5E6]'
						></input>
					</form>
					<button
						type='submit'
						form='sidebar-form'
						className='rounded-md bg-[var(--text-primary)] w-full text-white py-3 px-6'
					>
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
