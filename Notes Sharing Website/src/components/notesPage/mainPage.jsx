import React, { useEffect, useState } from "react";
import FolderButton from "./components/FolderButton";
import Navbar from "../navbar";
import LoadData from "../landingPage/load-data";
import Loading from "../Loading";

function NotesPage() {
  const [noteId, setNoteId] = useState("");
  const [data, setData] = useState(null); // Initialize data state as null

  const pages = [
    { name: "DSA", id: "dsa", folderId: "1LNl5MGK1tc0Ol148uErvRvgrMuwDJSAH" },
    { name: "HTML", id: "html", folderId: "1s_Oui4SkWJRRcT_iZN9E1QYl8NtH4q9Q" },
    { name: "CSS", id: "css", folderId: "" },
    { name: "Operating System", id: "operatingsystem", folderId: "" },
    { name: "Android notes", id: "androidnotes", folderId: "" },
    { name: "Computer Graphics", id: "computergraphics", folderId: "" },
    { name: "ML/AI", id: "ml-ai", folderId: "" },
    { name: "JAVA", id: "java", folderId: "" },
    { name: "Python", id: "python", folderId: "" },
    { name: "JavaScript", id: "javascript", folderId: "" },
  ];

  const getData = async (apiEnd) => {
    try {
      console.log(noteId);
      const resp = await fetch("http://localhost:3000/search/" + apiEnd);
      const json = await resp.json();
      setData(json); // Set data state after fetching
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const NewNote = pages.find(
      (page) => page.id === window.location.href.split("/").pop()
    );
    setNoteId(NewNote.folderId);
    getData(NewNote.folderId);
  }, [noteId]);

  return (
    <div className="">
      <Navbar />
      <h1>Notes</h1>
      <p>Note Id: {noteId}</p>
      <div
        className=" mr-[10%] ml-[10%] flex justify-start items-center  w-fit flex-wrap "
        id="foldersContainer"
      >
        {data ? (
          data.map((folder, index) => (
            <FolderButton
              name={folder.name}
              id={folder.id}
              // url={folder.url}
              key={index}
              type = {folder.mimeType}
            />
          ))
        ) : (
          <div  className="w-[77vw] h-[50vh] flex justify-center  items-center text-center" >

            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesPage;
