
export function UICard({ children }) {
  return <div style={{
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "16px",
    marginBottom: "8px"
  }}>{children}</div>
}

export function UICardContent({ children }) {
  return <div>{children}</div>
}
