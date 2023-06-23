const db = require("./db_connection");

const delete_plants_table_sql = "DELETE FROM plants;"

db.execute(delete_plants_table_sql);

const delete_categories_table_sql = "DELETE FROM categories;"

db.execute(delete_categories_table_sql);

const insert_categories_sql = `
    INSERT INTO categories 
        (categoryId, categoryName) 
    VALUES 
        (?, ?);
`

db.execute(insert_categories_sql, [1, 'Herb']);

db.execute(insert_categories_sql, [2, 'Shrub']);

db.execute(insert_categories_sql, [3, 'Tree']);

db.execute(insert_categories_sql, [4, 'Creeper']);

db.execute(insert_categories_sql, [5, 'Climber']);

const insert_plants_sql = `
    INSERT INTO plants 
        (plantName, categoryId, lastDate, requirements) 
    VALUES 
        (?, ?, ?, ?);
`

db.execute(insert_plants_sql, ['Raspberry', 2, '2023-05-26',
    'Raspberries grow best in a sunny location, but they will also grow in a partially-shaded spot. The planting site should have rich and well-drained soil, great air circulation, and shelter from the wind. Every year, feed your raspberry plants with a couple of inches of compost or aged manure.']);

db.execute(insert_plants_sql, ['Weeping Willow', 3, '2023-06-01', null]);

db.execute(insert_plants_sql, ['Cilantro', 1, '2023-06-07',
    'Plant the seeds in light, well-drained soil and space them 1 to 2 inches apart. Sow the seeds at 3-week intervals for continued harvest. Seedlings require about 1 inch of water per week. Keep established plants moist.']);

db.end();
