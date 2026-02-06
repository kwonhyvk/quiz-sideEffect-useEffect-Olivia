function Footer() {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} — Dibuat oleh <strong>Olivia</strong>
      </p>
      <p className="footer-note">
        Latihan React Hooks (useState & useEffect)
      </p>
    </footer>
  );
}

export default Footer;
