//object constructor
function pis(id){
    var about = {
        Version: 0.01,
        Author: "Kevin Ferm",
        Created: "March 2016",
        Updated: "29/3-16"
    };

    if(id) {
        //Doesn't work without this for some reason??
        if(window == this) {
            return new pis(id);
        }

        this.e = document.getElementById(id);
        return this;
    } else {
        return about;
    }
}

//methods
pis.prototype = {

   submit: function(fields) {
      // implementation
      if(fields) {
        //Search fields that are named in the array
        for (var i = fields.length - 1; i >= 0; i--) {
            if(this.e[fields[i]]) {
                if(this.e[fields[i]].value) {
                    //Do the checking here
                    console.log(this.e[fields[i]].value);
                } else {
                    console.log(fields[i] + " has no value");
                }
            } else {
                console.log("There is no such field as: " + fields[i]);
            }
        };
      } else {
        //Search all

      }
      console.log(this.e);
      //this.e.submit();
      return this;
   },

   perinfo: function(data, type) {
    if(type === "image") {
        return true;
        //What to do to search for personal information in different types of form fields
    }
   }
};
