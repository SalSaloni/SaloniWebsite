'use strict';

const e = React.createElement;

class Proj1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'PandaSpeaks description: Created a game to help autistic students learn java';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'PandaSpeaks'
    );
  }
}

const domContainer = document.querySelector('#proj1_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Proj1));