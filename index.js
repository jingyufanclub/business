const nyms = ['Industry', 'Commerce', 'Enterprise', 'Business'];

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: 'Business'
    }
  }

  getNym() {
    let nym = nyms.shift();
    nyms.push(nym);
    return nym;
  }

  onChange = () => this.setState({business: this.getNym()})

  render() {
    return (
      <main>
        <div className="business" onClick={() => this.onChange()}>
          {this.state.business}
        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <Business />,
  document.getElementById('root')
)
