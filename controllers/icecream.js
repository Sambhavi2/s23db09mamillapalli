var Icecream = require('../models/icecream');
// List of all icecream
// List of all icecream
exports.icecream_list = async function(req, res) {
    try{
    theicecream = await Icecream.find();
    res.send(theicecream);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle icecream create on POST.
    exports.icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"icecream_type":"goat", "cost":12, "size":"large"}
    document.flavour = req.body.flavour;
    document.size = req.body.size;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
  // VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function(req, res) {
    try{
    theicecream = await Icecream.find();
    res.render('icecream', { title: 'icecream Search Results', results: theicecream });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
/*exports.icecream_list = function(req, res) {
res.send('NOT IMPLEMENTED: icecream list');
};*/
// for a specific icecream.
/*exports.icecream_detail = function(req, res) {
res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};*/
 // for a specific icecream.
 exports.icecream_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await Icecream.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };

// Handle icecream create on POST.
/*exports.icecream_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: icecream create POST');
};*/
// Handle icecream delete form on DELETE.
/*exports.icecream_delete = function(req, res) {
res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};*/
exports.icecream_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
  let toUpdate = await Icecream.findById( req.params.id)
  // Do updates of properties
  if(req.body.icecream_type)
  toUpdate.icecream_type = req.body.icecream_type;
  if(req.body.cost) toUpdate.cost = req.body.cost;
  if(req.body.size) toUpdate.size = req.body.size;
  let result = await toUpdate.save();
  console.log("Sucess " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
  };
//Handle icecream delete on DELETE.
exports.icecream_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Icecream.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle a show one view with id specified by query
exports.icecream_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await Icecream.findById( req.query.id)
res.render('icecreamdetail',
{ title: 'icecream Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
  
// Handle icecream update form on PUT.
/*exports.icecream_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};*/
//Handle icecream update form on PUT.
