import { React } from 'react'
import { Button } from 'react-bootstrap';
import MondayWorkout from './Monday/MondayWorkout';
import TuesdayWorkout from './Tuesday/TuesdayWorkout';
import WednesdayWorkout from './Wednesday/WednesdayWorkout';
import ThursdayWorkout from './Thursday/ThursdayWorkout';
import FridayWorkout from './Friday/FridayWorkout';
import SaturdayWorkout from './Saturday/SaturdayWorkout';
import SundayWorkout from './Sunday/SundayWorkout';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import img from '../Images/gym.svg';
import image from '../Images/fitnessTogether.svg';
import LogoImg from '../Images/apple.svg';
import './CSS/week.css'

function Workouts () {

  return (
      <div>
        <div class="bmd-layout-container bmd-drawer-f-l">
          <header id="nav" class="bmd-layout-header">
            <div class="navbar navbar-light bg-faded">
              <button class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s1">
                <span class="sr-only">Toggle drawer</span>
                <i class="material-icons">menu</i>
              </button>
              <ul id='containerLogo' class="nav navbar-nav">
                <li class="nav-item"><img className='logo' src={LogoImg}></img></li>
              </ul>
            </div>
          </header>
          <div id="dw-s1" class="bmd-layout-drawer bg-faded">
            <h4 style={{color: "#ffffff", textAlign: "center"}} class="navbar-brand">WHERE TO ?</h4>
            <a id='buttonMenu2' href="/home"><i style={{color: "#ffffff"}} class="fas fa-home"></i>HOME</a>
            <a id='buttonMenu2' href="/workout"><i style={{color: "#ffffff"}} class="fas fa-dumbbell"></i>TRAINING</a>
          </div>
          <main class="bmd-layout-content" >
            <div class="container" style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed', backgroundPosition: '50% 130%', backgroundRepeat: "no-repeat"}}>
              <h1 style={{color: "#0000008a"}}>Workout Plan</h1>
              <div>

                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Monday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <MondayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
          
                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Tuesday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <TuesdayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Wednesday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <WednesdayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Thursday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <ThursdayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Friday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <FridayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Saturday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <SaturdayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography id='hover'><i class="fas fa-angle-down"></i> Sunday</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundImage: `url(${img})` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <Typography>
                      <SundayWorkout />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </div>
            </div>
          </main>
        </div>
      </div>
    )
}

export default Workouts;