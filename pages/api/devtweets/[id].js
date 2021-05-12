import { firestore } from "src/firebase/admin";

export default (req, res) => {
  const { query } = req;
  const { id } = query;

  firestore
    .collection("devtweets")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;

      res.json(data);
    })
    .catch(() => {
      res.status(404).end();
    });
};
