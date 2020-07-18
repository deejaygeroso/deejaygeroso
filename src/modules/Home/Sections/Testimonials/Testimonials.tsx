import React, { FunctionComponent, ReactElement } from 'react'
import { denmark, dustin, vanessa } from '../../../../common/images'
import './styles.css'

const Testimonials: FunctionComponent = (): ReactElement => {
  return (
    <section id='testimonials'>
      <h1>Testimonials</h1>
      <div className='profile'>
        <img src={denmark} />
        <div>
          <h1>Denmark Tabiolo</h1>
          <p>ReactJS Developer when he was working @ Adally</p>
          <p>
            {`Based on my experience as a developer, Deejay was the best teammate that I had ever worked with. He is
            really knowledgeable and passionate with his craft. He is a hardworking person and a good leader.`}
          </p>
          <p>
            {`He's
            pretty much flexible that he can do Frontend Development, Backend Development, Database Management and even
            Dev Ops with ease.`}
          </p>
          <p>
            {`As a leader, he is also considerate and open to fresh ideas giving his teammates the
            opportunity to shine. No doubt, I highly recommend this guy.`}
          </p>
        </div>
      </div>
      <div className='profile'>
        <img src={dustin} />
        <div>
          <h1>Dustin Watkins</h1>
          <p>Co-Founder and Head of Engineering of Databased</p>
          <p>Having worked with Deejay for almost a year, I learned a few things about him:</p>
          <ul>
            <li>He is a hard worker</li>
            <li>He is a doer, not a complainer</li>
            <li>
              He takes initiative I also appreciated his sincere effort in getting to know the team members personally
              as a remote developer. His warm personality made the whole remote experience much better.
            </li>
          </ul>
        </div>
      </div>
      <div className='profile'>
        <img src={vanessa} />
        <div>
          <h1>Vanessa Faith Abordo</h1>
          <p>Web Developer (Previous Teammate @ Snapzio Inc.)</p>
          <p>
            Deejay is a proficient React Native developer and a great team player. He is knowledgeable not only on
            frontend, but on backend and devops roles as well. He can do full stack development but more focus on
            mobile.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
