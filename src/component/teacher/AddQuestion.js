//import { appBarClasses } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import "./Form.css";

function AddQuestion() {
  const [values, setValues] = useState({
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    isCorrect_1: false,
    isCorrect_2: false,
    isCorrect_3: false,
    isCorrect_4: false,
  });

  const handleValueChange = (event, names) => {
    setValues({ ...values, [names]: event.target.value });
  };
  const handleRadioChange = (event, names) => {
    setValues({
      ...values,
      'isCorrect_1': false,
      'isCorrect_2': false,
      'isCorrect_3': false,
      'isCorrect_4': false,
      [names]: event.target.checked,
    });
  };

  const addQuestion = (event) => {
    event.preventDefault();

    const {
      question,
      answer_1,
      answer_2,
      answer_3,
      answer_4,
      isCorrect_1,
      isCorrect_2,
      isCorrect_3,
      isCorrect_4,
    } = values;

    axios
      .post("https://ldn8-islington.herokuapp.com/questions", {
        lesson_id: 1,
        image: "",
        question: question,
        answers: [
          { answer: answer_1, is_correct: isCorrect_1 },
          { answer: answer_2, is_correct: isCorrect_2 },
          { answer: answer_3, is_correct: isCorrect_3 },
          { answer: answer_4, is_correct: isCorrect_4 },
        ],
      })
      .then((res) => (window.location = "/teacher"));
  };

  const handleChange = (e) => {
    setValues({ values: e.target.values });
  };

  return (
    <div>
      <form onSubmit={addQuestion}>
        <select onChange={handleChange}>
          <option value="lesson-one">Lesson One</option>
          <option value="lesson-two">Lesson Two</option>
          <option value="lesson-three">Lesson Three</option>
          <option value="lesson-four">Lesson Four</option>
          <option value="lesson-five">Lesson Five</option>
        </select>
        <input
          placeholder="Question"
          type="text"
          value={values.question}
          onChange={(event) => handleValueChange(event, "question")}
          required
        />
        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_1}
            onChange={(event) => handleRadioChange(event, "isCorrect_1")}
          />
          <input
            placeholder="Option One"
            type="text"
            value={values.answer_1}
            onChange={(event) => handleValueChange(event, "answer_1")}
          />
        </div>
        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_2}
            onChange={(event) => handleRadioChange(event, "isCorrect_2")}
          />
          <input
            placeholder="Option Two"
            type="text"
            value={values.answer_2}
            onChange={(event) => handleValueChange(event, "answer_2")}
          />
        </div>
        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_3}
            onChange={(event) => handleRadioChange(event, "isCorrect_3")}
          />
          <input
            placeholder="Option Three"
            type="text"
            value={values.answer_3}
            onChange={(event) => handleValueChange(event, "answer_3")}
          />
        </div>

        <div className="answer-input" style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={values.isCorrect_4}
            onChange={(event) => handleRadioChange(event, "isCorrect_4")}
          />
          <input
            placeholder="Option Four"
            type="text"
            value={values.answer_4}
            onChange={(event) => handleValueChange(event, "answer_4")}
          />
        </div>

        <input
          onClick={addQuestion}
          className="submit-question"
          type="submit"
          value="Add question"
        />
      </form>
    </div>
  );
}

export default AddQuestion;
