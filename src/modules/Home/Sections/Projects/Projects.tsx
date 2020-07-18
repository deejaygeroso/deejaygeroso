import Modal from './Modal'
import React, { FunctionComponent, ReactElement, useState } from 'react'
import Project from './Project'
import projectsData from './projectsData'
import projects from './projectsData'
import { fadeInDirection } from './ScrollAnimation/ScrollAnimation'
import './styles.css'

export interface IProject {
  description: string
  domains: {
    name: string
    url: string
  }[]
  name: string
  photos: {
    name: string
  }[]
  position: string
  technology: string[]
}

const Projects: FunctionComponent = (): ReactElement => {
  const [projectIndex, setProjedtIndex] = useState(0)
  const [isModalVisible, toggleModal] = useState(false)

  const showModal = (selectedProjectIndex: number): void => {
    toggleModal(true)
    setProjedtIndex(selectedProjectIndex)
  }

  const hideModal = (): void => {
    toggleModal(false)
  }

  return (
    <section id='projects'>
      <h1>PROJECTS</h1>
      <Modal isVisible={isModalVisible} hideModal={hideModal} project={projectsData[projectIndex]} />
      {projects.map(
        (project: IProject, key: number): ReactElement => {
          const fadeInDirectionInput = key % 2 === 0 ? fadeInDirection.right : fadeInDirection.left
          return (
            <Project
              fadeInDirection={fadeInDirectionInput}
              key={key}
              project={project}
              showModal={(): void => showModal(key)}
            />
          )
        },
      )}
    </section>
  )
}

export default Projects