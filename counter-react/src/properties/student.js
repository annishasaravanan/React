
// Props (short for properties) are read-only inputs passed from a parent component to a child component.

// PropTypes is a type-checking feature in React. It ensures that the props passed to a component are of the correct type.React doesn’t enforce prop types at runtime by default, so PropTypes is used as a development-time tool to catch bugs early.

//Default Props are used to assign default values to props if the parent component doesn’t provide them.


import proptypes from 'prop-types';

function Student(props)//child component 
{
        return <>
         
         <p>Name : {props.name}</p>
         <p>Age: {props.age}</p>
         <p>Student: {props.isstudent ? "yes" : "No"}</p>
        
        </>
}

Student.propTypes ={
        name: proptypes.string,
        age: proptypes.number,
        isstudent:proptypes.bool,
}


Student.defaultProps ={

        name: "Guest",
        age: 18,
        isstudent: false,
}

export default Student;