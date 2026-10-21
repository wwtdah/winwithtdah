//////////////////// IMPORTS
import { useState } from 'react'

///// CSS & JS
import './css/App.css'
import './css/style.css'

///// COMPONENTS IMPORT
import Header from './components/Header'
import Footer from './components/Footer'


///// IMAGES IMPORT
///// (absolute path /something for public assets that are not optimised)
///// (relative path ./something for src assets that will be optimised at build)
import heroImg from './assets/default/hero.png'
import reactLogo from './assets/default/react.svg'
import viteLogo from './assets/default/vite.svg'
import wwtLogo from './assets/img/logo/logo_complete.svg'





//////////////////// APP
function App() {
		
	const [count, setCount] = useState(0)

    // environment variable found in .env
    const greeting = import.meta.env.VITE_GREETING
    const apiUrl = import.meta.env.VITE_API_URL

    // state variable used in UI -> const[variable, setVariable] = useState(/baseValue/)
    //                              when setVariable is called, change the UI element but not the rest of the page
    const [ipAddress, setIpAddress] = useState("")

	return (
		<>
		<Header />

		<br/>

			<section id="center">
				<div className="hero">
					<img src={heroImg} className="base" width="170" height="179" alt="" />
					<img src={reactLogo} className="framework" alt="React logo" />
					<img src={viteLogo} className="vite" alt="Vite logo" />
				</div>
				<div>
					<h1>{greeting}</h1>
                    <h3><a href={apiUrl}>Your IP address is {ipAddress}</a></h3>
					<p>
						Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
					</p>
				</div>
				<button
					type="button"
					className="counter"
					onClick={() => setCount((count) => count + 1)}
				>
					Count is {count}
				</button>
			</section>

			<div className="ticks"></div>

			<section id="next-steps">
				<div id="docs">
					<svg className="icon" role="presentation" aria-hidden="true">
						<use href="/icons.svg#documentation-icon"></use>
					</svg>
					<h2>Documentation</h2>
					<p>Your questions, answered</p>
					<ul>
						<li>
							<a href="https://vite.dev/" target="_blank">
								<img className="logo" src={viteLogo} alt="" />
								Explore Vite
							</a>
						</li>
						<li>
							<a href="https://react.dev/" target="_blank">
								<img className="button-icon" src={reactLogo} alt="" />
								Learn more
							</a>
						</li>
					</ul>
				</div>
				<div id="social">
					<svg className="icon" role="presentation" aria-hidden="true">
						<use href="/icons.svg#social-icon"></use>
					</svg>
					<h2>Connect with us</h2>
					<p>Join the Vite community</p>
					<ul>
						<li>
							<a href="https://github.com/vitejs/vite" target="_blank">
								<svg
									className="button-icon"
									role="presentation"
									aria-hidden="true"
								>
									<use href="/icons.svg#github-icon"></use>
								</svg>
								GitHub
							</a>
						</li>
						<li>
							<a href="https://chat.vite.dev/" target="_blank">
								<svg
									className="button-icon"
									role="presentation"
									aria-hidden="true"
								>
									<use href="/icons.svg#discord-icon"></use>
								</svg>
								Discord
							</a>
						</li>
						<li>
							<a href="https://x.com/vite_js" target="_blank">
								<svg
									className="button-icon"
									role="presentation"
									aria-hidden="true"
								>
									<use href="/icons.svg#x-icon"></use>
								</svg>
								X.com
							</a>
						</li>
						<li>
							<a href="https://bsky.app/profile/vite.dev" target="_blank">
								<svg
									className="button-icon"
									role="presentation"
									aria-hidden="true"
								>
									<use href="/icons.svg#bluesky-icon"></use>
								</svg>
								Bluesky
							</a>
						</li>
					</ul>
				</div>
			</section>

			<div className="ticks"></div>
			<section id="spacer"></section>

			<Footer />
		</>
	)
}

export default App
