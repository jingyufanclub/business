const argot = ['Industry', 'Commerce', 'Enterprise', 'Business'];

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noun: 'Business'
    }
  }

  getSynonym() {
    let nym = argot.shift();
    argot.push(nym);
    return nym;
  }

  handleClick = () => this.setState({noun: this.getSynonym()})

  render() {
    return (
      <main>
        <section className="business" onClick={this.handleClick}>
          {this.state.noun}
        </section>
      </main>
    )
  }
}

ReactDOM.render(
  <Business />,
  document.getElementById('root')
)
