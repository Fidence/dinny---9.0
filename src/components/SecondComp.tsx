import styled from "styled-components";
import Frame3 from "../components/images/Frame 3.png";
import Mask from "../components/images/Mask Group (6).png";

const SecondComp = () => {
  return (
    <Wrapper>
      <div className="advances">
        <div className="adavance-learning">
          <img src={Frame3} className="dinny7" alt="" />
        </div>

        <div className=" advance-system">
          <h1>Advance Learning System Around The World</h1>

          <p>
            We have made a collaborative effort in bringing together <br />
            scientific expertise from other countries, steered jointly <br /> by
            their governments on the basis of shared, <br /> policy-driven
            interests.
          </p>

          <table>
            <tr>
              <td>
                <h1 className="up">
                  25k<sup>+</sup>
                </h1>
                <p>Teachers</p>
              </td>

              <td>
                <h1 className="up">
                  74k<sup>+</sup>
                </h1>
                <p>Active Courses</p>
              </td>
              <td className="down">
                <h1 className="up">250</h1>
                <p>Extra Curricular </p>
              </td>
            </tr>
          </table>
          <button>Learn More</button>
        </div>
        <div className="yyy">
          <img src={Mask} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SecondComp;

const Wrapper = styled.div`
  .advances {
    display: flex;
    padding: 0% 3%;
    /* width: 100%; */
    height: 43.8rem;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    position: relative;

    &-learning {
      margin-left: 6%;

      .dinny7 {
        width: 100%;
      }
    }
    @media (max-width: 1024px) {
      .adavance-learning {
        margin-left: 5%;
        margin-bottom: 12%;
        /* width: 70%; */

        .dinny7 {
          width: 115%;
        }
      }
    }
    .advance-system {
      margin-left: 12%;
      /* margin-right: 10%; */

      h1 {
        line-height: 3rem;
        font-weight: bold;
        font-size: 2.2rem;
        color: #038c33;
        width: 70%;
      }
      @media (max-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
        width: 70%;
      }
      p {
        padding: 3% 0;
        color: $second;
      }
      @media (max-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      button {
        margin-top: 40px;
        display: inline-block;
        margin-right: 20px;
        background-color: #038c33;
        color: #ffffff;
        padding: 13.5px 40px;
        border: none;
        border-radius: 5px;
        margin-top: 30px;

        &:hover {
          cursor: pointer;
          background-color: green;
        }
      }

      table {
        margin-top: 20px;
        p {
          text-align: center;
          padding: 0;
          color: #003412;
        }

        td {
          padding: 0 10px;
          border-right: 2px solid #ddd;

          h1 {
            line-height: 48px;
            font-weight: 600;
          }
        }

        .down {
          padding-top: 10px;
          border-right: none;
        }
      }
      @media (max-width: 1024px) {
        table {
          td {
            /* .up {
              padding-bottom: 20%;
            } */
          }
        }
      }
    }

    .yyy {
      position: absolute;
      top: 40%;
      left: 90%;
    }
    @media (max-width: 1024px) {
      .yyy {
        display: none;
      }
    }
  }
  @media (max-width: 1020px) {
    .advances {
      padding: 1rem;
    }
  }
`;
