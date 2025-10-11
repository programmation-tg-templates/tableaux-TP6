// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {supprimerDoublons} from '../index';


describe('supprimerDoublons', () => {
  it('should remove duplicates from an array with consecutive duplicates', () => {
    expect(supprimerDoublons([1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should remove duplicates from an array with non-consecutive duplicates', () => {
    expect(supprimerDoublons([1, 2, 3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
  });

  it('should return the same array if there are no duplicates', () => {
    expect(supprimerDoublons([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should return an empty array if input is empty', () => {
    expect(supprimerDoublons([])).toEqual([]);
  });

  it('should handle an array with all elements the same', () => {
    expect(supprimerDoublons([5, 5, 5, 5])).toEqual([5]);
  });

  it('should handle negative numbers and zero', () => {
    expect(supprimerDoublons([0, -1, -1, 2, 0])).toEqual([0, -1, 2]);
  });
});