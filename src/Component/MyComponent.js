function MyComponent() {
  const myStyle = {
    backgroundColor: "teal",
    color: "white",
    borderColor: "orange",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    fontWeight: "400px",
  };

  return (
    <div>
      <h1>Demo on Inline Styles</h1>
      <button style={myStyle}>Submit</button>
    </div>
  );
}

export default MyComponent;
