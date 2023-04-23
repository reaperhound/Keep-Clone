import { useContext } from "react";
import Note from "../Note/Note";
import { NotesContext } from "../../context/notes.context";
import { ClimbingBoxLoader } from "react-spinners";
import {ConfigProvider, Space, Spin} from "antd"

export default function NoteList() {
  const { notes, popUp } = useContext(NotesContext);
  console.log(notes);

  const noDataHandler = () => {
    return 'hidden'
  }

  return (
    <div 
    className={`flex gap-5 p-[100px] flex-wrap`} >
      {notes == null ? (
        <div
          className={`mx-auto`}>
          {/* <ClimbingBoxLoader className="mx-auto" color="#a4cbb4" /> */}
          <Space size={"middle"}>
            <ConfigProvider 
            theme={{
              inherit : false,
              token : {
                colorPrimary : "#ff5555"
              }
            }}>
              <Spin size="large" />
            </ConfigProvider>
          </Space>
        </div>
      ) : (
        <>
          {
            notes.map((note, index) => {
              return (
                <>
                <Note key={index} {...note} />
                </>
              )
            })
          }
        </>
      )}
    </div>
  );
}
