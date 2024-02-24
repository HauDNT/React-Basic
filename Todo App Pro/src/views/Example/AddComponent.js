import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Nếu không truyền gì thì hiện alert và kết thúc việc submit tại đây:
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params")
            return;
        }

        // Nếu có truyền đủ thông tin thì chương trình sẽ chạy đến đây và gán thông tin mới vào:
        console.log("Check data input: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })

        // Sau khi thêm vào job thì làm trống ô title và salary:
        this.setState({
            title: '',
            salary: ''
        })
    };
    
    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label>
                <br />
                <input
                type="text"
                value={this.state.title}
                onChange={(event) => this.handleChangeTitle(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label>
                <br />
                <input
                type="text"
                value={this.state.salary}
                onChange={(event) => this.handleChangeSalary(event)}
                />
                
                <br />
                <br />
                <input
                type="button"
                value="Submit"
                onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}

export default AddComponent;