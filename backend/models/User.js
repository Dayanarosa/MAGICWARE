 //modelo User
 import bcrypt from 'bcryptjs';
import db from '../config/db.js';

//register
export const createUser = async (username, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword,role], (err, results) => {
                if (err)  reject(err)
                    resolve(results)
                });
            });
        };
 

//login
export const findUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
            if (err)  reject(err)
            resolve(results[0]); 
            
        });
    });
}


//token y rol 
export const findUserById = (id) => {
    return new promise ((resolve, reject) => {
        db.query ('SELECT Id, username, role FROM users WHERE Id = ?', [id], (err, results) => {
            if (err) reject(err);
            resolve(results[0]);
        });
    });
}