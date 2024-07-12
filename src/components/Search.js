import React, { useEffect } from 'react'

export default function Search() {
    const [inputVal,setInputval]=React.useState("")
    const [result, setResult]=React.useState("")
    const [loading,setLoading]=React.useState(false)
     console.log(result.main)
     const temperature = result.main
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    async function fetchUrl(){
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json();
        setResult(data);
        console.log("heyyy",data)
        setLoading(false)
    }

   
        function formSubmit(e){
            e.preventDefault();
        }
    useEffect(()=>{
            fetchUrl()
   },[])
        
       
  
 
    return (
    <div>
         <form onSubmit={formSubmit}>
        <div className='line' >
           <input className='input' type='search'placeholder='search for a city' onChange={(e)=>setInputval(e.target.value)}/>
            
            <button className='btn btn-success'onClick={fetchUrl}>submit</button>
        </div>
        </form>

        <div className='temp'>
            { inputVal==="" ? "search..." : 
            <div>
                
             
                <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{result.id}</h5>
        <p className="card-text">Here are Your Results for {result.name}</p>
        <a href="#" className="btn btn-primary">temperature ^{}</a>
      </div>
    </div>
  </div>

  </div>

            </div>}  
        </div>

    </div>
  )
}
