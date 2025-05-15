import {
  collection,
  getDocs,
} from 'firebase/firestore';

import { db } from '../config/firestore';

export interface ProjectData {
  title: string;
  snippet: string;
  tech_stack: string[];
  project_link: string
}

export const getAllProjects = async () => {
  const collectionRef = collection(db, 'projects');
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
