# use-deep-effect

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/use-deep-effect.svg)](https://www.npmjs.com/package/use-deep-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-deep-effect
```

## Usage

```tsx
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
```

## License

 © [brian-tgle](https://github.com/brian-tgle)
