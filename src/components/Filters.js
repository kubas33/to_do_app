export default function Filters({ setActiveFilter, activeFilter }) {
  const filterButtons = [
    { label: "All", filter: "all" },
    { label: "Active", filter: "active" },
    { label: "Completed", filter: "completed" },
  ];

  const onSetActiveFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <ul className="filters">
      {filterButtons.map((button) => (
        <li key={button.filter}>
          <button
            className={activeFilter === button.filter ? "active" : ""}
            onClick={() => onSetActiveFilter(button.filter)}
          >
            {button.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
