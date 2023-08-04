import React from 'react';
import '../styles/ExplorePage.css'
import { Link } from 'react-router-dom';
const ExplorePage = () => {
  return (
    <div className="app-container">
      <div className="explore-page">
        <div className="explore-header">Explore the world of Batman</div>
        <div className="explore-content">
          <p>
            Welcome to the fascinating world of Batman, the Dark Knight! Batman is a fictional superhero appearing in American comic books published by DC Comics. He is a vigilante who fights crime and strikes fear into the hearts of criminals in Gotham City.
          </p>
          <p>
            With his brilliant detective skills, physical prowess, and a wide array of gadgets, Batman has become one of the most iconic and beloved superheroes of all time. His alter ego, Bruce Wayne, is a billionaire philanthropist, which allows him to fund and create the advanced technology he uses in his crime-fighting endeavors.
          </p>
          <p>
            Batman's rogues' gallery includes infamous villains such as The Joker, Two-Face, The Riddler, Catwoman, and many others. The ongoing battle between Batman and these villains keeps the citizens of Gotham City on the edge of their seats.
          </p>
          <p>
            The Batman's EndGame is an initiative to involve citizens like you in the fight against crime. By reporting crimes and suspicious activities, you can aid Batman in his mission to keep Gotham City safe and secure.
          </p>
          <div className="batman-weapons">
            <h2>Batman Weapons</h2>
            <p>
              Batman's arsenal of gadgets and weapons is extensive and crucial in his crime-fighting efforts. From the iconic Batarangs to the high-tech Batmobile, Batman always has the right tools for the job.
            </p>
            <p>
              Curious to see the full list of Batman's weapons? Click the button below to view them!
            </p>
            <div className="explore-buttons">
              <Link to="/ExploreWeapons"><button className="view-weapons-btn">View Weapons</button></Link>
            </div>
          </div>
        </div>
      <Link to="/Homepage"> <button className="back-to-home-btn">Back to Home</button></Link> 
      </div>
    </div>
  );
};

export default ExplorePage;
