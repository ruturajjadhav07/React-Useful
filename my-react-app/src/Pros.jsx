import PropTypes from "prop-types"

function Pros(props){
  return (
    <div className="student">
      <p>name : {props.name}</p>
      <p>age : {props.age},</p>
      <p>student : {props.isStudent ? "Yes":"No"}</p>
    </div>
  )
}

Pros.PropTypes = {
  name:PropTypes.string,
  age: PropTypes.number,
  isStudent:PropTypes.bool
}

export default Pros;