import React from 'react';
import mainImg from '../../assets/landingMain.jpg';
import { Translator } from '../../components/index'
export const SectionOne = () => {
  return (
      <div>
    <div className="sectionOneContainer">
      <div className="sectionOneTextContainer">
        <h1 className="title">{Translator('Üdvözlünk a Sudoku világában!','Welcome to the world of Sudoku!')}</h1>
        <div className="underTitle"> 
            {Translator('Oldd meg napi kihívásaink 3 különböző nehézségi szinten, fejleszd a játékkészséged napról napra és élesítsd az eszed!',`Solve our daily challenges in 3 different difficulties, improve
          your game on a day-to-day basis and keep your mind sharp in the process!`)}
          
        </div>
        
      </div>
      <div className="mainImgContainer">
        <img
          height="450px"
          src={mainImg}
          alt="an elderly woman solving a sudoku puzzle"
        ></img>
      </div>
      
    </div>
    <div className="underText">
      {Translator('Regisztrálj ingyenesen a beta tesztelés alatt, az első 100 regisztráló ingyenes hozzáférést kap minden jövőbeli tartalmunkhoz.','Sign up your free account today our beta,  and enjoy your benefits as a member later!( The first 100 to sign up get free subscription to all of our upcoming content for a year!)')}
        </div>
        <button className="signUpButton">Sign up</button>
        </div>
  );
};
