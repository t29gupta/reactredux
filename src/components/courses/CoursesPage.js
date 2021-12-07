import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

//actions
import { createCourse } from "../../redux/actions/courceActions";

class CoursesPage extends React.Component {
  state = {
    course: {
      id: 0,
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.createCourse({
      ...this.state.course,
      id: this.props.courses.length + 1,
    });

    const course = { ...this.state.course, title: "" };
    this.setState({ course: course });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />

        {this.props.courses.map((c) => (
          <div key={c.id}>{c.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.prototypes = {
  courses: propTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return { courses: state.courses };
};

const mapDispatchToProps = {
  createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
