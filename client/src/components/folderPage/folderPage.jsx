import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import Loading from "../Loading";
import FolderButton from "../notesPage/components/FolderButton";
import GetFileButton from "./components/fileButton";
import BackButton from "./components/backButton";

function FolderPage() {
    const [noteId, setNoteId] = useState("");
    const [data, setData] = useState(null); // Initialize data state as null

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
        const NewNote = window.location.href.split("/").pop();
        setNoteId(NewNote);
        getData(NewNote);
    }, [noteId]);

    return (
        <div className="">
            <Navbar />
            <h1>Notes</h1>
            <p>Note Id: {noteId}</p>
            <BackButton/>
            <div
                className=" mr-[10%] ml-[10%] flex gap-20 px-3 justify-start items-center  w-fit flex-wrap "
                id="foldersContainer"
            >
                {data ? (
                    data.map((folder, index) => {
                        return folder.mimeType.split(".").pop() !== "folder" ? (
                            <GetFileButton
                                type={folder.mimeType.split(".").pop()}
                            />
                        ) : (
                            <FolderButton
                                name={folder.name}
                                id={folder.id}
                                // url={folder.url}
                                key={index}
                                type={folder.mimeType}
                            />
                        );
                    })
                ) : (
                    <div className="w-[77vw] h-[50vh] flex justify-center  items-center text-center">
                        <Loading />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FolderPage;
