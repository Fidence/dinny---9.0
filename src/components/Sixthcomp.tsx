import React from "react";
import styled from "styled-components";
import Mask5 from "../components/images/Mask Group (5).png";
import Dinnygren from "../components/images/dinnygreen.jpg";
import Group62 from "../components/images/Group 62.png";

const Sixthcomp = () => {
  return (
    <Sixth>
      <div className="help">
        <div className="help_txt">
          <h1>Find Out We Help Students </h1>
          <p>
            We have built hospitals, arranged doctor appointments have the
            diagnose and treat <br /> yourem ipsu r aol ad meniam, quis nostrud
            exercitation.
          </p>
        </div>

        <div className="help_bg">
          <div className="blurr"></div>
          <div className="top">
            <img src={Mask5} alt="" />
          </div>
          <div className="side">
            <img src={Mask5} alt="" />
          </div>

          <img src={Group62} className="image" alt="" />
        </div>
      </div>
    </Sixth>
  );
};

export default Sixthcomp;

const Sixth = styled.div`
  .help {
    margin-top: 2%;
    /* width: 100%; */
    &_txt {
      text-align: center;
      h1 {
        font-size: 40px;
        color: #038c33;
        padding: 2%;
      }
    }

    .help_bg {
      margin-top: 6%;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 80%;
      height: 30rem;
      background-image: url(${Dinnygren});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;

      .blurr {
        width: 100%;
        height: 100%;
        background: rgba(18, 152, 18, 0.35);
      }

      .image {
        width: 10.3rem;
        height: 10.3rem;
        position: absolute;
        top: 34%;
        left: 40%;
        display: block;
        margin: auto auto;
      }
    }
    @media (width: 1024px) {
      .help_bg {
        width: 50%;
        height: 20rem;
      }
    }

    .top {
      width: 148.49px;
      height: 148.49px;
      position: absolute;
      bottom: 90%;
      right: -3%;
      z-index: -1;
    }

    .side {
      width: 148.49px;
      height: 148.49px;
      position: absolute;
      top: 25%;
      left: -16%;
      z-index: -1;
    }
  }
`;
