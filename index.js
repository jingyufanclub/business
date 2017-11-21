class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: 'Business'
    }
  }

  onChange = () => {
    this.setState({business: 'Enterprise'})
  }

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
