import Content from './Content'
import Sidebar from './Sidebar'

export default function Main() {
	return (
		<div id='main' className='min-h-[100vh] grid'>
			<div className='main-content mx-[var(--page-margin-lr)] pt-[var(--page-margin-t)] pb-[var(--page-margin-b)]'>
				<Content />
			</div>
			<Sidebar />
		</div>
	)
}
