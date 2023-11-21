'use strict';

const e = React.createElement;

class Proj2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'SmartStreet: Created an app that implemented google maps to find food for low-income people under a budget';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'StreetSmart'
    );
  }
}

const domContainer2 = document.querySelector('#proj2_container');
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(e(Proj2));