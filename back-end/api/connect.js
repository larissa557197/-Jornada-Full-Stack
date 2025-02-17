import {MongoClient} from "mongodb";

const URI = "mongodb+srv://larissamuniz:47NOy6cXsgnFQ4Y3@replica-spotify.2qums.mongodb.net/?retryWrites=true&w=majority&appName=Replica-Spotify";

// instanciando a conexão com o cliente
const cliente = new MongoClient(URI);

// testando
export const db = cliente.db("replicaSpotify")

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);

