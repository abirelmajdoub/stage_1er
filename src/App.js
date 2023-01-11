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
  </div>
   </>
  );
}

export default App;
