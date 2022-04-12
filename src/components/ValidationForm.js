import React from "react";
import './ValidationForm.css';
import axios from 'axios';

const initialState = {
  Teamname: "",
  TeamEmailAddress: "",
  LeadName:"",
  LeadEmailAddress:"",
  Member1:"",
  member1Email:"",
  Member2:"",
  member2Email:"",
  Member3:"",
  member3Email:"",
  Member4:"",
  member4Email:"",
  Member5:"",
  member5Email:"",
  Member6:"",
  member6Email:"",
  Member7:"",
  member7Email:"",
  Member8:"",
  member8Email:"",
  Member9:"",
  member9Email:"",

  // password: "",
  nameError: "",
  emailError: "",
  //passwordError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
    [event.target.name]: isCheckbox
    ? event.target.checked
    : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.LeadName) {
      nameError = "name cannot be blank";
    }

    if (!this.state.LeadEmailAddress.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form

      const info={
        teamName:this.state.Teamname,
        teamEmailAddress:this.state.TeamEmailAddress,
        leadName:this.state.LeadName,
        leadEmailAddress:this.state.LeadEmailAddress,
        member1:this.state.Member1,
        member1Email:this.state.member1Email,
        member2:this.state.Member2,
        member2Email:this.state.member2Email,
        member3:this.state.Member3,
        member3Email:this.state.member3Email,
        member4:this.state.Member4,
        member4Email:this.state.member4Email,
        member5:this.state.Member5,
        member5Email:this.state.member5Email,
        member6:this.state.Member6,
        member6Email:this.state.member6Email,
        member7:this.state.Member7,
        member7Email:this.state.member7Email,
        member8:this.state.Member8,
        member8Email:this.state.member8Email,
        member9:this.state.Member9,
        member9Email:this.state.member9Email
      };

      axios.post(`http://localhost:8080/form/add-form-info`,info)
          .then(response => {
            if(response.data!=null){
              console.log("Okkkk sent");
              console.log(response.data);
            }
          });
      this.setState(initialState);
    }
    // const info={
    //   teamName:this.state.Teamname,
    //   teamEmailAddress:this.state.TeamEmailAddress,
    //   leadName:this.state.LeadName,
    //   leadEmailAddress:this.state.LeadEmailAddress,
    //   member1:this.state.Member1,
    //   member1Email:this.state.member1Email,
    //   member2:this.state.Member2,
    //   member2Email:this.state.member2Email,
    //   member3:this.state.Member3,
    //   member3Email:this.state.member3Email,
    //   member4:this.state.Member4,
    //   member4Email:this.state.member4Email,
    //   member5:this.state.Member5,
    //   member5Email:this.state.member5Email,
    //   member6:this.state.Member6,
    //   member6Email:this.state.member6Email,
    //   member7:this.state.Member7,
    //   member7Email:this.state.member7Email,
    //   member8:this.state.Member8,
    //   member8Email:this.state.member8Email,
    //   member9:this.state.Member9,
    //   member9Email:this.state.member9Email
    // };

    // axios.post(`http://localhost:8080/form/add-form-info`,info)
    //     .then(response => {
    //       if(response.data!=null){
    //         console.log("Okkkk sent");
    //         console.log(response.data);
    //       }
    //     });
  };

  render() {
    return (
        <div className="Form-header">
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Team name:    </label>
          <input
            name="Teamname"
            placeholder="Team name"
            value={this.state.Teamname}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Team Email address:    </label>
          <input
            name="TeamEmailAddress"
            placeholder="Team Email Address"
            value={this.state.TeamEmailAddress}
            onChange={this.handleChange}
          />
        </div><br/>
        <div>
          <label>Technical Lead Details</label>
        </div>
        <div>
          <label>Lead Name:    </label>
          <input
              name="LeadName"
              placeholder="Lead name"
              value={this.state.LeadName}
              onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <label>Lead Email address:    </label>
          <input
              name="LeadEmailAddress"
              placeholder="Lead Email Address"
              value={this.state.LeadEmailAddress}
              onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div><br/>
        <div>
          <label>Team Member Details:   </label>
        </div>
        <div>
          <input
              name="Member1"
              placeholder="Member1"
              value={this.state.Member1}
              onChange={this.handleChange}
          />
          <input
              name="member1Email"
              placeholder="member1 email"
              value={this.state.member1Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member2"
              placeholder="Member2"
              value={this.state.Member2}
              onChange={this.handleChange}
          />
          <input
              name="member2Email"
              placeholder="member2 email"
              value={this.state.member2Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member3"
              placeholder="Member3"
              value={this.state.Member3}
              onChange={this.handleChange}
          />
          <input
              name="member3Email"
              placeholder="member3 email"
              value={this.state.member3Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member4"
              placeholder="Member4"
              value={this.state.Member4}
              onChange={this.handleChange}
          />
          <input
              name="member4Email"
              placeholder="member4 email"
              value={this.state.member4Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member5"
              placeholder="Member5"
              value={this.state.Member5}
              onChange={this.handleChange}
          />
          <input
              name="member5Email"
              placeholder="member5 email"
              value={this.state.member5Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member6"
              placeholder="Member6"
              value={this.state.Member6}
              onChange={this.handleChange}
          />
          <input
              name="member6Email"
              placeholder="member6 email"
              value={this.state.member6Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member7"
              placeholder="Member7"
              value={this.state.Member7}
              onChange={this.handleChange}
          />
          <input
              name="member7Email"
              placeholder="member7 email"
              value={this.state.member7Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member8"
              placeholder="Member8"
              value={this.state.Member8}
              onChange={this.handleChange}
          />
          <input
              name="member8Email"
              placeholder="member8 email"
              value={this.state.member8Email}
              onChange={this.handleChange}
          />
          <br/>
          <input
              name="Member9"
              placeholder="Member9"
              value={this.state.Member9}
              onChange={this.handleChange}
          />
          <input
              name="member9Email"
              placeholder="member9 email"
              value={this.state.member9Email}
              onChange={this.handleChange}
          />
        </div>

        <button type="submit">submit</button>
      </form>
        </div>
    );
  }
}
