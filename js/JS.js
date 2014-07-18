/*
 * FUNCTION - String.format()
 * USE - 
 * var statement = "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET");
 * alert(statement);
 */
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

/*
 * FUNCTION - String.startsWith()
 * USE - 
 * var data = "Hello world";
 * var input = 'He';
 * console.log(data.startsWith(input)); // true
 * input = 'De';
 * console.log(data.startsWith(input)); // false
 */
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function() {
    return this.indexOf(str) == 0;
  };
}

/*
 * FUNCTION - String.endsWith()
 * USE - 
 * var data = "Hello world";
 * var input = 'world';
 * console.log(data.endsWith(input)); // true
 * input = 'wo';
 * console.log(data.endsWith(input)); // false
 */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function( str ) {
    return this.substring( this.length - str.length, this.length ) === str;
  }
};
