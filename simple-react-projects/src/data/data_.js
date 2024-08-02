// data_.js
const sideBar = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Information",
    path: "/",
    Children: [
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    label: "Services",
    path: "/",
    Children: [
      {
        label: "Service 1",
        path: "/service1",
        Children: [
          { label: "Sub Service 1-0", path: "/sub-service1-0" },
          { label: "Sub Service 1-1", path: "/sub-service1-1" },
        ],
      },
      {
        label: "Service 2",
        path: "/service2",
        Children: [
          { label: "Sub Service 2-0", path: "/sub-service2-0" },
          { label: "Sub Service 2-1", path: "/sub-service2-1" },
        ],
      },
      { label: "Service 3", path: "/service3" },
    ],
  },
];

export default sideBar;
