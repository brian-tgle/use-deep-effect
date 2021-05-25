import React from 'react'
import useDeepEffect from 'use-deep-effect'

interface FullnameProps {
  data : {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
  };
}

const InlineInfo: React.FC<FullnameProps> = ({ data }) => {
  useDeepEffect(() => {
      console.log('change')
  }, [data])
  return <h1>{data.firstName} {data.lastName} - {data.age} - {data.gender}</h1>
}

const App = () => (
  <InlineInfo data={{ firstName: 'Nguyen', lastName: 'Van A', age: 24, gender: 'Male' }} />
)

export default App;

