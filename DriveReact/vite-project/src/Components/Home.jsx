import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Home() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleFile = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setError("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsUploading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/upload", {
        credentials: "include",
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData, // Send the file directly as binary data
      });

      if (response.ok) {
        const result = await response.text();
        setSuccessMessage("File uploaded successfully!");
        setTimeout(() => setSuccessMessage(""), 5000); // Display success message
      } else {
        const errorText = await response.text();
        setError("An unexpected error occurred. Please try again.");
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  useEffect(() => {
    async function fetchFiles() {
      //console.log(cookies.token);
      try {
        const res = await fetch("http://localhost:3000/filelist", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const userFiles = await res.json(); // Parse the response as JSON
        setFiles(userFiles);
      } catch (err) {
        console.error("Error fetching files:", err);
        setError("Failed to fetch files");
      }
    }

    fetchFiles();
  }, [files]);

  const handleDownload = async (uploadName, originalName) => {
    try {
      const response = await fetch("http://localhost:3000/download", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ uploadName }),
      });

      if (response.ok) {
        const result = await response.text();
        //console.log(result);

        const link = document.createElement("a");
        link.href = result;
        link.download = originalName;
        link.setAttribute("download", originalName);
        document.body.appendChild(link);
        link.target = "_blank";
        link.click();
      } else {
        const errorText = await response.text();
        setError("An unexpected error occurred. Please try again.");
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleDelete = async (uploadName) => {
    setIsDeleting(true);
    console.log(uploadName);
    try {
      const response = await fetch("http://localhost:3000/delete", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uploadName }),
      });

      if (response.ok) {
        setIsDeleting(false);
        const result = await response.text();
        setSuccessMessage("File deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        const errorText = await response.text();
        setError("An unexpected error occurred. Please try again.", errorText);
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.", error);
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          {isUploading && (
            <p className="text-blue-500">Uploading... Please wait.</p>
          )}
          {isDeleting && (
            <p className="text-red-500">Deleting... Please wait.</p>
          )}

          {error && (
            <p className="text-red-600 bg-red-100 p-2 rounded-md">{error}</p>
          )}

          {successMessage && (
            <p className="text-green-600 bg-green-100 p-2 rounded-md">
              {successMessage}
            </p>
          )}
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            disabled={isUploading}
            className={`${
              isUploading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } font-medium py-2 px-4 rounded-lg shadow-md transition-all`}
          >
            {isUploading ? "Uploading..." : "Upload Files"}

            <VisuallyHiddenInput type="file" onChange={handleFile} multiple />
          </Button>
        </div>

        <h1 className="text-lg font-semibold text-gray-700 mb-4 text-center">
          Uploaded Files
        </h1>
        <ul className="space-y-2">
          {files.length > 0 ? (
            files.map((file, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-md shadow-md text-gray-800"
              >
                <span>{file.originalname}</span>
                <div className="flex justify-end">
                  <span className="space-x-4 mr-4">
                    <button
                      onClick={() =>
                        handleDownload(file.uploadname, file.originalname)
                      }
                      className="text-green-500 hover:text-green-700"
                    >
                      View
                    </button>
                  </span>
                  <span className="space-x-4">
                    <button
                      onClick={() => handleDelete(file.uploadname)}
                      className={`${isDeleting ? "text-grey-500 cursor-not-allowed" : "text-red-500 hover:text-red-700" }`}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">No files found</p>
          )}
        </ul>
      </div>
    </div>
  );
}
