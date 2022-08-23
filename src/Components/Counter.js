function Counter(props) {
  const { count, add, subtract } = props;

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Add</button>
    </div>
  );
}

export default Counter