import { useLocation } from "react-router-dom"
import styled from "styled-components"

const SectionVideo = styled.main`
  width: 100%;
  height: 100vh;
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
  console.log(video)
  return (
    <SectionVideo>
      <VideoContainer controls>
        <source src={video} type="video/*"></source>
        <source src={video} type="video/*"></source>
        Tu navegador no soporta el elemento de video.
      </VideoContainer>
    </SectionVideo>
  )
}

export default Video
