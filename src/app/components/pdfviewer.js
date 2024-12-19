export default function PDFViewer() {
  return (
    <div style={{ height: "100vh", border: "1px solid #ccc" }}>
      <iframe
        src="/files/stone_ducky_menu.pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </div>
  );
}
