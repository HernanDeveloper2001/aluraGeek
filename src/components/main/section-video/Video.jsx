import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { MainContainer } from "../../../styleComponents"

const SectionVideo = styled.main`
  width: 100%;
  display: grid;
  place-items: center;
`
const VideoContainer = styled.video`
  width:90%;
  height: 90%;
  border-radius: 5px;
`

const Video = () => {
  const location = useLocation();
  const {video} = location.state;
  return (
    <MainContainer>
      <SectionVideo>
        <VideoContainer controls src={video}>
          Tu navegador no soporta el elemento de video.
        </VideoContainer>
      </SectionVideo>
    </MainContainer>
  )
}

export default Video
