import './NoteBook.css';

const NoteBook = () => {
  return (
    <div className="notebook-container">
      <nav className="premium-navbar">
        <div className="navbar-logo">
          AMIT
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">React</a>
          </li>
          <li>
            <a href="#">Angular</a>
          </li>
          <li>
            <a href="#">Vue</a>
          </li>
        </ul>
      </nav>
      {/* Rest of the page content can go here */}
    </div>
  );
};

export default NoteBook;
// #6b6375
