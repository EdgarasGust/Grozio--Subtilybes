import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

import { deleteObject, ref, getStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryImageService {
  imageDetailsList: AngularFireList<any>;
  images: Observable<any[]>;
  storage = getStorage();
  private category = '';

  constructor(private firebase: AngularFireDatabase) {}

  getImageDetailList(string: string) {
    return (this.imageDetailsList = this.firebase.list(`${string}`));
  }

  insertImageDetails(imageDetails: any) {
    this.category = imageDetails.category;

    if (this.category === 'klasikinis') {
      this.firebaseList('klasikinis', imageDetails);
    }
    if (this.category === 'hibridinis') {
      this.firebaseList('hibridinis', imageDetails);
    }
    if (this.category === 'volume') {
      this.firebaseList('volume', imageDetails);
    }
    if (this.category === 'mega-volume') {
      this.firebaseList('mega-volume', imageDetails);
    }
    if (this.category === 'kim') {
      this.firebaseList('kim', imageDetails);
    }
    if (this.category === 'babyLashes') {
      this.firebaseList('babyLashes', imageDetails);
    }
    if (this.category === 'wet-lashes') {
      this.firebaseList('wet-lashes', imageDetails);
      console.log('wet-lashes');
    }
    if (this.category === 'laminavimas') {
      this.firebaseList('laminavimas', imageDetails);
    }
    if (this.category === 'antakiai') {
      this.firebaseList('antakiai', imageDetails);
    }
    if (this.category === 'permanentas') {
      this.firebaseList('permanentas', imageDetails);
    }
    if (this.category === 'depiliacija') {
      this.firebaseList('depiliacija', imageDetails);
    }
  }

  private firebaseList(locationRef: string, imageDetails: any) {
    this.imageDetailsList = this.firebase.list(`${locationRef}`);
    const newRef = this.imageDetailsList.push(imageDetails);
    const newKey = newRef.key;
    console.log(this.imageDetailsList);
    console.log(newRef);

    this.firebase
      .list(`${locationRef}`)
      .update(newKey!, { key: newKey })
      .then(() => {
        console.log('Realtime database updated');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeItem(key: string, imageId: string, category: string) {
    if (key && imageId) {
      this.imageDetailsList.remove(key);
      const deleteFromStorage = ref(this.storage, `${category}/${imageId}`);
      deleteObject(deleteFromStorage).then(() => {
        console.log(`File deleted, ref: ', ${category}/${imageId}`);
      });
    } else {
      alert('There was a problem! Try again');
    }
  }
}
