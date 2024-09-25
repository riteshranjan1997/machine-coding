import React, { useState, FunctionComponent } from "react";
import Folder from "./Folder";
import useTreverseTree from "./addItemHook";

type Props = {};

const FileExplorer: FunctionComponent<Props> = () => {
  const [fileStructureData, setFileStructureData] = useState<FileStructureData>(
    fileStructureDataMock
  );

  const { insertNode } = useTreverseTree();

  const handleInsertNode = (
    folderId: number,
    fileName: string,
    isFolder: boolean
  ) => {
    const finalTree = insertNode(
      fileStructureData,
      folderId,
      fileName,
      isFolder
    );
    setFileStructureData(finalTree);
  };

  return (
    <div style={{ width: "400px", padding: "8px" }}>
      <Folder
        handleInsertNode={handleInsertNode}
        folderData={fileStructureData}
      />
    </div>
  );
};

export default FileExplorer;

const fileStructureDataMock: FileStructureData = {
  id: 122,
  name: "My Project",
  isFolder: true,
  items: [
    {
      id: 123,
      name: "src",
      isFolder: true,
      items: [{ id: 124, name: "Components", isFolder: true, items: [] }],
    },
    {
        id: 12987,
        name: "package.json",
        isFolder: false,
        items: [],
      },
  ],
};

export type FileStructureData = {
  id: number;
  name: string;
  isFolder: boolean;
  items: FileStructureData[];
};
