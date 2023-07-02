import Chart1 from "./Chart1";
import Chart3 from "./Chart3";
import StakeChart from "./Chart2";



function App() {

  

  return (

    <div className="bg-pink-50 flex flex-col ">
    
    <p className="text-xl p-4 font-semibold text-white text-center m-2 bg-green-600">
    Fine Data Analytics Private Limited
    </p>

<Chart1/>
<StakeChart/>
<Chart3/>



    </div>
  )
}

export default App;
