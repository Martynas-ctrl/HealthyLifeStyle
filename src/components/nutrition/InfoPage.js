import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from 'mdbreact';
import ImageEgg from '../Images/2egg.jpg';
import ImgBread from '../Images/bread3.jpg';
import ImgFish from '../Images/fish3.jpg';
import '../css/user.css';

const Info = () => {

  return (
      <div class="bmd-layout-container bmd-drawer-f-l">
        <header class="bmd-layout-header">
          <div class="navbar navbar-light bg-faded">
            <button style={{border: "1px solid #ffffff"}} class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s1">
              <span class="sr-only">Toggle drawer</span>
              <i style={{color: "#ffffff"}} class="material-icons">menu</i>
            </button>
              <label class="nav navbar-nav" style={{color: "#ffffff", textAlign: "center"}}>NUTRITION FACTS</label>
          </div>
        </header>
        <sidebar id="dw-s1" class="bmd-layout-drawer bg-faded">
          <h4 style={{color: "#ffffff", textAlign: "center"}} class="navbar-brand">WHERE TO ?</h4>
          <a id='buttonMenu2' href="/home"><i style={{color: "#ffffff"}} class="fas fa-home"></i>HOME</a>
          <a id='buttonMenu2' href="/workout"><i style={{color: "#ffffff"}} class="fas fa-dumbbell"></i>TRAINING</a>
        </sidebar>
        <main class="bmd-layout-content">
          <div class="container">
            <MDBCardGroup>
              <MDBCard id="mdbCard">
                <MDBCardImage id="mdbimg"src={ImageEgg} alt="MDBCard image cap" top hover
                  overlay="white-slight" />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">Protein</MDBCardTitle>
                  <MDBCardText>
                    Protein is essential for growth and on-going repair, nitrogen balance, enzymes that catalyse innumerable chemical reactions, cell signalling and signal transaction.
                  </MDBCardText>
                  <MDBBtn color="primary" size="md">
                    <a style={{color: "#00BFA6"}} href="https://en.wikipedia.org/wiki/Protein" target="_blank">read more</a>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
              <MDBCard id="mdbCard">
                <MDBCardImage src={ImgBread} alt="MDBCard image cap" top hover
                  overlay="white-slight" />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">Carbohydrates</MDBCardTitle>
                  <MDBCardText>
                    carbohydrate is not essential but it is the bodies preferred energy source, especially during stress and exercise. When glycogen levels get low in the body, cortisol levels rise.
                  </MDBCardText>
                  <MDBBtn color="primary" size="md">
                    <a style={{color: "#00BFA6"}} href="https://en.wikipedia.org/wiki/Carbohydrate" target="_blank">read more</a>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
              <MDBCard id="mdbCard">
                <MDBCardImage src={ImgFish} alt="MDBCard image cap" top hover
                  overlay="white-slight" />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">Fat</MDBCardTitle>
                  <MDBCardText>
                    Fats is needed for hormone production, cholesterol and cell membrane formation, protect organs, supply vitamins (A,D,E,K) and gives the main energy source for the body at rest.
                  </MDBCardText>
                  <MDBBtn color="primary" size="md">
                    <a style={{color: "#00BFA6"}} href="https://en.wikipedia.org/wiki/Fat" target="_blank">read more</a>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCardGroup>
          </div>        
        </main>
      </div>
    );
}

export default Info;