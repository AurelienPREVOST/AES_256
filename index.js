//check if node is installed : node -v
//then
//npm init -y
//node index.js

const crypto = require('crypto');

// Génération d'une clé AES-256 (32 octets)
const key = crypto.randomBytes(32); // Clé de 256 bits (32 octets)

// Génération d'un vecteur d'initialisation (IV) de 16 octets
const iv = crypto.randomBytes(16); // IV de 128 bits (16 octets)

// Fonction pour chiffrer un texte
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Fonction pour déchiffrer un texte
function decrypt(encrypted) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Texte à chiffrer
const plainText = "Ceci est un texte secret.";

// Chiffrement
const encryptedText = encrypt(plainText);
console.log(`Texte chiffré: ${encryptedText}`);

// Déchiffrement
const decryptedText = decrypt(encryptedText);
console.log(`Texte déchiffré: ${decryptedText}`);
