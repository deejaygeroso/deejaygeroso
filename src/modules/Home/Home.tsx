import { Footer, Projects, Testimonials, WelcomeScreen } from './Sections'
import React, { FunctionComponent, ReactElement } from 'react'
import { RouteComponentProps } from '@reach/router'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
