USE artisthub;


-- notes about how to improve our DB structure, as there is a lot of redundancy and overcomplication:

-- id needs to be deleted for all models, and removed from seeds.
-- sequelize generates the id for us

-- bandImage should be moved into the bandUser page, doesn't need to be separate
-- Foreign Keys should not be defined here at all (see "FOREIGNKEY", take it out). 
-- Foreign Keys should instead have the BandUser ID added onto their models. i.e., bandImage, tourDate, and Favorites should just have the bandUser ID attached to them for association.
-- model should be changed, if time allows, to band, user, tourDate, and favorite.
    -- band will include all of the information already in bandUser, but add bandImage
    -- user will remain the same.
    -- tourDate will contain the same model, but also include the band ID.
    -- favorite will be almost the same, but only needs to take in the band ID and user's ID.
        -- we will need to be able to pull all data from the band ID so we can display the data in Favorite Card.

-- User table 
-- TourDate Table
