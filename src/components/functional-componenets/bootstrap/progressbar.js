import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedProgressBar() {
  return (
  <ProgressBar>
  <ProgressBar animated now={45} key={1} />
   <ProgressBar variant="success" animated now={20} key={2} />
        </ProgressBar>)
}

export default AnimatedProgressBar;