import { useState } from 'react'
import './App.css'

function Grid(props) {
  return (
    <div className="grid">
      {props.children}
    </div>
  )
};

function App() {
  return (
    <>
      <Grid>
        🚗
      </Grid>
    </>
  )
}

export default App
