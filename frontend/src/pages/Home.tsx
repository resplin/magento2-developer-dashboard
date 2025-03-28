import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../styles/App.css'

function Home() {
    return (
        <>
            <Header />

            <main>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 col-xl-4'}>
                            <ProjectList />
                        </div>

                        <div className={'col-12 col-md-7 col-xl-8'}>
                            <div>
                                <h1>Vite + React</h1>
                                <a href="https://vite.dev" target="_blank">
                                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                                </a>
                                <a href="https://react.dev" target="_blank">
                                    <img src={reactLogo} className="logo react" alt="React logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
