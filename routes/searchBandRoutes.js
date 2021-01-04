app.get("/search", (request, response) => {

  //Holds value of the query param 'searchquery'.
  const searchQuery = request.query.searchquery;

  //Do something when the searchQuery is not null.
  if(searchQuery !== null){
  //send out a message NO Band Found
  }else{
    response.end();
  }
});