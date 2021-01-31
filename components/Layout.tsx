import Alert from "../components/Alert";
 
export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    
    </>
  );
}
