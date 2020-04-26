import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import * as d3 from 'd3'
import firebase from './firebase/firebase.ultil'

// all the hooks need to be inside the functional components
function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('rectangles')
      .onSnapshot((snapshot) => {
        const fetchedData = snapshot.docs.map(doc => ({...doc.data()}))
        
        setData(fetchedData)
      })

    console.log(data)
  }, [])

  // initiate a reference for svg element
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    const rect = svg.selectAll('rect')
      .data(data)
      .join('rect')
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('fill', d => d.fill)

    console.log(rect)
  }, [data])

  return (
    // place the reference hook into the svg element
    <div>
      <svg ref = {svgRef} width = '600' height = '600'>        
      </svg>
    </div>
  );
}

export default App;

 