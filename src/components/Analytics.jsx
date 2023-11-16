import React from 'react'
import { ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
function Analytics(props) {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
         <LineChart height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="percentage" stroke="#957248" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
          </LineChart> 
        </ResponsiveContainer>
        </div>
      </div>
    </div>
    </>
  )
}

export default Analytics