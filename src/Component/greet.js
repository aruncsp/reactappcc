function Greet(props) {
  const { firstName, lastName, data } = props;
  const { address } = data;

  return (
    <div>
      <h1>
        Hello {props.firstName} {props.lastName} from {address.street},{" "}
        {address.city}
      </h1>
    </div>
  );
}

export default Greet;
