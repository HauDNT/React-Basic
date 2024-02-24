import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
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

  addNewJob = (job) => {
      console.log("Check job from parent: ", job)
      // let currentJobs = this.state.arrJobs;
      // currentJobs.push(job);

      this.setState({
          // Đẩy thêm 1 job mới vào arrJobs:
          arrJobs: [...this.state.arrJobs, job]
          // arrJobs: currentJobs
      })
  }

  deleteAJob = (job) => {
      // Tạo một mảng currentJobs copy toàn bộ job hiện có trong arrJobs:
      let currentJobs = this.state.arrJobs;
      // Lọc lại currentJobs, chỉ lấy những job có id khác với id của job muốn xóa:
      currentJobs = currentJobs.filter(item => item.id !== job.id)
      // Cập nhật lại arrJobs từ currentJobs:
      this.setState({
          arrJobs: currentJobs
      })
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('Run didUpdate: ', '\nprev state: ', prevState, ' \ncurrent state: ', this.state);
  }

  componentDidMount() {
      console.log('Did Mount!');
  }

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent 
            arrJobs={this.state.arrJobs}
            deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

// export default: trả ra 1 thành phần trong class.
// export: trả ra toàn bộ thành phần trong class nếu class đó định nghĩa nhiều thành phần.
export default MyComponent;
