const Person = (props) => (
  <li>
    <span>{props.name}</span>
    <button onClick={props.delete}>Delete</button>
  </li>
)
class List extends React.Component {
  state = {
    people: [
      {id: 1, name: 'Just'},
      {id: 2, name: 'do '},
      {id: 3, name: 'It'},
      {id: 4, name: 'John W.'},
      {id: 5, name: 'Piotr C.'},
    ]
  }

  handleDelete = (id) => {
      //---------------- FIRST METHOD ---------------------------
      // const people = [...this.state.people]
      // const newData = people.findIndex(person => person.id === id)
      // people.splice(newData, 1)
      // this.setState({
      //   people: people
      // })
      //----------------- SECOND METHOD -----------------------------
      const people = [... this.state.people]
      const newData = people.filter(person => person.id !== id)
        this.setState({
          people: newData
        })
  }
  render() {
    return(
      <ul>
        {this.state.people.map(person => <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.id)}
        />)}
      </ul>
    )
  }
}
ReactDOM.render(<List />, document.getElementById('root'))