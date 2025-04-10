import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
