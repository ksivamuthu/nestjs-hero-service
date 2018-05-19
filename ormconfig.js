module.exports = {
    'type': 'mongodb',
    'host': 'localhost',
    'database': 'dev-heroes',
    "entities": ["src/**/**.model{.ts,.js}"],
    "synchronize": true
};