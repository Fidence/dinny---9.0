import React from "react";
import styled from "styled-components";
import Woman from "../components/images/woman.png";
import Rectangle8 from "../components/images/Rectangle8.png";
import Trust from "../components/images/trust.png";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";

const EightComp = () => {
  return (
    <Eighth>
      <div className="teacher">
        <div className="teacher_row">
          <h2>Our Instructors & Teachers</h2>
          <p>
            We have the best teachers and instructors that would be able to
            train your kids, making <br />
            them Creative, God fearing, Respectfull and Intelligent.{" "}
          </p>
        </div>

        <div className="flexwapper">
          <div className="teacher_section">
            <div className="section1">
              <div className="linear">
                <div className="bb">
                  <button>Full time</button>
                  <p>
                    {" "}
                    <strong>Masters in Geology</strong>{" "}
                  </p>

                  <AiTwotoneCalendar />
                  <span> 28th April 2021</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section2">
            <div className="linear2">
              <div className="bb2">
                <button>Full time</button>
                <p>
                  Doctor appointments have the <br /> diagnose
                </p>

                <AiTwotoneCalendar />
                <span> 28th April 2021</span>
              </div>
            </div>
          </div>

          <div className="section3">
            <div className="linear3">
              <div className="bb3">
                <button>Full time</button>
                <p>
                  {" "}
                  Doctor appointments have the <br /> diagnose
                </p>
                <p className="font3">
                  <i className="fa fa-calendar"></i> 28th April 2021
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="teacher_btn">See all</button>
      </div>
    </Eighth>
  );
};

export default EightComp;

const Eighth = styled.div`
  .teacher {
    /* width: 100%; */
    height: 50rem;
    background-color: rgba(103, 191, 38, 0.08);
    &_row {
      text-align: center;
      h2 {
        color: #038c33;
        padding-top: 6.3rem;
        padding-bottom: 1.3rem;
        font-size: 3rem;
      }
      p {
        text-align: center;
        color: #6c757d;
      }
    }

    .flexwapper {
      display: flex;
      justify-content: center;
      margin-top: 3%;

      .teacher_section {
        width: 21.9rem;
        height: 31.1rem;

        .section1 {
          width: 21.9rem;
          height: 24.4rem;
          background-image: url(${Woman});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;

          .linear {
            position: absolute;
            width: 21.9rem;
            height: 11.8rem;
            top: 52%;
            left: 0%;
            border-radius: 0px 0px 5px 5px;
            background: linear-gradient(
              180deg,
              rgba(3, 140, 51, 0) 22.57%,
              rgba(3, 140, 51, 0.497159) 77.2%,
              #038c33 100%
            );

            .bb {
              margin-top: 15%;
              margin-left: 8%;
              width: 14.5rem;
              height: 5.2rem;
              color: #ffffff;

              button {
                margin-bottom: 10%;
                padding: 3% 10%;
                background-color: #add9bd;
                border-radius: 0.2rem;
                color: #ffffff;
                border: none;
              }
              .font {
                font-size: 0.9rem;
              }
            }
          }
        }
      }

      .section2 {
        width: 21.9rem;
        height: 24.4rem;
        background-image: url(${Trust});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        margin-right: 2%;
        margin-left: 2%;
        border-radius: 0.2rem;

        .linear2 {
          position: absolute;
          width: 21.9rem;
          height: 11.8rem;
          top: 52%;
          left: 0px;
          border-radius: 0px 0px 5px 5px;
          background: linear-gradient(
            180deg,
            rgba(3, 140, 51, 0) 22.57%,
            rgba(3, 140, 51, 0.497159) 77.2%,
            #038c33 100%
          );

          .bb2 {
            margin-top: 8%;
            margin-left: 6%;
            width: 14.5rem;
            height: 5.2rem;
            color: #ffffff;

            button {
              margin-bottom: 10%;
              padding: 3% 10%;
              background-color: #add9bd;
              border-radius: 0.2rem;
              color: #ffffff;
              border: none;
            }
            .font {
              font-size: 0.9rem;
            }
          }
        }
      }

      .section3 {
        width: 21.9rem;
        height: 24.4rem;
        background-image: url(${Rectangle8});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        border-radius: 0.2rem;

        .linear3 {
          position: absolute;
          width: 21.9rem;
          height: 11.8rem;
          top: 52%;
          left: 0px;
          border-radius: 0px 0px 5px 5px;
          background: linear-gradient(
            180deg,
            rgba(3, 140, 51, 0) 22.57%,
            rgba(3, 140, 51, 0.497159) 77.2%,
            #038c33 100%
          );

          .bb3 {
            margin-top: 8%;
            margin-left: 6%;
            width: 14.5rem;
            height: 5.2rem;
            color: #ffffff;

            button {
              margin-bottom: 10%;
              padding: 3% 10%;
              background-color: #add9bd;
              border-radius: 0.2rem;
              color: #ffffff;
              border: none;
            }
            .font3 {
              font-size: 0.9rem;
            }
          }
        }
      }
    }

    .teacher_btn {
      display: block;
      background-color: #038c33;
      color: #ffffff;
      padding: 1% 4%;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;

      &:hover {
        background-color: green;
        cursor: pointer;
      }
    }
  }
`;
