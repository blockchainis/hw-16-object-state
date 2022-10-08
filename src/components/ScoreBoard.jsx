import { useState } from "react";

export default function Scoreboard() {
  const [member, setMember] = useState({
    name: "리사",
    birthOfName: "라리사 마노반",
    score: 10,
  });

  function handlePlusClick() {
    member.score++;
  }

  function handleFirstNameChange(e) {
    member.name = e.target.value;
    setMember(member);
  }

  function handleLastNameChange(e) {
    member.birthOfName = e.target.value;
    setMember(member);
  }

  return (
    <>
      <label>
        점수: <b>{member.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        이름:
        <input value={member.name} onChange={handleFirstNameChange} />
      </label>
      <label>
        본명:
        <input value={member.birthOfName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
