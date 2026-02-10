export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">🐱 Dancing Cat 🐱</h1>
        <p className="subtitle">Click the buttons to control the dance!</p>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>Press <kbd>Space</kbd> to play/pause · <kbd>D</kbd> to change dance</p>
      </footer>
    </div>
  )
}
