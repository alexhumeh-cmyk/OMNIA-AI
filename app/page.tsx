@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #050816;
  --panel: #0d1326;
  --panel-alt: #111c34;
  --accent: #5ea5ff;
  --violet: #8b5cf6;
  --text: #e2e8f0;
  --muted: #94a3b8;
}

html {
  background: var(--bg);
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(94, 165, 255, 0.12), transparent 28%),
    radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.14), transparent 26%),
    var(--bg);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 9999px;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
