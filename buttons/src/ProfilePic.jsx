function ProfilePic() {
  const url = "./src/assets/react.svg";
  //   const handleclick = (e) => console.log("Hello");
  const handleclick = (e) => (e.target.style.display = "none"); // hides after click
  return <img onClick={(e) =>handleclick(e)} src={url} alt="react svg"></img>;
}

export default ProfilePic;
