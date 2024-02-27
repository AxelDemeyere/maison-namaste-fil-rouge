const admin = require('firebase-admin');

const serviceAccount = require('./path/to/your-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const createUser = async (userData) => {
  const userRef = db.collection('users').doc(userData.email);
  const doc = await userRef.get();
  if (doc.exists) {
    throw new Error('User already exists');
  } else {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    await userRef.set({ ...userData, password: hashedPassword });
  }
};

const findUserByEmail = async (email) => {
  const userRef = db.collection('users').doc(email);
  const doc = await userRef.get();
  if (!doc.exists) {
    return null;
  } else {
    return doc.data();
  }
};