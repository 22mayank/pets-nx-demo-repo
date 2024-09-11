export interface PetToysProps {
  toys: Array<string>
}

export function PetToys(props: PetToysProps) {
  return (
    <div className="toys-section">
      <h1>Here are your toys!</h1>
      {props.toys.map((toy) => {
        return <div className="toy">{toy}</div>
      })}
    </div>
  );
}

export default PetToys;