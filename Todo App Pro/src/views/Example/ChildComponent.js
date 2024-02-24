import React from "react";
import './Demo.scss';

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
      this.props.deleteAJob(job)
  }

  render() {
    console.log("Check props: ", this.props);
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
      {/* Điều kiện */}
        {showJobs === false ? (
          /* Kết quả 1 */
          <div>
            <button 
                className="btn-show"
                onClick={() => this.handleShowHide()}>
                Show
            </button>
          </div>
        ) : (
          /* Kết quả 2 */
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button 
                  // inline CSS in React
                  style={{color: 'blue', fontWeight: 600}}
                  onClick={() => this.handleShowHide()}>
                  Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// export default: trả ra 1 thành phần trong class.
// export: trả ra toàn bộ thành phần trong class nếu class đó định nghĩa nhiều thành phần.
export default ChildComponent;
