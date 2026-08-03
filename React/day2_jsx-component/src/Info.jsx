function Info({ name, father, surname }) {
  // console.log(children);
  // console.log(father);
  // console.log(surname);
  // console.log(element);
  // console.log(children);

  return (
    <div>
      <h1>This is info component {name}</h1>
      <h2>
        My name is {name} {father} {surname}
      </h2>
    </div>
  );
}

export default Info;
