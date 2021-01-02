const argot = ['Industry', 'Commerce', 'Enterprise', 'Business'];

function Business() {
  const [noun, setNoun] = React.useState('Business'); 
  
  const getSynonym = () => {
    let nym = argot.shift();
    argot.push(nym);
    return nym;
  }
  
  const handleClick = () => setNoun(getSynonym())

  return (
    <main>
      <section className="business" onClick={handleClick}>
        {noun}
      </section>
    </main>
  )
}

ReactDOM.render(
  <Business />,
  document.getElementById('root')
)
