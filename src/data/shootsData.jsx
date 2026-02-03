import ref1 from "../assets/ref1.mp4";
import ref2 from "../assets/ref2.mp4";
import prewedding from "../assets/prewedding.webp";
import birthday from "../assets/birthday.webp";
import maternity from "../assets/maternity.jpg";
import wedding from "../assets/wedding.avif";

export const shootsData = [
  {
    id: 1,
    name: "Lalitha & Venkat",
    type: "Pre-Wedding",
    locationsText: "Goa, Manali",
    dates: "Feb 19th & 20th",
    image: prewedding,

    locations: [
      {
        name: "Goa",
        tasks: [
          {
            title: "Task1",
            description:
              "Shoot the videos by following the reference clips.",
            videos: [
              { label: "Reference Video 1", src: ref1 },
              { label: "Reference Video 2", src: ref2 },
            ],
            checklist: [],
          },
          {
            title: "Task2",
            description: "",
            videos: [],
            checklist: [
              "Record Voice Over",
              "Outfit Stills",
              "Large Frames & Closeups",
            ],
          },
          {
            title: "Task3",
            description: "",
            videos: [],
            checklist: ["Take a Review Video"],
          },
        ],
      },
      {
        name: "Manali",
        tasks: [
          {
            title: "Task1",
            description:
              "Shoot the videos by following the reference clips.",
            videos: [
              { label: "Reference Video 1", src: ref1 },
              { label: "Reference Video 2", src: ref2 },
            ],
            checklist: [],
          },
          {
            title: "Task2",
            description: "",
            videos: [],
            checklist: [
              "Record Voice Over",
              "Outfit Stills",
              "Large Frames & Closeups",
            ],
          },
          {
            title: "Task3",
            description: "",
            videos: [],
            checklist: ["Take a Review Video"],
          },
        ],
      },
    ],
  },
  //card 2 content
  {
    id: 2,
    name: "Thanuja",
    type: "Birthday",
    locationsText: "Hyderabad",
    dates: "March 1st",
    image: birthday,

    locations: [
      {
        name: "Hyderabad",
        tasks: [
          {
            title: "Task1",
            description:
              "Shoot the videos by following the reference clips.",
            videos: [
              { label: "Reference Video 1", src: ref1 },
              { label: "Reference Video 2", src: ref2 },
            ],
            checklist: [],
          },
          {
            title: "Task2",
            description: "",
            videos: [],
            checklist: [
              "Record Voice Over",
              "Outfit Stills",
              "Large Frames & Closeups",
            ],
          },
          {
            title: "Task3",
            description: "",
            videos: [],
            checklist: ["Take a Review Video"],
          },
        ],
      },
      
    ],
  },
  //card 3 content
  {
    id: 3,
    name: "Shalini",
    type: "Maternity",
    locationsText: "Vizag",
    dates: "March 13th",
    image: maternity,

    locations: [
      {
        name: "Vizag",
        tasks: [
          {
            title: "Task1",
            description:
              "Shoot the videos by following the reference clips.",
            videos: [
              { label: "Reference Video 1", src: ref1 },
              { label: "Reference Video 2", src: ref2 },
            ],
            checklist: [],
          },
          {
            title: "Task2",
            description: "",
            videos: [],
            checklist: [
              "Record Voice Over",
              "Outfit Stills",
              "Large Frames & Closeups",
            ],
          },
          {
            title: "Task3",
            description: "",
            videos: [],
            checklist: ["Take a Review Video"],
          },
        ],
      },
    ],
  },
  //card 4
  {
    id: 4,
    name: "Satya & Venkatesh",
    type: "Wedding",
    locationsText: "Vizag",
    dates: "March 13th",
    image: wedding,

    locations: [
      {
        name: "Vizag",
        tasks: [
          {
            title: "Task1",
            description:
              "Shoot the videos by following the reference clips.",
            videos: [
              { label: "Reference Video 1", src: ref1 },
              { label: "Reference Video 2", src: ref2 },
            ],
            checklist: [],
          },
          {
            title: "Task2",
            description: "",
            videos: [],
            checklist: [
              "Record Voice Over",
              "Outfit Stills",
              "Large Frames & Closeups",
            ],
          },
          {
            title: "Task3",
            description: "",
            videos: [],
            checklist: ["Take a Review Video"],
          },
        ],
      },
    ],
  },
];
