import { IDomain, IProject } from '../../interfaces'
import React, { FunctionComponent, ReactElement } from 'react'
import './styles.css'

interface IProps {
  project: IProject
}

const ProjectInfo: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { project } = props
  return (
    <div className='project-info'>
      <h2 className='project-title'>
        {project.name}
        {project.domains.length !== 0 && (
          <span>
            {project.domains.map(
              (domain: IDomain, key: number): ReactElement => (
                <a href={domain.url} key={key} target='_blank' rel='noopener noreferrer'>
                  {domain.name}
                </a>
              ),
            )}
          </span>
        )}
      </h2>
      <p>{project.description}</p>
      <p>Position: {project.position}</p>
      {project.technology.length === 0 ? (
        <p>
          Technology: <span className='warning'>Cannot disclose publicly!</span>
        </p>
      ) : (
        <>
          <p>Technology</p>
          <ul>
            {project.technology.map(
              (tech: string, key: number): ReactElement => (
                <li key={key}>{tech}</li>
              ),
            )}
          </ul>
        </>
      )}
    </div>
  )
}

export default ProjectInfo
