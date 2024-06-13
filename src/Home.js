import React, { useState } from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="home-card">
      <h2 className="home-card-title">Home</h2>
      <div className="home-card-counter">
        <button className="home-card-button" onClick={increment}>
          Increment
        </button>
        <p className="home-card-count">Count: {count}</p>
        <button className="home-card-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};


export default Home;


// const Home = () => {
//     return ( 
//         <div className="home">
//             <h1>Home</h1> <br/> <hr/> <br/>
//             {/* <Example /> */}
//             {/* <Example name="ali" age="20" city="lahore" country="Pakistan"/> */}
//             <Example2 name="ali" age="20" city="lahore" country="Pakistan"/>
//             <Example2 name="usman" age="20" city="lahore" country="Pakistan"/>
//             <Example2 name="zain" age="20" city="lahore" country="Pakistan"/>
//             <Example2 name="zafar" age="20" city="lahore" country="Pakistan"/>
//             <Example2 name="waleed" age="20" city="lahore" country="Pakistan"/>

//         </div>
//      );
// }
 
// const Example2 = (props) => {
//     return ( 
//         <div>
//             <h3>Name:{props.name}</h3> <br/>
//             <p>Age:{props.age}</p><br/>
//             <p>City:{props.city}</p><br/> 
//             <p>Country:{props.country}</p><hr/>
//         </div>
//      );
// }
 
// // const Example = () => {
// //     return ( 
// //         <div>
// //             {/* <div>
// //                 <h3>Name:ali</h3>
// //                 <p>Age:20</p><hr/>
// //                 <p>City:lahore</p><hr/> 
// //                 <p>Country:Pakistan</p><hr/>
// //             </div>
// //             <div>
// //                 <h3>Name:usman</h3>
// //                 <p>Age:20</p><hr/>
// //                 <p>City:lahore</p><hr/> 
// //                 <p>Country:Pakistan</p> <hr/> 
// //             </div>
// //             <div>
// //                 <h3>Name:usman</h3>
// //                 <p>Age:20</p><hr/>
// //                 <p>City:lahore</p><hr/> 
// //                 <p>Country:Pakistan</p> <hr/> 
// //             </div> */}
            
// //         </div>
// //      )
// // }
// export default Home;