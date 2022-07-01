//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Pro Art
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction of Prokopenko Artsiom!</font><br><b>App Version 1.2</b>";
  res.status(200).send(message);
};
