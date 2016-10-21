var migrations = (function(){
	function init(sequelize) {
		// Clean table before try to install data
		sequelize
		.query("delete from orderStatuses")
		.then(function() {
			console.log("orderStatuses table successfully cleaned");
			// Create orderStatuses Catalog data
			sequelize
			.query("INSERT INTO orderStatuses(id, name, active, createdAt, updatedAt) VALUES (1, 'NEW', 1, NOW(), NOW()), (2, 'IN_PROCESS', 1, NOW(), NOW()), (3, 'FOR_DELIVERY', 1, NOW(), NOW()), (4, 'DELIVERED', 1, NOW(), NOW());")
			.then(function() {
				console.log("orderStatuses table populated successfully");
			});
		});

		sequelize
		.query("delete from productCategories")
		.then(function() {
			console.log("productCategories table successfully cleaned");
			sequelize
			.query("INSERT INTO productCategories(id, name, active, createdAt, updatedAt) VALUES (1, 'BREAKFAST', 1, NOW(), NOW()), (2, 'MEAL', 1, NOW(), NOW()), (3, 'DINNER', 1, NOW(), NOW()), (4, 'ALL', 1, NOW(), NOW());")
			.then(function() {
				console.log("productCategories table populated successfully");
			});
		});
	};

	return {
		init : init,
	};
})();
module.exports = migrations;