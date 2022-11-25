import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { Navbar } from '../components/ui'

interface Props extends PropsWithChildren {
	title?: string
}

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='author' content='Douglas Ramirez' />
				<meta name='description' content={`Info about ${title}`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
			</Head>

			<Navbar />

			<main style={{ padding: '0 1vmin' }}>{children}</main>
		</>
	)
}
