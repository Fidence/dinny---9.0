import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const Siderbar = () => {
  const [show, setShow] = useState(false);

  const showNav = () => setShow(!show);

  return (
    <Sidebar>
      <nav className="sidebar">
        {show && (
          <div className="sidelinks" onClick={showNav}>
            <Link className="colorgreen" to="#">
              Home
            </Link>
            <Link to="*">About</Link>
            <Link to="*">services</Link>
            <Link to="*">Instructors</Link>
            <a href="#">
              Courses
              <select name="" id="">
                <option value=""></option>
              </select>
            </a>
            <Link to="*">Blog</Link>
            <Link to="*">Contact</Link>
          </div>
        )}
        <div>
          {show ? (
            <RiCloseFill onClick={showNav} className="bar" />
          ) : (
            <FaBars className="bar" onClick={showNav} />
          )}
        </div>
      </nav>
    </Sidebar>
  );
};

export default Siderbar;

const Sidebar = styled.div`
  .sidebar {
    display: none;

    .bar {
      position: absolute;
      right: 3%;
      font-size: 2rem;
      color: white;
    }

    @media (max-width: 1020px) {
      display: block;
      background-color: red;
      right: 0;
    }
    .sidelinks {
      position: absolute;
      left: 0;
      top: 90%;
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 60vh;
      background-color: #003412;

      .close {
        font-size: 2.4rem;
        font-weight: bolder;
        color: white;
        position: absolute;
        left: 16%;
        margin-top: 5% 0;
      }

      a {
        color: #ffffff;
        margin-top: 11%;
        margin-left: 15%;
        font-size: 1.1rem;
        text-decoration: none;

        &:hover {
          color: #038c33;
        }
      }
    }
  }
`;
