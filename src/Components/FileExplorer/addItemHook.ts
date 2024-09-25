const useTreverseTree = () => {
  function insertNode(tree: any, folderId: any, item: any, isFolder: boolean) {
    if (tree.id === folderId && tree.isFolder) {
      tree?.items?.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((elem: any) =>
      insertNode(elem, folderId, item, isFolder)
    );
    return { ...tree, items: latestNode };
  }

  function deleteNode(tree: any, folderId: any, item: any, isFolder: boolean) {
    if (tree.id === folderId) {
      
    }
  }

  return { insertNode, deleteNode };
};

export default useTreverseTree;
