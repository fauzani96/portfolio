import type {NextPage} from 'next'
import Copyright from '../src/Copyright'

import About from '../src/components/about/About.component'
import Education from '../src/components/education/Education.component'
import Experience from '../src/components/experience/Experience.component'
import Landing from '../src/components/landing/Landing.component'

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <About />
      <Education />
      <Experience />
      {/* <Contribution /> */}
      <Copyright />
    </>
  )
}

export default Home
