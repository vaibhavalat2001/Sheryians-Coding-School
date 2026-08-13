import React from 'react';

const Home = ({user}) => {
    console.log("home rendering...")
  return (
    <div>
      Home
    </div>
  );
}

export default React.memo(Home);  

// it's give callback to help to control rendring with perticular individual value like here id
// export default React.memo(Home, (preProps, nextProps) => {
//   return preProps.user.id === nextProps.user.id
// });
