function counter(x) {
     var count = x;


          function up() {
            return ++count;

          }
          function down() {

              return --count;

          }

          return {
              carlUp : up,
              carlDown : down
         };


}
var count1 = counter(10);
console.log(count1.carlDown());
