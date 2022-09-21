import os


os.system("npx sequelize-cli model:generate --name role_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name user_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name match_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name commission_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name bet_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name ledger_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name user_block_logging_table --attributes name:string")
os.system("npx sequelize-cli model:generate --name payment_table --attributes name:string")

os.system("npx sequelize-cli seed:generate --name seeder_role_table")
os.system("npx sequelize-cli seed:generate --name seeder_user_table")
os.system("npx sequelize-cli seed:generate --name seeder_match_table")
os.system("npx sequelize-cli seed:generate --name seeder_commission_table")
os.system("npx sequelize-cli seed:generate --name seeder_ledger_table")
os.system("npx sequelize-cli seed:generate --name seeder_bet_table")
os.system("npx sequelize-cli seed:generate --name seeder_user_block_logging_table")
os.system("npx sequelize-cli seed:generate --name seeder_payment_table")
