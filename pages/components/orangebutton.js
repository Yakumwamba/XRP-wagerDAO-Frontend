export const OrangeButton = ({children, onClick}) => {
    return (
      <button
        style={{
          backgroundColor: "#F2994A",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "white"
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };