import './App.css';

function App() {
  return (
   <>
  <div className='container-image'>
    <img src='https://powerpackelements.com/wp-content/uploads/2018/01/travel-row-1.jpg' alt=''></img>
    <p class="centered text-pr">Amazing Santorini 7 Days Tour</p>
    <p class="centered text-pr2">A modern & beautiful WordPress theme for all travel & tourism business.</p>
    <button className='centered button'>book now</button>
  </div>
  <div className='container'>
    <div className='row shadow-lg p-3 mb-5 bg-body rounded mt-top'>
      <div className='col-xl-3 col-6'>
      <div className='row'>
        <div className='col-4'>
        <img width="50" height="52" src="https://powerpackelements.com/wp-content/uploads/2018/01/travel-i3.png"  alt="" loading="lazy" />
        </div>
        <div className='col-4'>
        <p>345</p>
        <p>Tours</p>
        </div>
      </div>
      </div>
      <div className='col-xl-3 col-6'>
      <div className='row'>
        <div className='col-4'>
        <img width="50" height="52" src="https://powerpackelements.com/wp-content/uploads/2018/01/travel-i4.png" alt="" loading="lazy" />
        </div>
        <div className='col-4'>
        <p>345</p>
        <p>Tours</p>
        </div>
      </div>
      </div>
      <div className='col-xl-3 col-6'>
      <div className='row'>
        <div className='col-4'>
        <img width="50" height="52" src="https://powerpackelements.com/wp-content/uploads/2018/01/travel-i2.png" alt="" loading="lazy" />
        </div>
        <div className='col-4'>
        <p>345</p>
        <p>Tours</p>
        </div>
      </div>
      </div>
      <div className='col-xl-3 col-6'>
      <div className='row'>
        <div className='col-4'>
        <img width="50" height="52" src="https://powerpackelements.com/wp-content/uploads/2018/01/travel-i1.png" alt="" loading="lazy" />
        </div>
        <div className='col-4'>
        <p>345</p>
        <p>Tours</p>
        </div>
      </div>
      </div>
    </div>
    <div className='mar'>
      <h1 className='text-center'> Special Offers</h1>
      <p className='text-center text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt</p>
    </div>
    <div className='mt-5'>
      <div className='row'>
        <div className='col-4'>
          <img  className='w-100 rounded' src='https://guidevoyage.org/wp-content/uploads/2011/02/la-tour-eiffel.jpg' height={350} />
        </div>
        <div className='col-4'>
          <img className='w-100 rounded' src='https://www.remax.eu/uploads/agent-1/Greece%20(Optimized)-5e580fa45d9f1.jpg' height={350} />
        </div>
        <div className='col-4'>
          <img className='w-100 rounded' src='https://www.state.gov/wp-content/uploads/2018/11/Spain-2109x1406.jpg'  height={350}/>
        </div>
        <div className='mt-5 col-8'>
          <img className='w-100 rounded' src='https://media.cntraveler.com/photos/59404f9157d01262a807f8c9/16:9/w_5087,h_2861,c_limit/GettyImages-175386102.jpg' height={350}/>
        </div>       
         <div className='mt-5 col-4'>
          <img className='w-100 rounded' src='https://media.architecturaldigest.com/photos/5903ad5c1732ef7d3c2b9e38/4:3/w_2663,h_1997,c_limit/5%20Seaside%20Towns%20in%20Italy.jpg' height={350}/>
        </div>
      </div>
    </div>
  </div>
   </>
  );
}

export default App;
