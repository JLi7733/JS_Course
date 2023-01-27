const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part.name} {props.part.excercises}</p>
  )
}
const Content = (props) =>{
  return(
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of excercises {props.parts[0].excercises +
      props.parts[1].excercises +
      props.parts[2].excercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack applilcation development'
  const parts = [
    {name: 'Fundamentals of React', excercises: 10},
    {name: 'Using props to pass data', excercises: 7},
    {name: 'State of a component', excercises: 14}
  ]

  return(
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
      
    </div>
  )
}

export default App;
