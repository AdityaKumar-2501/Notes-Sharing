import React, { useEffect, useState } from "react";
import FolderButton from "./components/FolderButton";
import Navbar from "../navbar";
import LoadData from "../landingPage/load-data";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import BackButton from "../folderPage/components/backButton";
import Error from "../pages/errorPage/error";

function NotesPage() {
    const { id } = useParams();
    const [noteId, setNoteId] = useState("");
    const [data, setData] = useState(null); // Initialize data state as null
    const [loading, setLoading] = useState(false); // Set loading state

    const pages = [
        {
            name: "DSA",
            id: "dsa",
            folderId: "1X1Vy--C7yKIcPndn1Y4Ax31ZoTlTJCBn",
        },
        {
            name: "HTML",
            id: "html",
            folderId: "1xt5Rl8npvvjss8cNCqFRhXhx2xByhwTc",
        },
        {
            name: "CSS",
            id: "css",
            folderId: "1cqwYi1sVPdl8IhqJKN55LpkjB7k4urC6",
        },
        { name: "Operating System", id: "operatingsystem", folderId: "" },
        {
            name: "Android notes",
            id: "androidnotes",
            folderId: "1VtGGq-slUjyLf1NIhbjfdo97owp_b_eP",
        },
        {
            name: "Computer Graphics",
            id: "computergraphics",
            folderId: "1dMtNGT2RQ6fyX1DvMYbDwR_BYjYweKCS",
        },
        { name: "ML", id: "ml", folderId: "19zboLjvQ6R0-eCTvyfArsXroJb_bMDRL" },
        { name: "AI", id: "ai", folderId: "1AtTkIllCv9KPGRidAy_MSsrrxa-o2fJ9" },
        { name: "JAVA", id: "java", folderId: "1Bb99UyFtLzwXJN6NUSLbZa7mzqkvAvDg" },
        {
            name: "Python",
            id: "python",
            folderId: "1s2SVDFQ1XL4V-cH6UYz3pVO6OFPqHs6G",
        },
        {
            name: "JavaScript",
            id: "javascript",
            folderId: "12SfpfKPxpJkGKyg2Bizbam-rveOJ9LKn",
        },
    ];

    const getData = async (apiEnd) => {
        try {
            setLoading(true);
            console.log(noteId);
            const resp = await fetch("http://localhost:3000/search/" + apiEnd);
            if (!resp.ok) {
                // If the response status is not ok (e.g., 404), throw an error
                setData(null);
            }
            const json = await resp.json();

            setData(json); // Set data state after fetching
            console.log(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const NewNote = pages.find(
            (page) => page.id === window.location.href.split("/").pop()
        );
        setNoteId(NewNote.folderId);
        getData(NewNote.folderId);
    }, [id]);

    return (
        <div className="">
            <Navbar />
            {/* <h1>Notes</h1>
            <p>Note Id: {noteId}</p> */}
            <BackButton />
            {loading ? (
                <div className="w-[99vw] h-[50vh] flex justify-center items-center text-center">
                    <Loading />
                </div>
            ) : (
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
                                type={folder.mimeType}
                            />
                        ))
                    ) : (
                        <div className="w-[77vw] h-[50vh] flex justify-center  items-center text-center">
                            <Error />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default NotesPage;
