const timeline = [
  {
    id: "1",
    username: "user test1",
    name: "user test name 1",
    avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
    message: "test message 1",
  },
  {
    id: "2",
    username: "user test2",
    name: "user test name 2",
    avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
    message: "test message 2",
  },
  {
    id: "3",
    username: "user test3",
    name: "user test name 3",
    avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
    message: "test message 3",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
