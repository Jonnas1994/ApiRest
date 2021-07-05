module.exports = app => {
    const nodePackageDB = app.data.nodePackage_data;
    const controller = {};
  
    controller.listConfigPackage = (req, res) => {
        res.status(200).json(nodePackageDB);
    };
  
    return controller;
  }