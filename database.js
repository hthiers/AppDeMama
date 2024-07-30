import { openDatabase } from 'expo-sqlite/legacy';

let db;

export const initDB = async () => {
  try {
    db = openDatabase('numbers.db');
    await new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS numbers (id INTEGER PRIMARY KEY AUTOINCREMENT, value TEXT);',
          [],
          () => {
            resolve();
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
    console.log('Database initialized');
  } catch (error) {
    console.error('Failed to open database', error);
    throw error;
  }
};

export const insertNumber = async (number) => {
  try {
    return await new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO numbers (value) values (?);',
          [number],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  } catch (error) {
    console.error('Failed to insert number', error);
    throw error;
  }
};
