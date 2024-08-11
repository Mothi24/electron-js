import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="title">Welcome to My App</h1>
        <p className="subtitle">A brief description of what your app does.</p>
      </header>
      <main className="main-content">
        <button className="primary-button">Get Started</button>
        <button className="secondary-button">Learn More</button>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage;
