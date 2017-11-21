class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: 'Business'
    }
  }

  render() {
    return (
      <main>
        <div className="business">
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
