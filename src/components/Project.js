import React from "react"
import styled from "styled-components"
import themed from "../functions/themed"
import SecondaryTitle from "../elements/SecondaryTitle"
import PropTypes from "prop-types"

const ProjectHeader = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.tertiary};
  
`

const ProjectTitle = styled(SecondaryTitle)`
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: 0;
`
const ProjectBody = styled.div`
  padding: 10px;
  border-bottom: 2px solid ${props => props.theme.colors.tertiary};
  border-left: 2px solid ${props => props.theme.colors.tertiary};
  border-right: 2px solid ${props => props.theme.colors.tertiary};
  margin-bottom: 20px;
`

const Project = ({ projectTitle, status, projectBodyContent: BodyContent }) => {
  return (
    <React.Fragment>
      <ProjectHeader>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectTitle>{status}</ProjectTitle>
      </ProjectHeader>
      <ProjectBody>
        <BodyContent />
      </ProjectBody>
    </React.Fragment>
  )
}

Project.propTypes = {
  projectTitle: PropTypes.string,
  status: PropTypes.string,
  projectBodyContent: PropTypes.node,
}

Project.defaultProps = {
  projectTitle: "",
  status: "",
  projectBodyContent: React.Fragment,
}

export default themed(Project)
