import React from "react";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import Profile from "./component/profile/Profile";
import LessonDetail from "./component/lessons/LessonDetail";
import Teacher from "./component/teacher/Teacher";
import EditLesson from "./component/teacher/EditLesson";
import Post from "./component/home/Post";
import { Route, Routes } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import "./App.css";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const App = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/teacher"
          element={<ProtectedRoute component={Teacher} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/questions/lessons/:id" element={<Quiz />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
        {/* <Route path="/teacher" element={<Teacher />} /> */}
        <Route path="/edit-lesson/:id" element={<EditLesson />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
