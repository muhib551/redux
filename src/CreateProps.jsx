import React from "react";

const CreateProps = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>User Component</h2>
      <h4>Name: {data.name}</h4>
      <h4>Age: {data.age}</h4>
    </div>
  );
};

export default CreateProps;
