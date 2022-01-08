import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

import { fetchCollectionAsync, fetchCollectionStart } from './shop.saga';

describe('fetch collections start saga', () => {
  test('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = fetchCollectionStart();
    expect(generator.next().value).toEqual(
      takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollectionAsync();

  test('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  test('should call convertCollectionsSnapshot saga', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot)
    );
  });

  test('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchCollectionsSuccess(mockCollectionsMap))
    );
  });

  // test('should fire fetchCollectionsFailure if get collection fails at any point', () => {
  //   const newGenerator = fetchCollectionAsync();
  //   newGenerator.next();
  //   expect(newGenerator.throw({ message: 'error' }).value).toEqual(
  //     put(fetchCollectionsFailure('error'))
  //   );
  // });
});
