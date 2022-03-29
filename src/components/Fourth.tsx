import React from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import Dinny6 from "../components/images/dinny6_n.png";
import Mask4 from "../components/images/Mask Group (4).png";

const Fourth = () => {
  return (
    <Forth>
      <div className="find">
        <div className="find_more">
          <h1>Find Out More About Our Learning Experience</h1>
          <p>
            We have built hospitals, arranged doctor appointments <br /> have
            the diagnose and treat yourem ipsu r aol ad <br /> meniam, quis
            nostrud exercitation.
          </p>
          <ul>
            <li>
              <FaCheck className="check" />
              Culture in diversity
            </li>
            <li>
              <FaCheck className="check" />
              We have built hospitals, arranged doctor.
            </li>
            <li>
              <FaCheck className="check" />
              We have built hospitals, arranged doctor.
            </li>
          </ul>

          <button>Learn More</button>
        </div>

        <div className="find_out">
          <div className="blure"></div>
          <img src={Dinny6} className="img" alt="" />
          <div className="img1">
            {" "}
            <img src={Mask4} width="229.14" height="229.14" alt="" />
          </div>
        </div>
      </div>
    </Forth>
  );
};

export default Fourth;

const Forth = styled.div`
  .find {
    display: flex;
    /* width: 100%; */
    height: 37.6rem;
    margin-top: 7%;

    background-color: #ffffff;

    &_more {
      flex: 1;
      margin-top: 2%;
      margin-left: 8%;
      h1 {
        font-size: 2.7rem;
        color: #038c33;
        font-weight: 500px;
        line-height: 3.5rem;
        width: 75%;
      }
      @media (max-width: 1024px) {
        h1 {
          font-size: 2.3rem;
          line-height: 3rem;
          width: 80%;
        }
      }

      p {
        padding-top: 3%;
        padding-bottom: 4%;
        color: #1f6036;
      }

      ul li {
        list-style: none;
        color: #6c757d;
        overflow: hidden;

        .check {
          background-color: #038c33;
          color: #ffffff;
          border-radius: 50%;
          padding: 0.5%;
          margin-right: 1%;
        }
      }

      button {
        display: inline-block;
        margin-right: 20px;
        background-color: #038c33;
        color: #ffffff;
        padding: 13.5px 40px;
        border: none;
        border-radius: 5px;
        margin-top: 30px;
      }
    }

    .find_out {
      flex: 1;
      justify-content: flex-end;
      position: relative;

      .blure {
        position: absolute;
        background: rgba(0, 52, 1, 0.9);
        width: 100%;
        height: 76%;
        opacity: 0.5;
        border-bottom-left-radius: 40px;
      }

      .img {
        width: 100%;
        height: 456px;
        border-bottom-left-radius: 40px;
        object-fit: cover;
      }
      @media (max-width: 1024px) {
      }

      .img1 {
        position: absolute;
        left: -4%;
        top: 43%;
        transform: rotate(-28.43deg);
      }
    }
  }
`;
