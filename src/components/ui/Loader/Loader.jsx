import "./Loader.css";

const Loader = ({ size = "medium", fullPage = false }) => {
  return (
    <div className={fullPage ? "loader-fullpage" : "loader-inline"}>
      <span className={`loader-spinner loader-${size}`} />
    </div>
  );
};

export default Loader;
