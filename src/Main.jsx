import Content from './Content'
import Sidebar from './Sidebar'

export default function Main() {
	return (
		<div id='main' className='min-h-[100vh] xl:grid relative'>
			<img src="bluela2.svg" id="background-image"/>
			<div className='main-content mx-[var(--page-margin-lr)] pt-[var(--page-margin-t)] pb-[var(--page-margin-b)] overflow-hidden z-10'>
				<Content />
			</div>
			<Sidebar />
		</div>
	)
}
