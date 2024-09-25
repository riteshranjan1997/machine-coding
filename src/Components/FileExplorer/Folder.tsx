import React, { FunctionComponent, useState } from "react";

type Props = {
  folderData: any;
  handleInsertNode: Function;
};

const Folder: FunctionComponent<Props> = ({ folderData, handleInsertNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showInputBox, setShowInputBox] = useState<any>({
    show: false,
    isFolder: false,
  });

  const handleAddItem = (event: any, isFolder: boolean) => {
    event.stopPropagation();
    setIsExpanded(true);
    setShowInputBox({ show: true, isFolder: isFolder });
  };

  const handleSaveItem = (event: any) => {
    if (event.target.value) {
      handleInsertNode(
        folderData.id,
        event.target.value,
        showInputBox.isFolder
      );
    }
    setShowInputBox({ ...showInputBox, show: false });
  };

  return (
    <div key={folderData.id}>
      <div
        style={{
          cursor: "pointer",
          border: "1px solid black",
          padding: "4px",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => folderData.isFolder && setIsExpanded(!isExpanded)}
      >
        <p style={{ margin: "0px" }}>
          <span style={{ marginRight: "4px" }}>
            {folderData.isFolder ? "🗂️" : "📄"}
          </span>
          <span>{folderData.name}</span>
        </p>
        <div>
          <button onClick={(event: any) => {}}>Delete</button>
        </div>
        {folderData.isFolder && (
          <div>
            <button onClick={(event: any) => handleAddItem(event, true)}>
              + Folder
            </button>
            <button onClick={(event: any) => handleAddItem(event, false)}>
              + File
            </button>
          </div>
        )}
      </div>

      <div style={{ paddingLeft: "10px", paddingTop: "4px" }}>
        {showInputBox.show && (
          <div>
            <span style={{ marginRight: "4px" }}>
              {showInputBox.isFolder ? "🗂️" : "📄"}
            </span>
            <input
              type="text"
              onBlur={(event: any) => handleSaveItem(event)}
              autoFocus
            />
          </div>
        )}
        {isExpanded &&
          folderData.items.map((elem: any) => (
            <Folder
              handleInsertNode={handleInsertNode}
              key={elem.id}
              folderData={elem}
            />
          ))}
      </div>
    </div>
  );
};

export default Folder;
