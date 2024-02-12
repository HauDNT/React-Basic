import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  // Khi khai báo hàm trong class thì không cần ghi thêm từ khóa 'function' phía trước!

  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      {
        id: "job_1",
        title: "Developer",
        salary: `500`,
      },
      {
        id: "job_2",
        title: "Tester",
        salary: `300`,
      },
      {
        id: "job_3",
        title: "Fresher",
        salary: `200`,
      },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Check data input: ", this.state);
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>

        <ChildComponent
          name={this.state.firstName}
          age={"21"}
          address={"Rach Gia"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

// export default: trả ra 1 thành phần trong class.
// export: trả ra toàn bộ thành phần trong class nếu class đó định nghĩa nhiều thành phần.
export default MyComponent;
