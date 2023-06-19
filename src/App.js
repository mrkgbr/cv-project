import Form from "./components/Form/Form";
import uniqid from "uniqid";
import View from "./components/View/View";
import { useState } from "react";
import { useEffect } from "react";

const NewApp = () => {
  const [data, setData] = useState({
    general: { firstName: "", lastName: "", email: "" },
    education: {
      id: uniqid(),
      schoolName: "",
      studyTitle: "",
      date: "",
    },
    educations: [],
    experience: {
      id: uniqid(),
      company: "",
      position: "",
      task: "",
      start: "",
      end: "",
    },
    experiences: [],
  });

  const [main, setMain] = useState(true);
  const [button, setButton] = useState("Submit");
  const [edu, setEdu] = useState(false);
  const [exp, setExp] = useState(false);

  const onSubmit = () => {
    if (button === "Submit") {
      setButton("Edit");
    } else {
      setButton("Submit");
    }
    setMain(!main);
  };

  const onAddEducation = () => {
    if (
      data.education.schoolName &&
      data.education.studyTitle &&
      data.education.date
    ) {
      const newArray = data.educations.concat(data.education);
      const newState = {
        ...data,
        educations: newArray,
      };
      setData(newState);
      setEdu(!edu);
    } else {
      alert("Please fill all the inputs to add a new section.");
    }
  };

  const onAddExperience = () => {
    if (
      data.experience.company &&
      data.experience.position &&
      data.experience.task &&
      data.experience.start &&
      data.experience.end
    ) {
      const newArray = data.experiences.concat(data.experience);
      const newState = {
        ...data,
        experiences: newArray,
      };
      setData(newState);
      setExp(!exp);
    } else {
      alert("Please fill all the inputs to add a new section.");
    }
  };

  const handleInputChange = (e) => {
    const group = e.target.getAttribute("data-group"); // === general
    const name = e.target.getAttribute("data-name");
    let newObj = {
      ...data[group],
      [name]: e.target.value,
    };
    let secondObj = {
      ...data,
      [group]: newObj,
    };
    console.log(secondObj);
    setData(secondObj);
  };

  const handleDisplayedListChange = (e) => {
    const id = e.target.getAttribute("data-id");
    const group = e.target.getAttribute("data-group");
    const name = e.target.getAttribute("data-name");
    const newState = data[group].map((obj) => {
      console.log(obj);
      if (obj.id === id) {
        return { ...obj, [name]: e.target.value };
      }
      return obj;
    });

    const newObj = {
      ...data,
      [group]: newState,
    };

    setData(newObj);
  };

  const handleRemove = (id, group) => {
    const newState = data[group].filter((item) => item.id !== id);
    setData({
      ...data,
      [group]: newState,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      education: {
        id: uniqid(),
        schoolName: "",
        studyTitle: "",
        date: "",
      },
    });
  }, [edu]);

  useEffect(() => {
    setData({
      ...data,
      experience: {
        id: uniqid(),
        company: "",
        position: "",
        task: "",
        start: "",
        end: "",
      },
    });
  }, [exp]);

  if (main)
    return (
      <div className="App">
        <Form
          data={data}
          onAddEducation={onAddEducation}
          onAddExperience={onAddExperience}
          handleInputChange={handleInputChange}
          handleDisplayedListChange={handleDisplayedListChange}
          handleRemove={handleRemove}
          onSubmit={onSubmit}
          buttonText={button}
        />
      </div>
    );
  return (
    <div>
      <View
        handleClick={onSubmit}
        buttonText={button}
        general={data.general}
        educations={data.educations}
        experiences={data.experiences}
      />
    </div>
  );
};

// Class based solution
//
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       main: true,
//       button: "Submit",
//       general: { firstName: "", lastName: "", email: "" },
//       education: { id: uniqid(), schoolName: "", studyTitle: "", date: "" },
//       educations: [],
//       experience: {
//         id: uniqid(),
//         company: "",
//         position: "",
//         task: "",
//         start: "",
//         end: "",
//       },
//       experiences: [],
//     };
//   }

//   onSubmit = () => {
//     let button;
//     if (this.state.button === "Submit") {
//       button = "Edit";
//     } else {
//       button = "Submit";
//     }
//     this.setState({
//       main: !this.state.main,
//       button: button,
//     });
//   };

//   onAddEducation = () => {
//     if (
//       this.state.education.schoolName &&
//       this.state.education.studyTitle &&
//       this.state.education.date
//     ) {
//       this.setState({
//         educations: this.state.educations.concat(this.state.education),
//         education: {
//           id: uniqid(),
//           schoolName: "",
//           studyTitle: "",
//           date: "",
//         },
//       });
//     } else {
//       alert("Please fill all the inputs to add a new section.");
//     }
//   };

//   // Work experience form functions
//   onAddExperience = () => {
//     if (
//       this.state.experience.company &&
//       this.state.experience.position &&
//       this.state.experience.task &&
//       this.state.experience.start &&
//       this.state.experience.end
//     ) {
//       this.setState({
//         experiences: this.state.experiences.concat(this.state.experience),
//         experience: {
//           id: uniqid(),
//           company: "",
//           position: "",
//           task: "",
//           start: "",
//           end: "",
//         },
//       });
//     } else {
//       alert("Please fill all the inputs to add a new section.");
//     }
//   };

//   // Form input change handling
//   handleInputChange = (e) => {
//     const group = e.target.getAttribute("data-group");
//     const name = e.target.getAttribute("data-name");
//     this.setState({
//       [group]: {
//         ...this.state[group],
//         [name]: e.target.value,
//       },
//     });
//   };

//   // Display input change handling
//   handleDisplayedListChange = (e) => {
//     const id = e.target.getAttribute("data-id");
//     const group = e.target.getAttribute("data-group");
//     const name = e.target.getAttribute("data-name");
//     const newState = this.state[group].map((obj) => {
//       if (obj.id === id) {
//         return { ...obj, [name]: e.target.value };
//       }
//       return obj;
//     });
//     this.setState({
//       [group]: newState,
//     });
//   };

//   handleRemove = (id, group) => {
//     const newState = this.state[group].filter((item) => item.id !== id);
//     this.setState({
//       [group]: newState,
//     });
//   };

//   // Render page
//   render() {
//     if (this.state.main)
//       return (
//         <div className="App">
//           <Form
//             general={this.state.general}
//             education={this.state.education}
//             educations={this.state.educations}
//             experience={this.state.experience}
//             experiences={this.state.experiences}
//             onAddEducation={this.onAddEducation}
//             onAddExperience={this.onAddExperience}
//             handleInputChange={this.handleInputChange}
//             handleDisplayedListChange={this.handleDisplayedListChange}
//             handleRemove={this.handleRemove}
//             onSubmit={this.onSubmit}
//             buttonText={this.state.button}
//           />
//           {/* <button onClick={this.onSubmit}>{this.state.button}</button> */}
//         </div>
//       );
//     return (
//       <div>
//         <View
//           handleClick={this.onSubmit}
//           buttonText={this.state.button}
//           general={this.state.general}
//           educations={this.state.educations}
//           experiences={this.state.experiences}
//         />
//       </div>
//     );
//   }
// }

export default NewApp;
