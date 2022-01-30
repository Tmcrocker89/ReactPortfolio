import React from 'react';

export default function Home() {
  return (
    <div className="m-5 bg-secondary rounded">
      <div className="container min-vh-100">
        <div className="row min-vh-100"> 
          <aside id="asideImg" className="col-sm-4">

          </aside>
          <p className="col-sm-8 text-light">
          <h1 className="d-flex justify-content-center text-light">About Me</h1>
            My name is Travis Crocker, I'm a full stack developer curently working for Michelin. I recently transitioned from a Automation Tech to a developer roll.
            I'll be completeing my bootcamp Febuary 16th. I practice Javascript, HTML, CSS, Bootstrap, SQL, PHP, some Python and some C#.
          </p>
        </div>
      </div>
    </div>
  );
}
