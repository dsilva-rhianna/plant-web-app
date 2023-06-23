SELECT *
FROM plants
JOIN categories
    ON plants.categoryId = categories.categoryId
ORDER BY
    plants.plantId;