import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { students } from "./students";
import Group35 from "../images/Group 35.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Fifthcomp extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fifth>
        <div className="popular_classes">
          <div className="pop_txt">
            <h2>Popular Classes</h2>
            <p>
              We have built hospitals, arranged doctor appointments have the
              diagnose and treat <br /> yourem ipsu r aol ad meniam, quis
              nostrud exercitation.
            </p>
          </div>

          <div className="pop_img">
            <img src={Group35} alt="" />
          </div>
        </div>

        <Slider {...settings}>
          {students.map((student, id) => {
            return (
              <div className="instructors">
                <img src={student.img} alt="Instructor1" />
                <div className="date">
                  <div className="date_txt">
                    <FaStickyNote className="icon" />
                    <span className="dateno">{student.less}</span>
                  </div>
                  <div className="date_txt">
                    <AiTwotoneCalendar className="icon" />
                    <span className="dateno">{student.date}</span>
                  </div>
                </div>
                <h4>{student.date}</h4>
                <p>{student.para}</p>
                <div className="enroll">
                  <p className="enrolnow">
                    Enroll Now <BsArrowRight className="down" />
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="enroll">
          {" "}
          <button>View More</button>
        </div>
      </Fifth>
    );
  }
}

const Fifth = styled.div`
  background-color: #f9fcfe;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  height: 45rem;
  .popular {
    background-color: #f9fcfe;

    &_classes {
      display: flex;
      justify-content: flex-end;

      .pop_txt {
        width: 80%;
        text-align: center;
        flex: 7;
        margin-top: 65px;

        h2 {
          font-size: 40px;
          color: #038c33;
          font-weight: bold;
          line-height: 55.9px;
        }

        p {
          color: $secondary;
        }
      }

      .pop_img {
        margin-right: 4rem;
        margin-top: 40px;
      }
    }
  }
  .instructors {
    width: 100%;
    height: 471px;
    background-color: #ffffff;
    margin-right: 20px;
    margin-bottom: 15%;

    img {
      display: block;
      margin: auto;
      padding-top: 40px;
      margin-bottom: 4%;
    }

    .date {
      text-align: center;
      padding: 10px 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #6c757d;
      .date_txt {
        display: flex;
        align-items: center;
        .dateno {
          margin-left: 5px;
        }
        .icon {
          color: #038c33;
        }
      }
    }

    h4 {
      color: #038c33;
      text-align: center;
      padding-bottom: 5px;
    }

    p {
      padding-top: 3%;
      color: #6c757d;
      text-align: center;
      opacity: 0.98;
      z-index: 1;
    }

    .enroll {
      width: 100%;
      padding: 3%;
      align-items: center;

      .enrolnow {
        .down {
          margin-top: 3%;
        }
        border-radius: 0px 0 5px 5px;
        border-top: 1px solid #038c33;
        border-bottom: 5px solid #038c33;
        /* margin-top: 87px; */
        margin-right: 0;
        color: #038c33;

        &:hover {
          cursor: pointer;
          background-color: #038c33;
          color: #ffffff;
        }
      }
    }
  }
  .enroll_btn {
    button {
      display: block;
      margin: 0 auto;
      background-color: #038c33;
      color: #ffffff;
      padding: 13.5px 40px;
      border: none;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        background-color: green;
      }
    }
  }
`;
