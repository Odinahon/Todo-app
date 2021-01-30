import 'bootstrap/dist/css/bootstrap.css'
// import logo from './logo.svg'
import './App.css'
import './bootsrap.css'
// import FirstComponent from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import Counter from './components/learning-examples/counter/Counter'
// import { Component } from 'react'
import TodoApp from './components/learning-examples/todo/TodoApp'

function App () {
  return (
    <div className='App'>
      {/* <Counter /> */}
      <TodoApp />
    </div>
  )
}
// class LearningComponents extends Component {
//   render () {
//     return (
//       <div className='LearningComponents'>
//         My Hello World!
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//       </div>
//     )
//   }
// }

export default App
