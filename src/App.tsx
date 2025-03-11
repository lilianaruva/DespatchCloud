import { useState } from 'react';
import './App.css'
import MultiSelect from './component/MultiSelect'

const options = [
  "Line chart",
  "Area chart",
  "Column chart",
  "Bar chart",
  "Pie chart",
  "Scatter chart",
  "Bubble chart",
];

function App() {

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div className="p-4 bg-[#E6E8E9] h-screen w-full grid place-items-center">
      <MultiSelect
        label="Chart type"
        options={options}
        value={selectedOptions}
        onSelect={setSelectedOptions}
      />
    </div>
  )
}

export default App
