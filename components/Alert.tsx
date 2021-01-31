import { EXAMPLE_PATH } from "../lib//constants";

export default function Alert({ preview }) {
  return (
    <div>
      <div>
        <div>
          {preview && (
            <>
              This page is a preview. <a href="/api/exit-preview">Click here</a>{" "}
              to exit preview mode.
            </>
          )}
        </div>
      </div>
    </div>
  );
}
