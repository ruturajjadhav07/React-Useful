function Trial() {
  

  let count =0
  const event = (name) => {
    if (count < 3){
        count++
        console.log(`${name} clicke me`)
    }else{
        console.log(`stop clickinf me ${name}`)
    }
  }
  return (

    <button className="btn" onClick={() => event("ruturaj")}>
      Click Me
    </button>
  );
}

export default Trial;
