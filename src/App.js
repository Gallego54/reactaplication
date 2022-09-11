import React, { Fragment } from "react";
import CountButton from "./components/CountButton";
import Form from "./components/Form";
import List from "./components/List";


function App() {
  return (
    <Fragment>
      <CountButton/>
      <List apiURL={'http://localhost:1000/api/data'}  />
      <Form apiURL={'http://localhost:1000/api/data'}  />
    </Fragment>

  );
}

export default App;
