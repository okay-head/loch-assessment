export default function Sidebar2() {
	return (
		<div id="sidebar-2" className='xl:hidden flex flex-col mx-auto gap-4 fixed left-0 right-0 bottom-0 w-full bg-white rounded-t-2xl p-6 text-sm'>
			<h1 className='text-xl text-[#B0B1B3]'>
				Sign up for exclusive access
			</h1>
			<input
				placeholder='Your email address'
				className='input-shadow rounded-md py-2 px-3 border border-[#E5E5E6]'
			></input>
			<button className='rounded-md bg-[var(--text-primary)] w-[240px] text-white py-2 px-3'>
				Get started
			</button>
			<div className='font-semibold'>
				You'll recieve an email with an invite link to join
			</div>
		</div>
	)
}
