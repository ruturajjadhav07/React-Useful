function Button() {
  const button = (e) => (e.target.textContent = "Ouch..!😶"); // changing text of the button
  return (
    <button className="button" onClick={(e) => button(e)}>
      Click ME 😗
    </button>
  );
}

export default Button;
