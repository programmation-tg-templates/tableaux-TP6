// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {supprimerDoublons} from '../index';


describe('supprimerDoublons', () => {
  test('doit supprimer les doublons consécutifs d\'un tableau', () => {
    expect(supprimerDoublons([1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('doit supprimer les doublons non consécutifs d\'un tableau', () => {
    expect(supprimerDoublons([1, 2, 3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
  });

  test('doit retourner le même tableau s\'il n\'y a pas de doublons', () => {
    expect(supprimerDoublons([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('doit retourner un tableau vide si l\'entrée est vide', () => {
    expect(supprimerDoublons([])).toEqual([]);
  });

  test('doit gérer un tableau où tous les éléments sont identiques', () => {
    expect(supprimerDoublons([5, 5, 5, 5])).toEqual([5]);
  });

  test('doit gérer les nombres négatifs et zéro', () => {
    expect(supprimerDoublons([0, -1, -1, 2, 0])).toEqual([0, -1, 2]);
  });
});