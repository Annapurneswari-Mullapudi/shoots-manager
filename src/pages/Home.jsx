import { useState } from "react";
import "./home.css";

import prewedding from "../assets/prewedding.webp";
import birthday from "../assets/birthday.webp";
import maternity from "../assets/maternity.jpg";
import wedding from "../assets/wedding.avif";
import logo from "../assets/logo.png";
import searchicon from "../assets/searchicon.png";
import { FaChevronRight, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const shoots = [
  { id: 1, name: "Lalitha & Venkat", type: "PreWedding", location: "Goa / Manali", date: "Feb 19th & 21st", image: prewedding },
  { id: 2, name: "Thanuja", type: "Birthday", location: "Hyderabad", date: "March 1st", image: birthday },
  { id: 3, name: "Shalini", type: "Maternity", location: "Vizag", date: "March 13th", image: maternity },
  { id: 4, name: "Satya & Venkatesh", type: "Wedding", location: "Vizag", date: "March 13th", image: wedding },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredShoots = shoots.filter((s) =>
    `${s.name} ${s.location} ${s.date}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="ribbon">
        <h2><FaCamera className="cameraicon" /> Shoots Manager</h2>
        <img src={logo} />
      </div>

      <div className="searchBox">
        <img src={searchicon} className="searchIcon" />
        <input
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3>Upcoming Shoots</h3>

      {filteredShoots.map((shoot) => {
        const completedBy = localStorage.getItem(
          `shoot-${shoot.id}-completedBy`
        );

        return (
          <div className="card" key={shoot.id}>
            <img src={shoot.image} />

            <div>
              <h4>{shoot.name} ({shoot.type})</h4>
              <p>📍 {shoot.location}</p>
              <small>📅 {shoot.date}</small>

              <div className="viewdetailsDiv">
                
                <div className="viewdetails">
                  <button onClick={() => navigate(`/shoot/${shoot.id}`)}>
                    View Details 
                  </button>
                  <FaChevronRight className="arrow" />
                </div>
                
                
                  {completedBy && (
                      <div className="completedText">
                        Done by {completedBy}
                      </div>
                  )}
                 
                
                

                {/* <FaChevronRight className="arrow" /> */}
              </div>
            </div>
          </div>
        );
      })}

      <footer>OneDayStories</footer>
    </div>
  );
}
