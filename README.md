# Tableaux - TP6 - Supprimer les doublons

## Consignes

Écrire une fonction `supprimerDoublons` qui prend en paramètre un tableau de nombres et retourne un nouveau tableau contenant les mêmes éléments mais sans doublons.

L'ordre de la première apparition de chaque élément doit être préservé.

**Signature de la fonction :**

```ts
function supprimerDoublons(tableau: number[]): number[]
```

## Exemples

- `supprimerDoublons([1, 2, 2, 3, 4, 4, 5])` doit retourner `[1, 2, 3, 4, 5]`
- `supprimerDoublons([5, 5, 5, 5])` doit retourner `[5]`
- `supprimerDoublons([1, 2, 3, 4, 5])` doit retourner `[1, 2, 3, 4, 5]`
- `supprimerDoublons([3, 1, 2, 1, 3])` doit retourner `[3, 1, 2]`
- `supprimerDoublons([])` doit retourner `[]`
