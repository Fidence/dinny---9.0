import React from "react";
import styled from "styled-components";
import Dinny5 from "../components/images/dinny5.png";
import Circle from "../components/images/Ellipse 8.png";

const ThirdComp = () => {
  return (
    <Third>
      <div className="our">
        <div className="color"></div>
        <div className="our_features">
          <h1>Our Features</h1>
          <p>
            Dinny Green International School is nurtured in grace and truth,
            raising green, <br /> flourishing and successful children.
          </p>
        </div>

        <div className="displayflx">
          <div className="displayflx1">
            <div className="img">
              <img src={Circle} alt="" />
            </div>
            <div className="awesome">
              <h4>Awesome Teachers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>

          <div className="displayflx2">
            <div className="img">
              <img src={Circle} alt="" />
            </div>
            <div className="awesome">
              <h4>Global Recognition</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="displayflx">
          <div className="displayflx1">
            <div className="img">
              <img src={Circle} alt="" />
            </div>
            <div className="awesome">
              <h4>Extra curricular activities</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>

          <div className="displayflx2">
            <div className="img">
              <img src={Circle} alt="" />
            </div>
            <div className="awesome">
              <h4>Government Approved</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod ukkf <br /> tempor incididunt u.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Third>
  );
};

export default ThirdComp;

const Third = styled.div`
  .our {
    /* width: 100%; */

    background-image: url(${Dinny5});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;

    .color {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(32, 126, 32, 0.8);
    }

    &_features {
      padding-top: 55px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.89;

      h1 {
        padding-bottom: 20px;
        font-size: 40px;
        font-weight: 700;
      }

      p {
        padding-top: 10px;
        padding-bottom: 20px;
        color: #f2f2f2;
        opacity: 0.8;
      }
    }
  }

  .displayflx {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    opacity: 0.89;
    color: #ffffff;

    .displayflx1 {
      display: flex;
      width: 545px;
      height: 150px;
      background-color: #f2f2f2;
      margin-left: 100px;
      padding: 20px 20px;
      border-radius: 5px;
      opacity: 0.95;
      z-index: -1;

      .img {
        padding-right: 20px;
      }

      .awesome {
        h4 {
          color: #038c33;
          font-size: 16px;
          font-weight: bold;
        }

        p {
          padding-top: 5px;
          color: #1f6036;
        }
      }
    }
    @media (max-width: 1024px) {
      .displayflx1 {
        width: 450px;
        height: 150px;
        margin-left: 0;
      }
    }

    .displayflx2 {
      display: flex;
      width: 545px;
      height: 150px;
      background-color: #f2f2f2;
      padding: 20px 20px;
      border-radius: 5px;
      opacity: 0.95;
      z-index: 1;

      .img {
        padding-right: 20px;
      }

      .awesome {
        color: #038c33;

        h4 {
          font-size: 16px;
          font-weight: bold;
        }
        p {
          padding-top: 5px;
          color: #1f6036;
        }
      }
    }
    @media (max-width: 1024px) {
      .displayflx2 {
        width: 450px;
        height: 150px;
      }
    }
  }
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;
