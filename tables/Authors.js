
var table = module.exports = require('azure-mobile-apps').table();

// table.read(function (context) {
//     return context.execute();
// });

// table.read.use(customMiddleware, table.operation);

/*
table.insert(function (context) {
    context.item.userId = context.user.id;
    return context.execute();
});
*/

/*

function insert(item, user, request) {
    var table = tables.getTable('People');
    table.where({ 
       userId: user.userId
    }).read({
       success: upsertItem
    });

    function upsertItem(existingItems) {
        if (existingItems.length === 0) {
            request.execute();
        } else {
        item.id = existingItems[0].id;
          table.update(item, {
            success: function(updatedItem) {
                request.respond(200, updatedItem)
            }
          });
        }
     }
 }
 */
/*
 // When adding records, add or overwrite the userId with the authenticated user
table.insert(function (context) {
    context.item.userId = context.user.id;
    return context.execute();
});
*/

// CHANGE TO AUTHOR UPSERT

 table.insert(function (context) {
 	var authorId = context.user.id;

    var table = tables.getTable('Authors');
    table.where({ 
       userId: authorId
    }).read({
       success: upsertItem
    });

    function upsertItem(existingItems) {
        if (existingItems.length === 0) {
        	// Insert author ...
            request.execute();

        } else {
        	// Update author
        	item.id = existingItems[0].id;
	          table.update(item, {
	            success: function(updatedItem) {
                	request.respond(200, updatedItem)
            	}
        	});
        }
     }
});

 