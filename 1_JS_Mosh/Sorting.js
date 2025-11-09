const courses = [
  { id: 1, name: "React JS" },
  { id: 2, name: "JS" },
];

courses.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courses);
