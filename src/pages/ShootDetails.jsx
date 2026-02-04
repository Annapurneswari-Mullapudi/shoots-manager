import { useParams } from "react-router-dom";
import { shootsData } from "../data/shootsData";
import { useEffect, useState } from "react";
import { FaChevronDown, FaCamera } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./details.css";

export default function ShootDetails() {
  const { id } = useParams();
  const shoot = shootsData.find((s) => s.id === Number(id));

  if (!shoot) return <p>Not Found</p>;

  const completedKey = `shoot-${shoot.id}-completedBy`;

  const [completedBy, setCompletedBy] = useState(
    localStorage.getItem(completedKey) || ""
  );

  const [isCompleted, setIsCompleted] = useState(false);

  // 🔍 Check completion from localStorage
  const checkCompletion = () => {
    return shoot.locations.every((loc) =>
      loc.tasks.every((task) => {
        const key = `shoot-${shoot.id}-loc-${loc.name}-task-${task.title}`;
        const saved = localStorage.getItem(key);
        if (!saved) return false;

        const checked = JSON.parse(saved);
        const required = [
          ...task.videos.map((v) => v.label),
          ...task.checklist,
        ];

        return (
          required.length > 0 &&
          required.every((item) => checked.includes(item))
        );
      })
    );
  };

  // ✅ Initial load
  useEffect(() => {
    setIsCompleted(checkCompletion());
  }, []);

  // 🔁 Called whenever any checkbox changes
  const refreshCompletion = () => {
    const done = checkCompletion();
    setIsCompleted(done);

    if (!done) {
      setCompletedBy("");
      localStorage.removeItem(completedKey);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="ribbon">
        <h2>
          <FaCamera /> Shoots Manager
        </h2>
        <img src={logo} />
      </div>

      {/* Title */}
      <h3 className="title">
        {shoot.name} ({shoot.type})
      </h3>

      <div className="meta">
        <span>📍 Locations : {shoot.locationsText}</span>
        <span>📅 Dates : {shoot.dates}</span>
      </div>

      <img src={shoot.image} className="mainImage" />

      {/* Locations */}
      {shoot.locations.map((loc, i) => (
        <div key={i}>
          <h4 className="locationNames">
            Location {i + 1} : ({loc.name})
          </h4>
          <p className="Tasks">Tasks :</p>

          {loc.tasks.map((task) => (
            <Task
              key={task.title}
              task={task}
              shootId={shoot.id}
              locationName={loc.name}
              onProgressChange={refreshCompletion}
            />
          ))}
        </div>
      ))}

      {/* ✅ FINAL CONFIRMATION */}
      <div className="reviewBox">
        <input
          placeholder="Enter Your Name"
          value={completedBy}
          disabled={!isCompleted}
          onChange={(e) => setCompletedBy(e.target.value)}
        />

        <button
          disabled={!isCompleted || !completedBy.trim()}
          onClick={() => {
            localStorage.setItem(completedKey, completedBy);
            alert("Shoot marked as completed!");
          }}
        >
          Submit
        </button>
      </div>

      <footer>OneDayStories</footer>
    </div>
  );
}

/* ---------------- TASK COMPONENT ---------------- */

function Task({ task, shootId, locationName, onProgressChange }) {
  const [open, setOpen] = useState(false);

  const storageKey = `shoot-${shootId}-loc-${locationName}-task-${task.title}`;

  const requiredItems = [
    ...task.videos.map((v) => v.label),
    ...task.checklist,
  ];

  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggle = (item) => {
    setChecked((prev) => {
      const updated = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];

      localStorage.setItem(storageKey, JSON.stringify(updated));
      onProgressChange(); // 🔥 notify parent immediately
      return updated;
    });
  };

  const completed =
    requiredItems.length > 0 &&
    requiredItems.every((item) => checked.includes(item));

  return (
    <div className="task">
      <div
        onClick={() => setOpen(!open)}
        className={`taskHeader ${completed ? "completed" : ""}`}
      >
        <span>{task.title}</span>
        <FaChevronDown />
      </div>

      {open && (
        <div className="taskBody">
          {task.description && <p>{task.description}</p>}

          {task.videos.map((v, i) => (
            <div key={i}>
              <label>
                <input
                  type="checkbox"
                  checked={checked.includes(v.label)}
                  onChange={() => toggle(v.label)}
                />
                {v.label}
              </label>
              <video src={v.src} controls className="video" />
            </div>
          ))}

          <div className="task2items">
            {task.checklist.map((item, i) => (
              <label key={i} className="checkItem">
                <input
                  type="checkbox"
                  checked={checked.includes(item)}
                  onChange={() => toggle(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}