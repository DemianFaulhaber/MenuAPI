import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('menu', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port:'3306',
    timezone:'-3:00',
})

class Product extends Model {}

//Product Table model
Product.init({
    product_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_price:{
        type: DataTypes.FLOAT(10,2),
        allowNull: false,
    },
    product_category:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "Uncategorized" 
    },
    user_id:{
        type: DataTypes.UUID,
        allowNull:false,
    }
}, {
    sequelize,
    modelName: "Product",
});

export {Product}


