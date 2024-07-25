import { Container, Typography } from "@mui/material"
import Filter from "./components/Filter"
import TodoList from "./components/TodoList"

function App() {

  return (
    <div>
      <Container maxWidth="sm" >
        <Typography align="center" variant="h5">TODO LIST REDUX MUI</Typography>
        <Filter />
        <TodoList />
      </Container>
    </div>
  )
}

export default App
